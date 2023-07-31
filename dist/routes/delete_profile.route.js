"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_profile_controller_1 = __importDefault(require("../controllers/delete_profile.controller"));
const router = express_1.default.Router();
router.post('/deleteProfile', delete_profile_controller_1.default);
exports.default = router;
//# sourceMappingURL=delete_profile.route.js.map