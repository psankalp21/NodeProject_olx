import { Request, Response } from 'express';
import add_product from '../services/add_product.services';

export async function add_product_controller(req: Request, res: Response) {
  try {
    const { user_id, product_name, description,base_price,category_id,address_id} = req.body;
    const product = new add_product();
    const result = await product.addProduct(user_id, product_name, description,base_price,category_id,address_id);
    
    if (result === true) {
      res.status(201).send("Product Added");
    } else {
      res.status(409).send("Product already exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
}
