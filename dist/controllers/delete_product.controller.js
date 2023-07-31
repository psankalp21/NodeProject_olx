"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_product_controller = void 0;
const delete_product_services_1 = __importDefault(require("../services/delete_product.services"));
async function delete_product_controller(req, res) {
    try {
        const { pid } = req.body;
        const product = new delete_product_services_1.default();
        const result = await product.delProduct(pid);
        if (result === true) {
            res.status(201).send("Product deleted");
        }
        else {
            res.status(409).send("Product doesnot exists");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.delete_product_controller = delete_product_controller;
//# sourceMappingURL=delete_product.controller.js.map