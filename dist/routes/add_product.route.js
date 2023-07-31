"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const add_products_controller_1 = require("../controllers/add_products.controller");
const router = express_1.default.Router();
router.post('/addProduct', add_products_controller_1.add_product_controller);
exports.default = router;
//# sourceMappingURL=add_product.route.js.map