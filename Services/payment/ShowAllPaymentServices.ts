import { MercadoPagoApi } from "../../config/ApiMercadoPago";

interface ShowAllPaymentServicesType {
  external_reference: string | any;
  sort: string | any;
  criteria: string | any;
}

class ShowAllPaymentServices {
  async execute({ external_reference = null, sort, criteria }: ShowAllPaymentServicesType) {
    const { data } = await MercadoPagoApi.get("/v1/payments/search", {
      params: {
        external_reference: external_reference,
        sort: sort,
        criteria: criteria,
      },
    });

    return data;
  }
}

export { ShowAllPaymentServices };
