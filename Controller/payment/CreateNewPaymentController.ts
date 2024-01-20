import { Request, Response } from "express";
import { CreateNewPaymentServices } from "../../Services/payment/CreateNewPaymentServices";

class CreateNewPaymentController {
  async execute(req: Request, res: Response) {
    const {
      description,
      installments,
      external_reference,
      email,
      first_name,
      last_name,
      payment_method_id,
      transaction_amount,
    } = req.body;

    const NewPaymentService = new CreateNewPaymentServices();

    const Payment = await NewPaymentService.handle({
      description,
      installments,
      external_reference,
      email,
      first_name,
      last_name,
      payment_method_id,
      transaction_amount,
    });

    res.json(Payment);
  }
}

export { CreateNewPaymentController };
