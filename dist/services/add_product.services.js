"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class add_product {
    async addProduct(user_id, product_name, description, base_price, category_id, address_id) {
        try {
            await (0, product_entity_1.add)(user_id, product_name, description, base_price, category_id, address_id);
            return true;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to add product");
        }
    }
}
exports.default = add_product;
//# sourceMappingURL=add_product.services.js.map