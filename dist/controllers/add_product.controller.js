"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_profile_services_1 = __importDefault(require("../services/fetch_profile.services"));
async function add_product(req, res) {
    try {
        const { email } = req.body;
        const profile = new fetch_profile_services_1.default();
        const user = await profile.fetchProfile(email);
        console.log("user is ", user);
        if (user.email) {
            res.send(user);
        }
    }
    catch (error) {
        console.error(error);
        res.send("Invalid email");
    }
}
exports.default = add_product;
//# sourceMappingURL=add_product.controller.js.map