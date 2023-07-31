import { Request, Response } from 'express';
import get_product from '../services/get_product.services';

export default async function getProductsController(req: Request, res: Response) {
  try {
    const product = new get_product();
    const result = await product.getProduct();
    
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409).send("No data to fetch");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
}
