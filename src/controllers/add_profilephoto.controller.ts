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

export const add_photo = (req: Request, res: Response) => {
    try {
        upload.single('photo')(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).send(err);
            } else if (err) {
                return res.status(500).send('Server error.');
            }

            if (!req.file) {
                return res.status(400).send('No photo uploaded.');
            }

            const { filename, size } = req.file;
            console.log('Uploaded photo:', filename);
            console.log('Size:', size);

            const toBlob = new AddPhotoService();
            const blob = toBlob.addPhoto(filename);

            return res.status(200).send(`Photo uploaded successfully... blob is ${blob}` );
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('some error occured');
    }
};
