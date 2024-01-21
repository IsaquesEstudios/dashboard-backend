import { AxiosError } from "axios";
import { MercadoPagoApi } from "../../config/ApiMercadoPago";

export type CreateNewPlanServicesType = {
  auto_recurring: {
    frequency: number;
    frequency_type: string;
    repetitions: number;
    billing_day: number;
    billing_day_proportional: boolean;
    free_trial: {
      frequency: number;
      frequency_type: string;
    };
    transaction_amount: number;
    currency_id: string;
  };
  back_url: string;
  payment_methods_allowed: {
    payment_types: [
      {
        id: string;
      }
    ];
    payment_methods: [
      {
        id: string;
      }
    ];
  };
  reason: string;
};

class CreateNewPlanServices {
  async handle({
    auto_recurring,
    back_url,
    payment_methods_allowed,
    reason,
  }: CreateNewPlanServicesType) {
   

    const NewPlan = await MercadoPagoApi.post("/preapproval_plan", {
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        repetitions: auto_recurring.repetitions,
        billing_day: auto_recurring.billing_day,
        billing_day_proportional: auto_recurring.billing_day_proportional,
        transaction_amount: auto_recurring.transaction_amount,
        currency_id: auto_recurring.currency_id,
      },
      back_url: back_url,
      reason: reason,
    });

    return NewPlan;
  }
}

export { CreateNewPlanServices };
