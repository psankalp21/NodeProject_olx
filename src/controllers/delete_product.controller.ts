import { Request, Response } from 'express';
import delete_product from '../services/delete_product.services';

export async function delete_product_controller(req: Request, res: Response) {
  try {
    const { pid } = req.body;
    const product = new delete_product();
    const result = await product.delProduct(pid);
    
    if (result === true) {
      res.status(201).send("Product deleted");
    } else {
      res.status(409).send("Product doesnot exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
}
