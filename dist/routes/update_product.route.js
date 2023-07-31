"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const update_product_controller_1 = require("../controllers/update_product.controller");
const router = express_1.default.Router();
router.post('/updateProduct', update_product_controller_1.update_product_controller);
exports.default = router;
//# sourceMappingURL=update_product.route.js.map