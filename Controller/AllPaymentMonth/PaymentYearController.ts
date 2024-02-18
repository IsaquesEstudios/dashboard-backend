import { Request, Response } from "express";
import { PaymentYearServices } from "../../Services/AllPaymentMonth/AllPaymentMonthServices";

class PaymentYearController {
  async execute(req: Request, res: Response) {
    const { ActualValue, monts } = req.body;

    const CreatePaymentYear = new PaymentYearServices();

    const PaymentYear = await CreatePaymentYear.execute({ ActualValue, monts });

    res.json(PaymentYear);
  }
}

export { PaymentYearController };
