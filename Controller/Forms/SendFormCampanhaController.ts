import { Request, Response } from "express";
import { CampanhasServices } from "../../Services/Forms/SendFormCampanhaServices";

class SendFormCampanhaController {
  async execute(req: Request, res: Response) {
    const {
      emailTo,
      title,
      domain,
      name,
      email,
      phone,
      state,
      city,
      branches,
      companyName,
      message,
    } = req.body;

    const campanhasServices = new CampanhasServices();

    const Campanhas = await campanhasServices.handle({
      emailTo,
      title,
      domain,
      name,
      email,
      phone,
      state,
      city,
      branches,
      companyName,
      message,
    });

    res.json(Campanhas);
  }
}

export { SendFormCampanhaController };
