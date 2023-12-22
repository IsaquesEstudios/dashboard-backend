import { Request, Response } from "express";
import { CreateNewPlanServices } from "../../Services/Plans/CreateNewPlanServices";

class CreateNewPlanController {
  async execute(req: Request, res: Response) {
    const { auto_recurring, back_url, payment_methods_allowed, reason } =
      req.body;

      console.log(req.body)

    const createNewPlanServices = new CreateNewPlanServices();

    const { data } = await createNewPlanServices.handle({
      auto_recurring,
      back_url,
      payment_methods_allowed,
      reason,
    });

    res.json(data);
  }
}

export { CreateNewPlanController };
