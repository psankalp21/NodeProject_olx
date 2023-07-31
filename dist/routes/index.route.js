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
const delete_profile_route_1 = __importDefault(require("./delete_profile.route"));
const get_categories_route_1 = __importDefault(require("./get_categories.route"));
const add_product_route_1 = __importDefault(require("./add_product.route"));
const delete_product_route_1 = __importDefault(require("./delete_product.route"));
const update_product_route_1 = __importDefault(require("./update_product.route"));
const get_product_route_1 = __importDefault(require("./get_product.route"));
const filter_by_price_route_1 = __importDefault(require("./filter_by_price.route"));
const filter_by_price_route_2 = __importDefault(require("./filter_by_price.route"));
const bid_route_1 = __importDefault(require("./bid.route"));
const router = express_1.default.Router();
router.use('/olx', signup_route_1.default, login_route_1.default, forgot_pwd_route_1.default, verify_otp_route_1.default, fetch_profile_route_1.default, add_photo_route_1.default, delete_profile_route_1.default, get_categories_route_1.default, add_product_route_1.default, delete_product_route_1.default, update_product_route_1.default, get_product_route_1.default, filter_by_price_route_1.default, filter_by_price_route_2.default, bid_route_1.default);
exports.default = router;
//# sourceMappingURL=index.route.js.map