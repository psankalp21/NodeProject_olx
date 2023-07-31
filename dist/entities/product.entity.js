"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatebid = exports.getProducts_byCategory = exports.getProducts_byPrice = exports.fetchProducts = exports.update = exports.remove = exports.add = void 0;
const product_model_1 = __importDefault(require("../database/models/product.model"));
const sequelize_1 = require("sequelize");
async function add(user_id, product_name, description, base_price, category_id, address_id) {
    try {
        const user = await product_model_1.default.create({
            user_id: user_id,
            product_name: product_name,
            description: description,
            base_price: base_price,
            category_id: category_id,
            address_id: address_id
        });
        return user;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to create user");
    }
}
exports.add = add;
async function remove(pid) {
    try {
        const user = await product_model_1.default.findOne({ where: { id: pid } });
        if (user) {
            await user.destroy();
            console.log(`deleting product --- ${user}`);
            return user;
        }
        else
            return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
exports.remove = remove;
async function update(id, updatedData) {
    try {
        const product = await product_model_1.default.findByPk(id);
        if (product) {
            const result = await product.update(updatedData);
            return result;
        }
        return false;
    }
    catch (error) {
        console.log(`entity errror : ${error}`);
        return error;
    }
}
exports.update = update;
async function fetchProducts() {
    const result = await product_model_1.default.findAll();
    console.log(result);
    return result;
}
exports.fetchProducts = fetchProducts;
async function getProducts_byPrice(max_price, min_price) {
    try {
        const products = await product_model_1.default.findAll({
            where: {
                base_price: {
                    [sequelize_1.Op.lte]: max_price,
                    [sequelize_1.Op.gte]: min_price
                }
            }
        });
        return products;
    }
    catch {
        throw new Error("some error occurred");
    }
}
exports.getProducts_byPrice = getProducts_byPrice;
async function getProducts_byCategory(category_id) {
    try {
        const products = await product_model_1.default.findOne({ where: { category_id: category_id } });
        return products;
    }
    catch {
        throw new Error("some error occurred");
    }
}
exports.getProducts_byCategory = getProducts_byCategory;
async function updatebid(uid, pid, bid) {
    try {
        const products = await product_model_1.default.findOne({ where: { id: pid } });
        const amount = products.base_price;
        products.base_price = bid + amount;
        products.bidder_id = uid;
        console.log(amount + bid);
        await products.save();
        return products;
    }
    catch {
        throw new Error("some error occurred");
    }
}
exports.updatebid = updatebid;
//# sourceMappingURL=product.entity.js.map