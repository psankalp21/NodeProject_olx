"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_product_controller_1 = require("../controllers/delete_product.controller");
const router = express_1.default.Router();
router.post('/delProduct', delete_product_controller_1.delete_product_controller);
exports.default = router;
//# sourceMappingURL=delete_product.route.js.map