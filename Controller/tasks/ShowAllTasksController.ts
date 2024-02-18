import { Request, Response } from "express";
import { ShowAllTasksServices } from "../../Services/tasks/ShowAllTasksServices";

class ShowAllTasksController {
  async execute(req: Request, res: Response) {
    const { includes } = req.query;

    const showAllTasksServices = new ShowAllTasksServices();

    const AllTasks = await showAllTasksServices.handle({ includes });

    res.json(AllTasks);
  }
}

export { ShowAllTasksController };
