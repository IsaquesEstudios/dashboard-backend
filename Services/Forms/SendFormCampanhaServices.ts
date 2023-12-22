import ejs from 'ejs'
import nodemailer from 'nodemailer'

const node: any = nodemailer

interface TiConnectedServicesType {
  emailTo: string,
  title: string,
  domain: string,
  name: string,
  email: string,
  phone: string,
  state: string,
  city: string,
  branches: number,
  companyName: string,
  message: string
}

class CampanhasServices {
  async handle({ emailTo, title, domain, name, email, phone, state, city, branches, companyName, message }: TiConnectedServicesType) {

    ejs.renderFile(__dirname + "/../../Template/Campanhas.ejs", {
      domain: domain,
      name: name,
      email: email,
      phone: phone,
      state: state,
      city: city,
      branches: branches,
      companyName: companyName,
      message: message
    },
      function (err, data) {
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
            }
          });

          var mainOptions = {
            from: 'formulario@isaquesestudios.com',
            to: emailTo,
            subject: title,
            html: data
          };
          transporter.sendMail(mainOptions, function (err: any, info: any) {
            if (err) {
              console.log(err);
            } else {
              console.log('Message sent: ' + info.response);
            }
          });
        }
      });
    return ("enviou");
  }
}

export { CampanhasServices }