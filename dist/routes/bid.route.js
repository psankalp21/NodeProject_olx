"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bid_controller_1 = require("../controllers/bid.controller");
const router = express_1.default.Router();
router.post('/bid', bid_controller_1.bid_controller);
exports.default = router;
//# sourceMappingURL=bid.route.js.map