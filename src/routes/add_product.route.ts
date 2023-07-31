import express, { Router } from 'express';
import { add_product_controller } from '../controllers/add_products.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/addProduct',verifyToken, add_product_controller);
export default router;