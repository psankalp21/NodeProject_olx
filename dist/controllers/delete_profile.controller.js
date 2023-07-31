"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_profile_services_1 = __importDefault(require("../services/delete_profile.services"));
async function delete_Profile(req, res) {
    try {
        const { email } = req.body;
        const profile = new delete_profile_services_1.default();
        const user = await profile.deleteProfile(email);
        console.log("deleted from user : ", user);
        if (user.email) {
            res.send("Profile Deleted Successfully");
        }
    }
    catch (error) {
        console.error(error);
        res.send("Account doesn't exists");
    }
}
exports.default = delete_Profile;
//# sourceMappingURL=delete_profile.controller.js.map