import { Prisma } from "../../config/Prisma";

type UpdateTaskServicesType = {
  id: string;
  company_id: any;
  employee_id: any;
  status: string;
  title: string;
  description: string;
  end_at: string;
};

class UpdateTaskServices {
  async handle({
    id,
    title,
    description,
    status,
    end_at,
    company_id,
    employee_id,
  }: UpdateTaskServicesType) {
    const UpdateTask = Prisma.tasks.updateMany({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        status: status,
        end_at: end_at,
        companyId: company_id,
        employeeId: employee_id,
      },
    });

    return UpdateTask;
  }
}

export { UpdateTaskServices };
