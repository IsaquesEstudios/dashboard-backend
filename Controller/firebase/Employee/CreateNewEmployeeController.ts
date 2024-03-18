import { Request, Response } from "express";
import { FirebaseCreateNewEmployeeServices } from "../../../Services/firebase/Employee/CreateNewEmployeeServices";

class FirebaseCreateNewEmployeeController {
  async execute(req: Request, res: Response) {
    const {
      displayName,
      email,
      disabled,
      emailVerified,
      password,
      phoneNumber,
      photoURL,
    } = req.body;
    const createNewEmployeeServices = new FirebaseCreateNewEmployeeServices();

    const createEmployee = await createNewEmployeeServices.handle({
      displayName,
      email,
      disabled,
      emailVerified,
      password,
      phoneNumber,
      photoURL,
    });

    res.json(createEmployee)
  }
}

export { FirebaseCreateNewEmployeeController };
