import { Request, Response } from "express";
import { ShowPaymentServices } from "../../Services/payment/ShowPaymentServices";

class ShowPaymentController {
  async execute(req: Request, res: Response) {
    const ShowPaymentcontroller = new ShowPaymentServices();

    const payment = await ShowPaymentcontroller.handle(req.params.id);

    res.json(payment);
  }
}

export { ShowPaymentController };
