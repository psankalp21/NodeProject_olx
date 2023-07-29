"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_profilephoto_controller_1 = require("../controllers/add_profilephoto.controller");
const router = express_1.default.Router();
router.post('/addPhoto', add_profilephoto_controller_1.add_photo);
exports.default = router;
//# sourceMappingURL=add_photo.route.js.map