import { Request, Response } from 'express';
import bid_product from '../services/bid.services';

export async function bid_controller(req: Request, res: Response) {
    try {
        const { user_id, pid, amount } = req.body;
        const product = new bid_product();
        const result = await product.bid(user_id, pid, amount);

        res.status(201).send(result);

    }
    catch (error) {
        console.error(error);
        res.status(500).send("Some error occurred");
    }
}
