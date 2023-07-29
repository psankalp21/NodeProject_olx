import express, { Router } from 'express';
import forgot_password from '../controllers/forgot_password.controller';

const router: Router = express.Router();
router.post('/forgot_password', forgot_password);
export default router;
