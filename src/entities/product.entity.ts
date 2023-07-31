import Product from "../database/models/product.model";
import { Op } from "sequelize";
export async function add(user_id: number, product_name: string, description: string, base_price: number, category_id: number, address_id: number) {
  try {
    const user = await Product.create({
      user_id: user_id,
      product_name: product_name,
      description: description,
      base_price: base_price,
      category_id: category_id,
      address_id: address_id
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
}


export async function remove(pid: number) {
  try {
    const user = await Product.findOne({ where: { id: pid } });
    if (user) {
      await user.destroy();
      console.log(`deleting product --- ${user}`);
      return user;
    }
    else
      return null
  } catch (error) {
    console.log(error);
    return null;
  }
}




export async function update(id: number, updatedData: any) {
  try {

    const product = await Product.findByPk(id);
    if (product) {
      const result = await product.update(updatedData)
      return result
    }
    return false;
  }
  catch (error) {
    console.log(`entity errror : ${error}`)
    return error
  }
}


export async function fetchProducts() {
  const result = await Product.findAll();
  console.log(result);
  return result;

}



export async function getProducts_byPrice(max_price: number, min_price: number) {
  try {
    const products = await Product.findAll({
      where: {
        base_price: {
          [Op.lte]: max_price,
          [Op.gte]: min_price
        }
      }
    });
    return products
  }
  catch
  {
    throw new Error("some error occurred")
  }
}

export async function getProducts_byCategory(category_id: number) {
  try {
    const products = await Product.findOne({ where: { category_id:category_id } });
    return products
  }
  catch
  {
    throw new Error("some error occurred")
  }
}

export async function updatebid(uid,pid,bid) {
  try {
    const products = await Product.findOne({ where: { id:pid } });
    const amount = products.base_price
    
    products.base_price = bid+amount;
    products.bidder_id = uid;
    console.log(amount+bid)
    await products.save();
    return products
  }
  catch
  {
    throw new Error("some error occurred")
  }
}