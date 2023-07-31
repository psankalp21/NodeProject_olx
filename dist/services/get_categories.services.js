"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_entity_1 = require("../entities/category.entity");
class getCategories {
    async get_Categories() {
        const categories = await (0, category_entity_1.fetchCategories)();
        if (!categories) {
            return null;
        }
        else {
            return categories;
        }
    }
}
exports.default = getCategories;
//# sourceMappingURL=get_categories.services.js.map