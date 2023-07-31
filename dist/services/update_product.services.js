"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class update_product {
    async updateProduct(id, updatedData) {
        try {
            const result = await (0, product_entity_1.update)(id, updatedData);
            return result;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to update product");
        }
    }
}
exports.default = update_product;
//# sourceMappingURL=update_product.services.js.map