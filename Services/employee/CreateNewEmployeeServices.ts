import { Prisma } from "../../config/Prisma";

type CreateNewEmployeeTypes = {
  email: string;
  name: string;
  number: string;
  job: string;
};

class CreateNewEmployeeServices {
  async handle({ email, name, number, job }: CreateNewEmployeeTypes) {
    const newEmployee = await Prisma.employee.create({
      data: {
        email: email,
        name: name,
        number: number,
        job: job,
      },
    });

    return newEmployee;
  }
}

export { CreateNewEmployeeServices };
