import { Request, Response } from "express";
import { UpdateTaskServices } from "../../Services/tasks/UpdateTaskServices";

class UpdateTaskController {
  async execute(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, status, end_at, company_id, employee_id } =
      req.body;

    const updateTaskServices = new UpdateTaskServices();

    // console.log(id);

    const UpdateTask = await updateTaskServices.handle({
      id,
      title,
      description,
      status,
      end_at,
      company_id,
      employee_id,
    });

    res.json(UpdateTask);
  }
}

export { UpdateTaskController };
