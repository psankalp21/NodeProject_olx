"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_product_controller_1 = __importDefault(require("../controllers/get_product.controller"));
const jwt_1 = require("../middleware/jwt");
const router = express_1.default.Router();
router.get('/get_product', jwt_1.verifyToken, get_product_controller_1.default);
exports.default = router;
//# sourceMappingURL=get_product.route.js.map