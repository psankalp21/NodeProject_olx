import { Request, Response } from 'express';
import filter from '../services/filter.services';

export async function filter_by_category(req: Request, res: Response) {
  try {
    const { category_id } = req.body;
    const product = new filter();
    const result = await product.filterByCategory(category_id);
    
    if (result) {
      res.status(201).send(result);
    }
    else
    {
        throw new Error("no data")
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
}
