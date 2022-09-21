// import { promises as fs } from "fs";
// import path from "path";
// import formidable, { File } from 'formidable';

// export const config = {
//     api: {
//         bodyParser: false,
//     }
// };

// let ProcessedFiles = [];

// export default async function Handler(req, res) {
//   let resultBody ={};
//   let nodemailer = require('nodemailer')
//   const transporter = nodemailer.createTransport({
//     port: 465,     
//     host: 'smtp.mail.ru',
//         auth: {
//             user: 'ru.herb.bot@mail.ru', 
//             pass: 'vLS7yUitBNJcuptUWZXs' 
//         },
//     secure: true,
//   });
  
//   const mailData = {
//       from: 'ru.herb.bot@mail.ru',
//       to: 'ru.herb.bot@mail.ru',
//       subject: `Message From name`,
//       text:  " | Sent from: ",
//       html: `<div>${req}</div><p>Sent from:</p>`
//   }

//   transporter.sendMail(mailData, function (err, info) {
//       if(err)
//         console.log(err)
//       else
//         console.log(info);
//   })

//   console.log(req)

//   const files = await new Promise((resolve, reject) => {
//     const form = new formidable.IncomingForm();
//     const files = ProcessedFiles;
//     form.on('file', function (field, file) {
//         files.push([field, file]);
//     })
//     form.on('end', () => resolve(files));
//     form.on('error', err => reject(err));
//     form.parse(req, () => {
//         console.log(req);
//     });
// }).catch(e => {
//     console.log(e);
    
// });
// if (files?.length) {

//   /* Create directory for uploads */
//   const targetPath = path.join(process.cwd(), `/uploads/`);
//   try {
//       await fs.access(targetPath);
//   } catch (e) {
//       await fs.mkdir(targetPath);
//   }

//   /* Move uploaded files to directory */
//   for (const file of files) {
//       const tempPath = file[1].filepath;
//       await fs.rename(tempPath, targetPath + file[1].originalFilename);
//   }
// }

// res.send("success");
// }



import HttpStatus from 'http-status-codes'
import middleware from '../../components/form/middleware';
import nextConnect from 'next-connect';
import { promises as fs } from "fs";
import path from "path";

const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
	try {
		const files = req.files
		const body = req.body
    console.log("записали в body и files")
    console.log(files)
    if (files) {
      console.log("файлы есть: \n")
      console.log(files)
      /* Create directory for uploads */
      const targetPath = path.join(process.cwd(), `/uploads/`);
      try {
        console.log("путь найден")
        console.log(targetPath)
          await fs.access(targetPath);
      } catch (e) {
          console.log("случилась беда, создаем новый путь")
          await fs.mkdir(targetPath);
      }
      console.log("перед циклом")
      console.log(typeof(files))
      console.log(typeof(files.file))
      console.log(files.file)
      console.log("Разделитель -------------------------------------------")
      console.log(files.file.length)
      /* Move uploaded files to directory */
      for (var i = 0; i < files.file.length; i++) {
        console.log("зашли в цикл")
        console.log(i)
          const tempPath = files.file[i].filepath;
          console.log("Содаем временное хранилище")
          console.log(tempPath)
          await fs.rename(tempPath, targetPath + files.file[i].originalFilename);
      }
      console.log("после цикла")
  }
  console.log("Завершение")
		res.status(HttpStatus.OK).json({});
	} catch (err) {
		res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
	}
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;