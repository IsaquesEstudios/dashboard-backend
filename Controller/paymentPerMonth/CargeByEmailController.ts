import { Request, Response } from "express";
import { ChargeByEmailServices } from "../../Services/paymentPerMonth/ChargeByEmailServices";

export class ChargeByEmailController {
  async execute(req: Request, res: Response) {
    const chargeByEmailServices = new ChargeByEmailServices();

    const chargeByEmail = await chargeByEmailServices.handle();

    res.json(chargeByEmail);
  }
}
