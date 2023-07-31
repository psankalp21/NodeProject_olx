import { Request, Response } from 'express';
import getCategories from '../services/get_categories.services';

export default async function getCategoriesController(req: Request, res: Response) {
  try {
    const ctg = new getCategories();
    const result = await ctg.get_Categories();
    
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
