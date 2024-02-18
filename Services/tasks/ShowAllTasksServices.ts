import { db } from "../../config/Firebase";
import { Prisma } from "../../config/Prisma";

type ShowAllTasksServicesProps = {
  includes: any;
};

class ShowAllTasksServices {
  async handle({ includes }: ShowAllTasksServicesProps) {

    const Includes = Boolean(includes)
    
    const AllTasks = await Prisma.tasks.findMany({
      include: {
        company: Includes,
        Employee: Includes,
      },
    });

    return AllTasks;
  }
}

export { ShowAllTasksServices };
