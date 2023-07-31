"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product.entity");
class bid_product {
    async bid(user_id, product_id, amount) {
        try {
            await (0, product_entity_1.updatebid)(user_id, product_id, amount);
            return true;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to add product");
        }
    }
}
exports.default = bid_product;
//# sourceMappingURL=bid.services.js.map