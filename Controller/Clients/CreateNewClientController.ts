import { Response, Request } from "express";
import { CreateNewClientServi } from "../../Services/Clients/CreateNewClientServices";

class CreateNewClientController {
  async execute(req: Request, res: Response) {
    const { owner, company_name, email, number } = req.body;

    const createNewClientServices = new CreateNewClientServi();

    const CreateNewClient = await createNewClientServices.handle({
      owner,
      company_name,
      email,
      number,
    });

    res.json(CreateNewClient);
  }
}

export { CreateNewClientController };
