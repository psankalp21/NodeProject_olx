"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update_product_controller = void 0;
const update_product_services_1 = __importDefault(require("../services/update_product.services"));
async function update_product_controller(req, res) {
    try {
        const id = req.body.pid;
        const updatedData = req.body.updatedData;
        const product = new update_product_services_1.default();
        const result = await product.updateProduct(id, updatedData);
        if (result)
            res.status(201).send(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.update_product_controller = update_product_controller;
//# sourceMappingURL=update_product.controller.js.map