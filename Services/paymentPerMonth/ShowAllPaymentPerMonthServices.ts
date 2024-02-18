import { Prisma } from "../../config/Prisma";

class ShowAllPaymentPerMonthServices {
  async handle() {
    const ShowAllPaymentPerMonth = await Prisma.paymentPerMonth.findMany({
      include: {
        company: true,
      },
    });

    const AllValuesArray = ShowAllPaymentPerMonth.map((item: any, index) => {
      return parseFloat(item.value);
    });

    const AllValuePerMonth = AllValuesArray.reduce((item: any, value: any) => {
      return item + value;
    }).toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    return { payment: ShowAllPaymentPerMonth, AllValuePerMonth };
  }
}

export { ShowAllPaymentPerMonthServices };
