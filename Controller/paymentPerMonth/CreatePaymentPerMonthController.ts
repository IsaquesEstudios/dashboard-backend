import { Request, Response } from "express";
import { CreatePaymentPerMonthServices } from "../../Services/paymentPerMonth/CreatePaymentPerMonthServices";

class CreatePaymentPerMonthController {
  async execute(req: Request, res: Response) {
    const { title, company_id, value, pay_day, description } = req.body;

    const CreatePaymentPerMonth = new CreatePaymentPerMonthServices();
    const RemoveComma: string[] = value.split(",");
    const SortItems = RemoveComma.map((item) => {
      return `${item}.`;
    });
    const SomeItens = SortItems.reduce((item, index) => {
      return `${item + index}`;
    });
    const Value: string = `${SomeItens.substring(0, SomeItens.length - 1)}`;

    const CreatePayment = await CreatePaymentPerMonth.handle({
      company_id,
      value: Value,
      pay_day,
      title,
      description,
    });

    res.json(CreatePayment);
  }
}
export { CreatePaymentPerMonthController };
