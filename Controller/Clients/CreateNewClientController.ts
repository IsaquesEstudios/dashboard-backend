import { Response, Request } from "express";
import { CreateNewClientServi } from "../../Services/Clients/CreateNewClientServices";

class CreateNewClientController {
  async execute(req: Request, res: Response) {
    const { name, email, company, receive, maintenance } = req.body;

    const createNewClientServices = new CreateNewClientServi();

    const CreateNewClient = await createNewClientServices.handle({
      name,
      email,
      company,
      receive,
      maintenance,
    });

    res.json(CreateNewClient);
  }
}

export { CreateNewClientController };
