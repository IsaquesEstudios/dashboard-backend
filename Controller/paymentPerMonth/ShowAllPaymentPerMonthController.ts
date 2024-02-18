import { Request, Response } from "express";
import { ShowAllPaymentPerMonthServices } from "../../Services/paymentPerMonth/ShowAllPaymentPerMonthServices";

class ShowAllPaymentPerMonthController {
  async execute(req: Request, res: Response) {
    const showAllPaymentPerMonthServices = new ShowAllPaymentPerMonthServices();

    const ShowAllPayment = await showAllPaymentPerMonthServices.handle();

    res.json(ShowAllPayment);
  }
}

export { ShowAllPaymentPerMonthController };
