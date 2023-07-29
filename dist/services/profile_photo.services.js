"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class AddPhotoService {
    async addPhoto(filename) {
        try {
            const projectRoot = process.cwd();
            const uploadsFolder = path_1.default.join(projectRoot, 'uploads');
            const filePath = path_1.default.join(uploadsFolder, filename);
            if (!fs_1.default.existsSync(filePath)) {
                throw new Error('File not found.');
            }
            const fileBuffer = fs_1.default.readFileSync(filePath);
            const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
            console.log(blob);
            return blob;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.default = AddPhotoService;
//# sourceMappingURL=profile_photo.services.js.map