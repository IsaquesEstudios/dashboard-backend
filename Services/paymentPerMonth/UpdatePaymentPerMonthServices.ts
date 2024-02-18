import { Prisma } from "../../config/Prisma";

type CreatePaymentPerMonthServicesProps = {
  id: string;
  companyId?: string;
  payment_id?: string;
  value?: string;
  title?: string;
  pay_day?: string;
  description?: string;
};

class UpdatePaymentPerMonthServices {
  async handle({
    id,
    companyId,
    title,
    description,
    pay_day,
    payment_id,
    value,
  }: CreatePaymentPerMonthServicesProps) {
    const UpdatePaymentPerMonth = await Prisma.paymentPerMonth.updateMany({
      where: {
        id: id,
      },
      data: {
        companyId: companyId,
        title: title,
        description: description,
        pay_day: pay_day,
        payment_id: payment_id,
        value: value,
        updated_at: new Date(),
      },
    });

    return UpdatePaymentPerMonth;
  }
}

export { UpdatePaymentPerMonthServices };
