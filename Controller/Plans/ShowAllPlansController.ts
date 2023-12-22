import { Request, Response } from "express";
import { ShowAllPlansServices } from "../../Services/Plans/ShowAllPlansServices";

class ShowAllPlansController {
  async execute(req: Request, res: Response) {
    const params = req.query
    const ShowAllPlanService = new ShowAllPlansServices();

    const ShowAllPlan = await ShowAllPlanService.handle(params);

    res.json(ShowAllPlan);
  }
}

export { ShowAllPlansController };
