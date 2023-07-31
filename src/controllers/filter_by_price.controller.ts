import { Request, Response } from 'express';
import filter from '../services/filter.services';

export async function filter_by_price(req: Request, res: Response) {
  try {
    const { max_price,min_price} = req.body;
    const product = new filter();
    const result = await product.filterByPrice(max_price,min_price);
    
    if (result) {
      res.status(201).send(result);
  }} catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
}
