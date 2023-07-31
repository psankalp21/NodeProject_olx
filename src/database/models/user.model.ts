import { DataTypes, Model } from 'sequelize';
import dbConn from '../db.connection';

interface UserAttributes {
  uid:number
  name: string;
  email: string;
  password: string;
  dob: string;
  phone : string;
  profile: Blob;
  gender:string;

}

class User extends Model<UserAttributes> implements UserAttributes {
  public uid!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public dob!: string;
  public phone!: string;
  public profile!: Blob;
  public gender:string;
}



User.init(
  {
    uid: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile:{
      type : DataTypes.BLOB,
      allowNull:true
    },
    gender:{
      type : DataTypes.STRING,
      allowNull:false
    }},
  {
    sequelize:dbConn,
    tableName: 'users',
    timestamps: false,
  }
);

// sequelize.sync({force:true})
// User.hasMany(Follow, { foreignKey: 'user_email', as: 'follows' });
// Follow.belongsTo(User, { foreignKey: 'user_email' });

export { User};
