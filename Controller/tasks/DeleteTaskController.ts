import { Request, Response } from "express";
import { Prisma } from "../../config/Prisma";
import { DeleteTaskServices } from "../../Services/tasks/DeleteTaskServices";

class DeleteTaskController {
  async execute(req: Request, res: Response) {
    const { id } = req.body;

    const deleteTaskController = new DeleteTaskServices();

    const DeleteTask = await deleteTaskController.execute(id);

    res.json(DeleteTask);
  }
}

export { DeleteTaskController };
