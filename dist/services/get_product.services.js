"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class get_products {
    async getProduct() {
        const prd = await (0, product_entity_1.fetchProducts)();
        if (!prd) {
            return null;
        }
        else {
            return prd;
        }
    }
}
exports.default = get_products;
//# sourceMappingURL=get_product.services.js.map