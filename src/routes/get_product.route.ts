import express, { Router } from 'express';
import getProduct from '../controllers/get_product.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.get('/get_product',verifyToken,getProduct);
export default router;
