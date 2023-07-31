import express, { Router } from 'express';
import {add_photo} from '../controllers/add_profilephoto.controller';
import { verifyToken } from '../middleware/jwt';

const router: Router = express.Router();
router.post('/addPhoto',verifyToken, add_photo);
export default router;