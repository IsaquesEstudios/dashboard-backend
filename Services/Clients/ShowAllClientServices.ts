import { db } from "../../config/Firebase";
import { Prisma } from "../../config/Prisma";

class ShowAllClientServices {
  async handle() {
    const AllClient = await Prisma.company.findMany();

    return AllClient;
  }
}

export { ShowAllClientServices };
