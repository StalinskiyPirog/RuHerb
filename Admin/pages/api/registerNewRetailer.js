import HttpStatus from 'http-status-codes'
import middleware from '../../components/form/middleware'
import nextConnect from 'next-connect';
import path from 'path';

import { promises as fs } from "fs";

const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
	try {
		const files = req.files
		const body = req.body

		if (files) {
      const targetPath = path.join(process.cwd(), `/uploads/`);
      try {
          await fs.access(targetPath);
      } catch (e) {
          await fs.mkdir(targetPath);
      }
      if (files.images.length){
      for (var i = 0; i < files.images.length; i++) {
          const tempPath = files.images[i].filepath;
          await fs.rename(tempPath, targetPath + files.images[i].originalFilename);
      }
    } else{
      const tempPath = files.images.filepath;
      await fs.rename(tempPath, targetPath + files.images.originalFilename);
    }
    }
		res.status(200).redirect('/');
	} catch (err) {
		res.status(HttpStatus.BAD_REQUEST).json({error: err.message}).redirect(307, '/');
	}
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;
