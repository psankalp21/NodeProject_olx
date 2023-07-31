import express, { Router } from 'express';
import {update_product_controller} from '../controllers/update_product.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/updateProduct',verifyToken, update_product_controller);
export default router;