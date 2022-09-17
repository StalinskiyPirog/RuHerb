// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {

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

  console.log(req.body)
  res.send('success')
}

