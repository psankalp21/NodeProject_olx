import express, { Router } from 'express';
import fetch_profile from '../controllers/fetch_profile.controller';

const router: Router = express.Router();
router.post('/fetch_profile', fetch_profile);
export default router;
