import { MercadoPagoApi } from "../../config/ApiMercadoPago";
import { Prisma } from "../../config/Prisma";

type PaymentYearType = {
  ActualValue: string;
  monts?: [];
};

export class PaymentYearServices {
  async execute({ ActualValue, monts }: PaymentYearType) {
    const { data } = await MercadoPagoApi.get("/v1/payments/search", {
      params: {
        sort: "date_approved",
          criteria: "desc",
          // status: "active",
          limit: "100",
      },
    });

    const date = new Date()
    const getAtualHours = date.getHours

    

    const ult = new Date(date.getFullYear(), date.getMonth() + 1, 0);


    return data
  }
}
