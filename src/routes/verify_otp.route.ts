import express, { Router } from 'express';
import verify_password from '../controllers/verify_password.controller';

const router: Router = express.Router();
router.post('/verify_otp', verify_password);
export default router;
