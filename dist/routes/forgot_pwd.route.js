"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const forgot_password_controller_1 = __importDefault(require("../controllers/forgot_password.controller"));
const router = express_1.default.Router();
router.post('/forgot_password', forgot_password_controller_1.default);
exports.default = router;
//# sourceMappingURL=forgot_pwd.route.js.map