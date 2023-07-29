"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verify_password_service_1 = __importDefault(require("../services/verify_password.service"));
async function verify_password(req, res) {
    try {
        const { otp, email, newpassword } = req.body;
        const pwd = new verify_password_service_1.default();
        const user = await pwd.verifyOTP(otp, email, newpassword);
        if (user.email) {
            res.send("Password changed! Dont forget this time");
        }
    }
    catch (error) {
        console.log({ error });
        res.send("OTP didnot match");
    }
}
exports.default = verify_password;
//# sourceMappingURL=verify_password.controller.js.map