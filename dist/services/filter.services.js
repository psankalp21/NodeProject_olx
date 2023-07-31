"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class filter {
    async filterByPrice(max_price, min_price) {
        try {
            const products = await (0, product_entity_1.getProducts_byPrice)(max_price, min_price);
            return products;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async filterByCategory(category_id) {
        try {
            const products = await (0, product_entity_1.getProducts_byCategory)(category_id);
            return products;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
exports.default = filter;
//# sourceMappingURL=filter.services.js.map