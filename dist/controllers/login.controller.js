"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_1 = __importDefault(require("../services/login.service"));
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const login = new login_service_1.default();
        const user = await login.login(email, password);
        if (!user) {
            res.send("Invalid credentials");
        }
        else {
            res.send(user);
        }
    }
    catch (error) {
        console.error(error);
        res.send("Invalid email or password");
    }
}
exports.default = login;
//# sourceMappingURL=login.controller.js.map