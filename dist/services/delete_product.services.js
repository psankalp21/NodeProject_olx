"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class delete_product {
    async delProduct(pid) {
        try {
            await (0, product_entity_1.remove)(pid);
            return true;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to add product");
        }
    }
}
exports.default = delete_product;
//# sourceMappingURL=delete_product.services.js.map