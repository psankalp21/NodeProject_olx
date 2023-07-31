"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_photo = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const profile_photo_services_1 = __importDefault(require("../services/profile_photo.services"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        const fileExtension = path_1.default.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});
const upload = (0, multer_1.default)({ storage });
const add_photo = async (req, res) => {
    try {
        const fileUpload = await new Promise((resolve, reject) => {
            upload.single('photo')(req, res, (err) => {
                if (err instanceof multer_1.default.MulterError) {
                    return reject(err);
                }
                else if (err) {
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
        const toBlob = new profile_photo_services_1.default();
        const blob = await toBlob.addPhoto(filename);
        console.log(blob);
        return res.status(200).send(blob);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Some error occurred');
    }
};
exports.add_photo = add_photo;
//# sourceMappingURL=add_profilephoto.controller.js.map