import express, { Router } from 'express';
import {add_photo} from '../controllers/add_profilephoto.controller';

const router: Router = express.Router();
router.post('/addPhoto', add_photo);
export default router;