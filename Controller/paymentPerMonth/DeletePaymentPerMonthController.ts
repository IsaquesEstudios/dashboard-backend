import { Request, Response } from "express";
import { DeletePaymentPerMonthServices } from "../../Services/paymentPerMonth/DeletePaymentPerMonthServices";

class DeletePaymentPerMonthController {
  async execute(req: Request, res: Response) {
    const { id } = req.body;
    const deletePaymentPerMonthController = new DeletePaymentPerMonthServices();

    const DeletePayment = await deletePaymentPerMonthController.handle(id);

    res.json(DeletePayment);
  }
}

export { DeletePaymentPerMonthController };
