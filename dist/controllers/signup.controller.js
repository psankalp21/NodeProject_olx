"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const signup_service_1 = __importDefault(require("../services/signup.service"));
/**
 * @swagger
 * tags:
 *   name: Signup
 *   description: User signup operations
 */
/**
 * @swagger
 * path:
 *   /signup:
 *     post:
 *       summary: Creating a new user account
 *       tags: [Signup]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 dob:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 gender:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Signup success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
*         '400':
 *           description: Invalid input
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */
async function signup(req, res) {
    try {
        const { name, email, password, dob, phone, gender } = req.body;
        const signup = new signup_service_1.default();
        signup.signup(name, email, password, dob, phone, gender);
        res.send("signup success");
    }
    catch (error) {
        req.send("some error occured");
    }
}
exports.signup = signup;
//# sourceMappingURL=signup.controller.js.map