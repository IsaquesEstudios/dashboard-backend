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
    const Plans = await MercadoPagoApi.get("/preapproval_plan/search", {
      params: {
        status: status,
        q: q,
        sort: sort,
        criteria: criteria,
        offset: offset,
        limit: limit,
      },
    });

    return Plans.data;
  }
}

export { ShowAllPlansServices };
