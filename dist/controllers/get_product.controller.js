"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_product_services_1 = __importDefault(require("../services/get_product.services"));
async function getProductsController(req, res) {
    try {
        const product = new get_product_services_1.default();
        const result = await product.getProduct();
        if (result) {
            res.status(201).send(result);
        }
        else {
            res.status(409).send("No data to fetch");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.default = getProductsController;
//# sourceMappingURL=get_product.controller.js.map