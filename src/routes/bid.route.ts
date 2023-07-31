import express, { Router } from 'express';
import {bid_controller} from '../controllers/bid.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/bid',verifyToken, bid_controller);
export default router;