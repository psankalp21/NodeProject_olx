"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const user_entity_1 = require("../entities/user.entity");
class AddPhotoService {
    async addPhoto(filename) {
        try {
            const projectRoot = process.cwd();
            const uploadsFolder = path_1.default.join(projectRoot, 'uploads');
            const filePath = path_1.default.join(uploadsFolder, filename);
            try {
                await promises_1.default.access(filePath);
            }
            catch (err) {
                throw new Error('File not found.');
            }
            const fileBuffer = await promises_1.default.readFile(filePath);
            // const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
            const result = await (0, user_entity_1.addPhoto)(fileBuffer);
            return result;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.default = AddPhotoService;
//# sourceMappingURL=profile_photo.services.js.map