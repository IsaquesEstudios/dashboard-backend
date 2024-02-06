import { Response, Request } from "express";
import { ShowAllClientServices } from "../../Services/Clients/ShowAllClientServices";

class ShowAllClientsController {
  async execute(req: Request, res: Response) {
    const showAllClientServices = new ShowAllClientServices()

    const AllClients = await showAllClientServices.handle()

    console.log(AllClients)

    res.json(AllClients)
  }
}

export { ShowAllClientsController };
