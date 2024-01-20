import { Request, Response } from "express";
import { ShowAllPaymentServices } from "../../Services/payment/ShowAllPaymentServices";

class ShowAllPaymentController {
  async execute(req: Request, res: Response) {
    const { external_reference, sort, criteria } = req.query;
    const ShowAllPaymentservices = new ShowAllPaymentServices();

    const AllPayments = await ShowAllPaymentservices.execute({
      external_reference,
      criteria,
      sort,
    });

    res.json(AllPayments);
  }
}

export { ShowAllPaymentController };
