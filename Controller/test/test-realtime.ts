import ejs from "ejs";
import nodemailer from "nodemailer";

const node: any = nodemailer;

interface TiConnectedServicesType {
  emailTo: string;
  title: string;
  domain: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  branches: number;
  companyName: string;
  message: string;
}

setInterval(() => {
    async function handle() {
      ejs.renderFile(
        __dirname + "/../../Template/Campanhas.ejs",
        {
          domain: "teste",
          name: "teste",
          email: "matteus.isaque28@gmail.com",
          phone: "teste",
          message: "message",
        },
        function (err: any, data: any) {
          if (err) {
            console.log(err);
          } else {
            let transporter = node.createTransport({
              host: "smtp.hostinger.com",
              port: 465,
              // ssl: true,
              tls: true,
              auth: {
                user: "formulario@isaquesestudios.com",
                pass: "Mediterranio10@",
              },
            });

            var mainOptions = {
              from: "formulario@isaquesestudios.com",
              to: "matteus.isaque28@gmail.com",
              subject: "title",
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

    handle();
}, 1800000);
