import { ShowPaymentController } from "../../Controller/payment/ShowPaymentController";
import { MercadoPagoApi } from "../../config/ApiMercadoPago";

interface ShowAllPaymentServicesType {
  external_reference: string | any;
  sort: string | any;
  criteria: string | any;
  limit: number | any;
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
        limit: limit,
      },
    });

    const Month = new Date().getMonth() + 1;

    const allReceivedPayment = data.results.filter(
      (item: any) => item.collector_id != null || undefined
    );
    const currentMonth = allReceivedPayment.filter(
      (item: any) => new Date(item.date_created).getMonth() + 1 == Month
    );
    // 837546
    // filter user payment
    const filterUser = allReceivedPayment.filter(
      (item:any) => item.point_of_interaction.transaction_data.bank_info?.payer.account_id 
      // .transaction_data.bank_info.payer.account_id == 837546
    )

    // separar valores em objeto
    const allCurrentValueMonth = currentMonth.map((item: any, _: number) => {
      return item.transaction_amount;
    });

    const totalValueMonth = allCurrentValueMonth.reduce(
      (acc: any, value: number) => {
        return acc + value;
      }
    );

    const payments = {
      allReceivedPayment,
      currentMonth,
      totalValueMonth,
      filterUser
    };

    return payments;
  }
}

export { ShowAllPaymentServices };
