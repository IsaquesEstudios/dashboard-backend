import { Request, Response } from "express";
import { CreateNewEmployeeServices } from "../../Services/employee/CreateNewEmployeeServices";

class CreateNewEmployeeController {
  async execute(req: Request, res: Response) {
    const { email, name, number, job } = req.body;

    const CreateNewEmployee = new CreateNewEmployeeServices();

    const NewEmployee = await CreateNewEmployee.handle({ email, name, number, job });

    res.json(NewEmployee);
  }
}

export { CreateNewEmployeeController };
