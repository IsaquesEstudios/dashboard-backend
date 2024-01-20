import { MercadoPagoApi } from "../../config/ApiMercadoPago";

import { v4 as uuidv4 } from "uuid";

type CreateNewPaymentServicesType = {
  description: string;
  installments: number;
  external_reference: string;
  email: string;
  first_name: string;
  last_name: string;
  payment_method_id: string;
  transaction_amount: number;
};

class CreateNewPaymentServices {
  async handle({
    description,
    email,
    installments,
    external_reference,
    first_name,
    last_name,
    payment_method_id,
    transaction_amount,
  }: CreateNewPaymentServicesType) {
    const { data } = await MercadoPagoApi.post("/", {
      description: description,
      installments: installments,
      external_reference: external_reference,
      payer: {
        email: email,
        first_name: first_name,
        last_name: last_name,
      },
      payment_method_id: payment_method_id,
      transaction_amount: transaction_amount,
    });

    return data;
  }
}

export { CreateNewPaymentServices };
