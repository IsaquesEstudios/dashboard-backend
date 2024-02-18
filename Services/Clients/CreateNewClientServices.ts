import { Prisma } from "../../config/Prisma";

interface CreateNewClientOptionInterface {
  owner: string;
  company_name: string;
  email: string;
  number: string;
}

class CreateNewClientServi {
  async handle({
    owner,
    company_name,
    email,
    number,
  }: CreateNewClientOptionInterface) {
    const newUser = await Prisma.company.create({
      data: {
        owner: owner,
        company_name: company_name,
        email: email,
        number: number,
      },
    });

    return newUser;
  }
}

export { CreateNewClientServi };
