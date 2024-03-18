import ejs from "ejs";
import { Prisma } from "../../config/Prisma";
import nodemailer from "nodemailer";
import { MercadoPagoApi } from "../../config/ApiMercadoPago";
import fs from "fs";

const node: any = nodemailer;

class ChargeByEmailServices {
  async handle() {
    // retornar todos os pagamentos
    const ShowAllPaymentPerMonth = await Prisma.paymentPerMonth.findMany({
      include: {
        company: true,
      },
    });

    const ActualDate: any = new Date().getDate();

    // filtrar aqueles que são do dia de hoje
    const filterPayments = ShowAllPaymentPerMonth.filter((item) => {
      return item.pay_day == ActualDate;
    });

    // para cada pagamento filtrado, realizar um envio de email para as companias
    filterPayments.forEach(async (item) => {
      var value = parseFloat(String(item.value));

      const { data } = await MercadoPagoApi.post("/v1/payments", {
        description: item.title,
        external_reference: item.company?.email,
        transaction_amount: value,
        payment_method_id: "pix",
        payer: {
          email: item.company?.email,
          first_name: item.company?.owner,
        },
      });

      const transporter = node.createTransport({
        host: "smtp.hostinger.com",
        port: 465,
        // ssl: true,
        tls: true,
        auth: {
          user: "cobranca@isaquesestudios.com",
          pass: "Terranova10@",
        },
      });

      const mailOptions = {
        from: "cobranca@isaquesestudios.com",
        to: item.company?.email,
        subject: item.title,

        html: await ejs.renderFile("./Template/PaymentPerMonth.ejs", {
          name: item.company?.owner,
          payment_day: new Date(data.date_created).toLocaleDateString("pt-BR"),
          payment_value: data.transaction_amount,
          payment_expiration: new Date(
            data.date_of_expiration
          ).toLocaleDateString("pt-BR"),
          description: item.title,
          link: data.point_of_interaction.transaction_data.ticket_url,
        }),
      };

      transporter.sendMail(mailOptions, (err: any, info: any) => {
        if (err) {
          console.error("Error sending email:", err);
        } else {
          console.log("Email sent:", info.response);
        }
      });
      // realizar um envio de email ao 12:00

      return ShowAllPaymentPerMonth;
    });
  }
}

export { ChargeByEmailServices };
