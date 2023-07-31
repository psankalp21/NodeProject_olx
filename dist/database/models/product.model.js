"use strict";
// models/Product.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db.connection"));
const user_model_1 = require("./user.model");
const category_model_1 = require("./category.model");
const address_model_1 = __importDefault(require("./address.model"));
const Product = db_connection_1.default.define("products", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: user_model_1.User,
            key: "uid",
        },
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    bidding: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    bidder_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: user_model_1.User,
            key: "uid",
        },
    },
    base_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: category_model_1.Category,
            key: "id",
        },
    },
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: address_model_1.default,
            key: "id",
        },
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.BLOB),
    //   allowNull: true,
    // },
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
db_connection_1.default.sync({ alter: true });
exports.default = Product;
//# sourceMappingURL=product.model.js.map