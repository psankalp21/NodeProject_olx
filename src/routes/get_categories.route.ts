import express, { Router } from 'express';
import getCategoriesController from '../controllers/get_categories';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.get('/get_categories',verifyToken, getCategoriesController);
export default router;
