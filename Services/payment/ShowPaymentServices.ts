import { MercadoPagoApi } from "../../config/ApiMercadoPago";

class ShowPaymentServices {
  async handle(id: any) {
    const { data } = await MercadoPagoApi.get(`/v1/payments/${id}`);

    return data;
  }
}

export { ShowPaymentServices };
