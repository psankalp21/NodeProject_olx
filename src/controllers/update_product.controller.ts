import { Request, Response } from 'express';
import update_product from '../services/update_product.services';

export async function update_product_controller(req: Request, res: Response) {
    try {
        const id = req.body.pid;
        const updatedData = req.body.updatedData;
        const product = new update_product();
        const result = await product.updateProduct(id, updatedData);

        if(result)
        res.status(201).send(result);

    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
