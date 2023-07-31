"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter_by_category = void 0;
const filter_services_1 = __importDefault(require("../services/filter.services"));
async function filter_by_category(req, res) {
    try {
        const { category_id } = req.body;
        const product = new filter_services_1.default();
        const result = await product.filterByCategory(category_id);
        if (result) {
            res.status(201).send(result);
        }
        else {
            throw new Error("no data");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
exports.filter_by_category = filter_by_category;
//# sourceMappingURL=filter_by_category.controller.js.map