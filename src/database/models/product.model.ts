// models/Product.ts

import { DataTypes, Model, Optional } from "sequelize";
import dbConn from "../db.connection";
import {User} from "./user.model";
import {Category} from "./category.model";
import Address from "./address.model";

interface ProductAttributes {
  id: number;
  user_id: number;
  product_name: string;
  description: string;
  bidding: number;
  bidder_id: number;
  base_price: number;
  category_id: number;
  address_id: number;
  //images: Buffer[];
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

interface ProductModel
  extends Model<ProductAttributes, ProductCreationAttributes>,
    ProductAttributes {}

const Product = dbConn.define<ProductModel>(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "uid",
      },
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    bidding: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    bidder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "uid",
      },
    },
    base_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Category,
        key: "id",
      },
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: "id",
      },
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.BLOB),
    //   allowNull: true,
    // },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

dbConn.sync({ alter: true })

export default Product;