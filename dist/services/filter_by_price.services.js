"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class filter {
    async filterByPrice(max_price, min_price) {
        try {
            const products = await (0, product_entity_1.getProducts)(max_price, min_price);
            return products;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}
exports.default = filter;
//# sourceMappingURL=filter_by_price.services.js.map