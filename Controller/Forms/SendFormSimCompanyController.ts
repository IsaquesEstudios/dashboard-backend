import { Request, Response } from "express";
import { SendFormSimCompanyServices } from "./../../Services/Forms/SendFormSimCompanyServices";

class SendFormSimCompanyController {
  async execute(req: Request, res: Response) {
    const { emailTo, title, name, email, number, city } = req.body;

    const SimCompany = new SendFormSimCompanyServices();

    await SimCompany.handle({ emailTo, title, name, email, number, city });

    res.json(SimCompany);
  }
}

export { SendFormSimCompanyController };
