import { query } from "express";
import { MercadoPagoApi } from "../../config/ApiMercadoPago";

type ShowAllPlansServicesType = {
  status?: string;
  q?: string;
  sort?: string;
  criteria?: string;
  offset?: number;
  limit?: number;
};

class ShowAllPlansServices {
  async handle({
    status,
    q,
    sort,
    criteria,
    offset,
    limit,
  }: ShowAllPlansServicesType) {
    const { data } = await MercadoPagoApi.get("/preapproval_plan/search", {
      params: {
        status: status,
        q: q,
        sort: sort,
        criteria: criteria,
        offset: offset,
        limit: limit,
      },
    });

    const PlansValue = data.results.map((item: any, index: number) => {
      const value = item.auto_recurring.transaction_amount;
      const subscribed = item.subscribed;

      const results = value * subscribed;

      return results;
    });

    const AllPlansValue = PlansValue.reduce((item: any, index: any) => {
      return item + index;
    }).toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    const Plans = {
      data,
      PlansValue,
      AllPlansValue,
    };
    return Plans;
  }
}

export { ShowAllPlansServices };
