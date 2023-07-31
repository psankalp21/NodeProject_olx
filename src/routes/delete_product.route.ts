import express, { Router } from 'express';
import {delete_product_controller} from '../controllers/delete_product.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/delProduct',verifyToken, delete_product_controller);
export default router;