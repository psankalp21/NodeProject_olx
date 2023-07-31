"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bid_controller = void 0;
const bid_services_1 = __importDefault(require("../services/bid.services"));
async function bid_controller(req, res) {
    try {
        const { user_id, pid, amount } = req.body;
        const product = new bid_services_1.default();
        const result = await product.bid(user_id, pid, amount);
        res.status(201).send(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.bid_controller = bid_controller;
//# sourceMappingURL=bid.controller.js.map