import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import AddPhotoService from '../services/profile_photo.services';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  },
});

const upload = multer({ storage });

export const add_photo = async (req: Request, res: Response) => {
  try {
    const fileUpload = await new Promise<{ filename: string; size: number }>((resolve, reject) => {
      upload.single('photo')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
          return reject(err);
        } else if (err) {
          return reject(err);
        }
        resolve({ filename: req.file?.filename || '', size: req.file?.size || 0 });
      });
    });

    if (!fileUpload.filename) {
      return res.status(400).send('No photo uploaded.');
    }

    const { filename, size } = fileUpload;
    console.log('Uploaded photo:', filename);
    console.log('Size:', size);

    const toBlob = new AddPhotoService();
    const blob = await toBlob.addPhoto(filename);
    console.log(blob);
    return res.status(200).send(blob);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Some error occurred');
  }
};
