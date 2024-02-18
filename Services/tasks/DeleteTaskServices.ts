import { Prisma } from "../../config/Prisma";

class DeleteTaskServices {
  async execute(id: string) {
    const DeleteTask = await Prisma.tasks.delete({
      where: {
        id: id,
      },
    });

    return DeleteTask;
  }
}

export { DeleteTaskServices };
