import express, { Router } from 'express';
import delete_Profile from '../controllers/delete_profile.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/deleteProfile',verifyToken, delete_Profile);
export default router;