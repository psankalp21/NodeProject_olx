"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_categories_services_1 = __importDefault(require("../services/get_categories.services"));
async function getCategoriesController(req, res) {
    try {
        const ctg = new get_categories_services_1.default();
        const result = await ctg.get_Categories();
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
exports.default = getCategoriesController;
//# sourceMappingURL=get_categories.js.map