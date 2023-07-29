"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verify_password_controller_1 = __importDefault(require("../controllers/verify_password.controller"));
const router = express_1.default.Router();
router.post('/verify_otp', verify_password_controller_1.default);
exports.default = router;
//# sourceMappingURL=verify_otp.route.js.map