import { PrismaClient } from '@prisma/client';
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  const prisma = new PrismaClient();
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,     
    host: 'smtp.mail.ru',
        auth: {
            user: 'ru.herb.bot@mail.ru', 
            pass: 'vLS7yUitBNJcuptUWZXs' 
        },
    secure: true,
  });
  
  const mailData = {
      from: 'ru.herb.bot@mail.ru',
      to: 'ru.herb.bot@mail.ru',
      subject: `Message From ${req.body.name}`,
      text: req.body.phone + " | Sent from: " + req.body.category,
      html: `<div>${req.body.name}</div><p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  })
  const Retailer = await prisma.retailer.create({
    data: {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      logo: "/design_parts/logo",
      city: req.body.city,
      categoryList: req.body.categoryListId,
      phone: req.body.phone,
      password: "1234567890",
    },
  });
  
  console.log(Retailer)
  res.send('success')
}

