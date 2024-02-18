import { Prisma } from "../../config/Prisma";

type CreatePaymentPerMonthServicesProps = {
  title: string;
  company_id: string;
  value: string;
  pay_day: string;
  description: string;
};

class CreatePaymentPerMonthServices {
  async handle({
    title,
    company_id,
    value,
    pay_day,
    description,
  }: CreatePaymentPerMonthServicesProps) {
    const CreatePaymentPerMonth = await Prisma.paymentPerMonth.create({
      data: {
        title: title,
        description: description,
        pay_day: pay_day,
        value: value,
        companyId: company_id,
      },
    });

    return CreatePaymentPerMonth;
  }
}

export { CreatePaymentPerMonthServices };
