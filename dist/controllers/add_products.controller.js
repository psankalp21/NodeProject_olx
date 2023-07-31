"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add_product_controller = void 0;
const add_product_services_1 = __importDefault(require("../services/add_product.services"));
async function add_product_controller(req, res) {
    try {
        const { user_id, product_name, description, base_price, category_id, address_id } = req.body;
        const product = new add_product_services_1.default();
        const result = await product.addProduct(user_id, product_name, description, base_price, category_id, address_id);
        if (result === true) {
            res.status(201).send("Product Added");
        }
        else {
            res.status(409).send("Product already exists");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.add_product_controller = add_product_controller;
//# sourceMappingURL=add_products.controller.js.map