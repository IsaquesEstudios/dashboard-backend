import { Request, Response } from "express";
import { SendFormSimCompanyParceriaServices } from "../../Services/Forms/SendFormSimCompanySocietyServices";

class SendFormSimCompanySocietyController {
  async execute(req: Request, res: Response) {
    const { emailTo, title, name, email, number, city } = req.body;

    const SimCompany = new SendFormSimCompanyParceriaServices();

    await SimCompany.handle({ emailTo, title, name, email, number, city });

    res.json(SimCompany);
  }
}

export { SendFormSimCompanySocietyController };
