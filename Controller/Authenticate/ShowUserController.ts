import { Request, Response } from "express";
import { ShowUserServices } from "../../Services/Authenticate/ShowUserServices";

class ShowUserController {
  async execute(req: Request, res: Response) {
    const a = req.body;

    const showUserServices = new ShowUserServices();

    const ShowUser = await showUserServices.handle();

    res.json({ ShowUser });
  }
}

export { ShowUserController };
