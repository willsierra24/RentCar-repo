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

const eMail1 = async (eMail) => {
  let mensaHTM = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        p, a, h1, h2, h3, h4, h5 {font-family: 'Roboto', sans-serif !important;}
        h1{font-size: 60px !important;}
        h2{font-size: 45px !important;}
        h3{font-size: 35px !important;}
        h4{font-size: 25px !important;}
        h5{font-size: 15px !important;}
        p, a{font-size: 15px !important;}
      </style>
    </head>
    <div style="width: 100%; background-color: #e3e3e3;">
      <div style="padding: 20px 10px 20px 10px;">
        <div style="background-color: rgb(4, 9, 82); padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
        <img src="cid:RC1" alt="" style="width: 200px; height: 80px; border: 2px solid rgb(8, 8, 8);">
        </div>
      </div>
      <div style="background-color: #e3e3e3; margin-top: 0px; padding: 20px 0px 5px 0px; text-align: center;">
        <h2>Bienvenido a RentCar</h2>
        <p>Somos una plataforma dedicada al alquiler de vehiculos. En donde te brindamos una gran variedad de opciones.</p>
        <p>GRACIAS POR SER PARTE DE NUESTRO GRUPO</p>
        <div style="display: flex; padding: 20px 10px 20px 10px; ">
          <div style=" padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2020/09/04/Monogram-RC-Logo-V2-Graphics-5286908-1-1-580x386.jpg" alt="" style="width: 300px;" />
            <p > Cualquier consulta <br>comunicate con nosotros <br>desde nuestra pagina <br> o por nuestros canales digitales. <br> TE ESPERAMOS </p>
          </div>
        </div>
        <P style="margin-bottom: 10px;"><i>Atentamente:</i><br> Grupo RentCar </P>
        <a style="background-color: rgb(5, 23, 124); border: 2px solid rgb(8, 8, 8); color: rgb(194, 191, 5); padding: 16px 32px; text-align: center; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px; margin: 4px 2px;
        transition-duration: 0.4s; cursor: pointer;" href="https://rent-cart-pf.vercel.app/">RentCar</a>
        <div style="background-color: rgb(2, 27, 80); color: #9eaf08; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
          <a href="+549 11 4586709" ><img src="cid:Wp1" style="width: 30px; height: 30px;"/></a>
          <p style="font-size: 20px; padding: 0px 20px 0px 20px;">Soporte</p>
          <p>Comunicate con nosotros por los siguientes canales:<br>
            <a href="info.grupo.rentcar@gmail.com" style="color: #bdba05;"><img src="https://www.univision.com/proxy/api/cached/picture?href=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fbtg%2Ftech.batanga.com%2Ffiles%2FGmail-Como-utilizar-varias-direcciones-de-correo-desde-tu-mismo-e-mail.jpg&width=0&height=0&ratio_width=1240&ratio_height=698&format=webp" style="width: 30px; height: 30px;"/></a>
            <a href="+549114586709" style="color: #9faa09;"><img src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=740&t=st=1676607760~exp=1676608360~hmac=278ee90ea3396c0ad101c4e8de087671ecf72c1d470ccb929d75cc0a40adb7d8" style="width: 30px; height: 30px;"/></a>
            <a href="https://www.facebook.com/profile.php?id=100090221383335" style="color: #9faa09;"><img src="https://www.mammaproof.org/barcelona/wp-content/uploads/sites/11/2017/01/icono-facebook-1.png" style="width: 30px; height: 30px;"/></a>
            <a href="https://www.instagram.com/rent_car2023/"style="color: #9faa09;"><img src="https://scontent.fros8-1.fna.fbcdn.net/v/t39.30808-6/281523213_5154082218010914_1249949579548042028_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wVby3iDiAAUAX-QsZ5q&_nc_ht=scontent.fros8-1.fna&oh=00_AfB-TbZ89Cq0gfOZCJ3A_fGXYZPI-SzP_WBZ8fA9cTtDtA&oe=63F351EB" style="width: 30px; height: 30px;"/></a>
          </p>
          <p style="background-color: black; padding: 10px 0px 10px 0px ; font-size: 12 !important;">
          @ 2023 RentCar, todos los derechos reservados.</p>
        </div>
      </div>
    <div></div>
    </div>
    <body>
      
    </body>
    </html>
    `;
  let mensaje = {
    from: '"RentCar" <info.grupo.rentcar@gmail.com>', // sender address
    to: eMail, // list of receivers
    subject: " Notificación", // Subject line
    text: "USUARIO CREADO CORRECTAMENTE ", // plain text body
    html: mensaHTM,
    attachments: [
      {
        filename: "RC1.jpg",
        path: "https://www.creativefabrica.com/wp-content/uploads/2020/09/04/Monogram-RC-Logo-V2-Graphics-5286908-1-1-580x386.jpg",
        cid: "RC1",
      },
      {
        filename: "Wp1.png",
        path: "https://cdn-icons-png.flaticon.com/512/124/124034.png?w=740&t=st=1676607760~exp=1676608360~hmac=278ee90ea3396c0ad101c4e8de087671ecf72c1d470ccb929d75cc0a40adb7d8",
        cid: "Wp1",
      },
    ],
  };

  const info = await transporter.sendMail(mensaje);

  console.log(info);
};
module.exports = { eMail1 };
