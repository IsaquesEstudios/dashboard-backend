import { Request, Response } from "express";
import { ShowPlanServices } from "../../Services/Plans/ShowPlanServices";

class ShowPlanController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;

    const ShowPlanService = new ShowPlanServices();

    const { data } = await ShowPlanService.handle(id);

    res.json(data)
  }
}

export { ShowPlanController };
