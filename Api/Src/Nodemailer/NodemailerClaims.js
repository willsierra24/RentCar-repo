const nodemailer = require("nodemailer");

require("dotenv").config();
const { USSER, PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  //secure: true, // true for 465, false for other ports
  auth: {
    // user: `${USER}`, // generated ethereal user
    // pass: `${PASS}`, // generated ethereal password
    user: USSER, // generated ethereal user
    pass: PASS, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("ready for send emails");
});

const eMail02 = async (email) => {
  let mensaHTM = `
    
    `;
  let mensaje = {
    from: '"RentCar" <info.grupo.rentcar@gmail.com>', // sender address
    to: email, // list of receivers
    subject: " Notificación", // Subject line
    text: "Atencion al Cliente", // plain text body
    html: mensaHTM,
    attachments: [
      {
        filename: "Logo RC 1.jpg",
        path: "Logo RC 1.jpg",
        cid: "Logo RC 1",
      },
      {
        filename: "Logo Wp.png",
        path: "Logo Wp.png",
        cid: "Logo Wp",
      },
    ],
  };

  const info = await transporter.sendMail(mensaje);

  console.log(info);
};
module.exports = { eMail02 };
