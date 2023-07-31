"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const signup_service_1 = __importDefault(require("../services/signup.service"));
async function signup(req, res) {
    try {
        const { name, email, password, dob, phone, gender } = req.body;
        const signup = new signup_service_1.default();
        const result = await signup.signup(name, email, password, dob, phone, gender);
        if (result === true) {
            res.status(201).send("Signup success");
        }
        else {
            res.status(409).send("Account already exists");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.signup = signup;
//# sourceMappingURL=signup.controller.js.map