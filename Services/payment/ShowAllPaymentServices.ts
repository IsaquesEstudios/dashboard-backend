import { ShowPaymentController } from "../../Controller/payment/ShowPaymentController";
import { MercadoPagoApi } from "../../config/ApiMercadoPago";
import { Prisma } from "../../config/Prisma";

interface ShowAllPaymentServicesType {
  external_reference: string | any;
  sort: string | any;
  criteria: string | any;
  limit: number | any;
}

interface PaymentRecivedType {
  date_approved: string;
  status: string;
  transaction_details: {
    total_paid_amount: number;
    transaction_id: string;
  };
  issuer_id: string;
}

class ShowAllPaymentServices {
  async execute({
    external_reference = null,
    sort,
    criteria,
    limit,
  }: ShowAllPaymentServicesType) {
    const { data } = await MercadoPagoApi.get("/v1/payments/search", {
      params: {
        external_reference: external_reference,
        sort: sort,
        criteria: criteria,
        limit: 100,
      },
    });
    const actualDate = new Date();
    const actualMonth = actualDate.getMonth() + 1;
    const longMonth = actualDate.toLocaleString("pt-BR", { month: "long" });

    // mês pelo nome long
    function getMonthName(date: any) {
      const NewDate = new Date(date);
      const options: any = { month: "long" };
      return NewDate.toLocaleString("default", options);
    }

    // somar array de objetos e retornar valor final
    function sumTotalPaidAmount(payments: any) {
      let totalSum = 0;
      var payment: any;

      // Verifica se é um array de objetos PaymentRecivedType
      if (Array.isArray(payments)) {
        for (const payment of payments) {
          // Verifica se a propriedade transaction_details existe
          if (
            payment.hasOwnProperty("transaction_details") &&
            typeof payment.transaction_details === "object"
          ) {
            totalSum += payment.transaction_details.total_paid_amount;
          }
        }
      } else {
        // Caso seja um único objeto, verifica a propriedade transaction_details
        if (
          payment.hasOwnProperty("transaction_details") &&
          typeof payment.transaction_details === "object"
        ) {
          totalSum += payment.transaction_details.total_paid_amount;
        }
      }

      return totalSum;
    }

    const allReceivedPayment = data.results.filter(
      (item: any) => item.collector_id === 513614546
    );

    const filterPerMonth = allReceivedPayment.filter(
      (item: PaymentRecivedType) => {
        const data: any = new Date(item.date_approved).getMonth();
        return data == actualDate.getMonth();
      }
    );

    const totalCurrentMonth: number = sumTotalPaidAmount(filterPerMonth);

    // verifica e cria novo pagamento
    const inserItem = async (newItemData: PaymentRecivedType) => {
      const ExistingItem = await Prisma.payment.findFirst({
        where: {
          transaction_id: newItemData.transaction_details.transaction_id,
        },
      });

      if (!ExistingItem) {
        return Prisma.payment.create({
          data: {
            date_approved: newItemData.date_approved,
            month: getMonthName(newItemData.date_approved),
            issuer_id: newItemData.issuer_id,
            status: newItemData.status,
            total_paid_amount:
              newItemData.transaction_details.total_paid_amount.toLocaleString(
                "pt-BR",
                { style: "currency", currency: "BRL" }
              ),
            transaction_id: newItemData.transaction_details.transaction_id,
          },
        });
      }
    };

    filterPerMonth.forEach((element: PaymentRecivedType) => {
      inserItem(element);
    });

    const UpdateTotalValueMonth = async (month: string, year: number) => {
      const findPayment = await Prisma.saveTotalForMonth.findFirst({
        where: {
          month: month,
          year: year,
        },
      });

      if (!!findPayment) {
        await Prisma.saveTotalForMonth.update({
          where: {
            id: findPayment.id,
          },
          data: {
            total_month: String(totalCurrentMonth),
          },
        });
      }
    };
    UpdateTotalValueMonth(longMonth, actualDate.getFullYear());

    const showAllSaveTotalForMonth = await Prisma.saveTotalForMonth.findMany({
      orderBy: {
        identifier: "asc",
      },
      take: 12,
    });

    return { totalCurrentMonth, showAllSaveTotalForMonth, filterPerMonth };
  }
}

export { ShowAllPaymentServices };
