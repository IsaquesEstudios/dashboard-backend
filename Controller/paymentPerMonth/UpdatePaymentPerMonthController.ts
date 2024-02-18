import { Request, Response } from "express";
import { UpdatePaymentPerMonthServices } from "../../Services/paymentPerMonth/UpdatePaymentPerMonthServices";

class UpdatePaymentPerMonthController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const { title, companyId, description, pay_day, payment_id, value } =
      req.body;

    const updatePaymentPerMonthServices = new UpdatePaymentPerMonthServices();

    const UpdatePaymentPerMonth = await updatePaymentPerMonthServices.handle({
      id,
      title,
      companyId,
      description,
      pay_day,
      payment_id,
      value,
    });

    res.json(UpdatePaymentPerMonth)
  }
}

export { UpdatePaymentPerMonthController };
