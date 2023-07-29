"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const forgot_password_service_1 = __importDefault(require("../services/forgot_password.service"));
async function forgot_password(req, res) {
    try {
        const { email } = req.body;
        const pwd = new forgot_password_service_1.default();
        const user = await pwd.forgotPWD(email);
        console.log("user is ", user);
        if (user.email) {
            res.send("OTP Generated");
        }
        else {
            res.send("invalid email");
        }
    }
    catch (error) {
        console.error(error);
        res.send("Invalid email or password");
    }
}
exports.default = forgot_password;
//# sourceMappingURL=forgot_password.controller.js.map