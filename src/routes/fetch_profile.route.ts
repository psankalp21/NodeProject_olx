import express, { Router } from 'express';
import fetch_profile from '../controllers/fetch_profile.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/fetch_profile',verifyToken, fetch_profile);
export default router;
