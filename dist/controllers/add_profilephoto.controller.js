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
const add_photo = (req, res) => {
    try {
        upload.single('photo')(req, res, async (err) => {
            if (err instanceof multer_1.default.MulterError) {
                return res.status(400).send(err);
            }
            else if (err) {
                return res.status(500).send('Server error.');
            }
            if (!req.file) {
                return res.status(400).send('No photo uploaded.');
            }
            const { filename, size } = req.file;
            console.log('Uploaded photo:', filename);
            console.log('Size:', size);
            const toBlob = new profile_photo_services_1.default();
            const blob = toBlob.addPhoto(filename);
            return res.status(200).send(`Photo uploaded successfully... blob is ${blob}`);
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('some error occured');
    }
};
exports.add_photo = add_photo;
//# sourceMappingURL=add_profilephoto.controller.js.map