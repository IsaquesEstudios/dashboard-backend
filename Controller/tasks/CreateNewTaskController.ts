import { Request, Response } from "express";
import { CreateNewTaskServices } from "../../Services/tasks/CreateNewTaskServices";

class CreateNewTaskController {
  async execute(req: Request, res: Response) {
    const { title, description, end_at, status, company_id, employee_id } =
      req.body;

    const createNewTaskServices = new CreateNewTaskServices();

    const createNewTask = await createNewTaskServices.handle({
      title,
      description,
      end_at,
      status,
      company_id,
      employee_id,
    });

    res.json(createNewTask);
  }
}

export { CreateNewTaskController };
