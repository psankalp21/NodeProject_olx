"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_categories_1 = __importDefault(require("../controllers/get_categories"));
const router = express_1.default.Router();
router.get('/get_categories', get_categories_1.default);
exports.default = router;
//# sourceMappingURL=get_categories.route.js.map