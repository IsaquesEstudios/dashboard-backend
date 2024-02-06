import { Request, Response } from "express";
import { ShowAllTasksServices } from "../../Services/tasks/ShowAllTasksServices";

class ShowAllTasksController {
  async execute(req: Request, res: Response) {
    const showAllTasksServices = new ShowAllTasksServices();

    const AllTasks = await showAllTasksServices.handle();

    res.json(AllTasks);
  }
}

export { ShowAllTasksController };
