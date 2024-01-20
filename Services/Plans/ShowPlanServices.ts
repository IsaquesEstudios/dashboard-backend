import { MercadoPagoApi } from "../../config/ApiMercadoPago";

class ShowPlanServices {
  async handle(id: any) {
    const ShowPlan = await MercadoPagoApi.get(`/preapproval_plan/${id}`);

    return ShowPlan;
  }
}

export { ShowPlanServices };
