"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_route_1 = __importDefault(require("./signup.route"));
const login_route_1 = __importDefault(require("./login.route"));
const forgot_pwd_route_1 = __importDefault(require("./forgot_pwd.route"));
const verify_otp_route_1 = __importDefault(require("./verify_otp.route"));
const fetch_profile_route_1 = __importDefault(require("./fetch_profile.route"));
const add_photo_route_1 = __importDefault(require("./add_photo.route"));
const router = express_1.default.Router();
router.use('/olx', signup_route_1.default, login_route_1.default, forgot_pwd_route_1.default, verify_otp_route_1.default, fetch_profile_route_1.default, add_photo_route_1.default);
exports.default = router;
//# sourceMappingURL=index.route.js.map