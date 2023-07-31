"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCategories = void 0;
const category_model_1 = require("../database/models/category.model");
async function fetchCategories() {
    const result = await category_model_1.Category.findAll();
    console.log(result);
    return result;
}
exports.fetchCategories = fetchCategories;
//# sourceMappingURL=category.entity.js.map