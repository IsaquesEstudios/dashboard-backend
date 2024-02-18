import { Prisma } from "../../config/Prisma";

class DeletePaymentPerMonthServices {
  async handle(id: string) {
    try {
      const DeletePlan = await Prisma.paymentPerMonth.delete({
        where: {
          id: id,
        },
      });

      return DeletePlan;
    } catch (error) {
      throw new Error("Erro ao encontrar ID")
    }
  }
}

export { DeletePaymentPerMonthServices };
