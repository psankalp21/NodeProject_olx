"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const filter_by_category_controller_1 = require("../controllers/filter_by_category.controller");
const filter_by_price_controller_1 = require("../controllers/filter_by_price.controller");
const router = express_1.default.Router();
router.post('/filterPrice', filter_by_price_controller_1.filter_by_price);
router.post('/filterCategory', filter_by_category_controller_1.filter_by_category);
exports.default = router;
//# sourceMappingURL=filter_by_price.route.js.map