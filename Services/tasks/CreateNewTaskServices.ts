import { addDoc, collection } from "firebase/firestore";
import { Prisma } from "../../config/Prisma";

type CreateNewTaskServicesType = {
  status: string;
  title: string;
  description: string;
  end_at: string;
  company_id: string;
  employee_id: string;
};

class CreateNewTaskServices {
  async handle({
    status,
    title,
    description,
    end_at,
    company_id,
    employee_id,
  }: CreateNewTaskServicesType) {
    const TaskCreate = await Prisma.tasks.create({
      data: {
        title: title,
        status: status,
        description: description,
        end_at: end_at,
        companyId: company_id,
        employeeId: employee_id,
      },
    });

    return TaskCreate;
  }
}

export { CreateNewTaskServices };
