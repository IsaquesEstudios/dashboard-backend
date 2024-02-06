import { Request, Response } from "express";
import { CreateNewTaskServices } from "../../Services/tasks/CreateNewTaskServices";

class CreateNewTaskController {
  async execute(req: Request, res: Response) {
    const { titulo, description, client, finishes, employee } = req.body;

    const createNewTaskServices = new CreateNewTaskServices();

    const createNewTask = await createNewTaskServices.handle({
      titulo,
      description,
      finishes,
      client,
      employee,
    });

    res.json(createNewTask);
  }
}

export { CreateNewTaskController };
