import { DataTypes, Model } from 'sequelize';
import dbConn from '../db.connection';

interface CategoryAttributes {
  id: number;
  categoryname: string;
}

class Category extends Model<CategoryAttributes> implements CategoryAttributes {
  public id!: number;
  public categoryname!: string;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dbConn,
    tableName: 'categories',
    timestamps: false,
  }
);

export { Category };
