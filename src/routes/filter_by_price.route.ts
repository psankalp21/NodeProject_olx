import express, { Router } from 'express';
import {filter_by_category} from '../controllers/filter_by_category.controller';
import {filter_by_price} from '../controllers/filter_by_price.controller';
import { verifyToken } from '../middleware/jwt';


const router: Router = express.Router();
router.post('/filterPrice',verifyToken, filter_by_price);
router.post('/filterCategory',verifyToken, filter_by_category);

export default router;