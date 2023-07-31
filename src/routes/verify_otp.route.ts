import express, { Router } from 'express';
import verify_password from '../controllers/verify_password.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/verify_otp',verifyToken, verify_password);
export default router;
