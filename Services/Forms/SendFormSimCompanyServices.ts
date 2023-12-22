import ejs from "ejs";
import nodemailer from "nodemailer";

const node: any = nodemailer;

interface SimCompanyServicesType {
  emailTo: string;
  title: string;
  name: string;
  email: string;
  number: string;
  city: string;
}

class SendFormSimCompanyServices {
  async handle({
    emailTo,
    title,
    number,
    name,
    email,
    city,
  }: SimCompanyServicesType) {
    ejs.renderFile(
      __dirname + "/../../Template/Simcompany.ejs",
      {
        name: name,
        email: email,
        number: number,
        city: city,
      },
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          let transporter = node.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            ssl: true,
            tls: true,
            auth: {
              user: "formulario@isaquesestudios.com",
              pass: "Mediterranio10@",
            },
          });

          var mainOptions = {
            from: "formulario@isaquesestudios.com",
            to: emailTo,
            subject: title,
            html: data,
          };
          transporter.sendMail(mainOptions, function (err: any, info: any) {
            if (err) {
              console.log(err);
            } else {
              console.log("Message sent: " + info.response);
            }
          });
        }
      }
    );
    return "enviou";
  }
}

export { SendFormSimCompanyServices };
