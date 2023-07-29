import express, { Router } from 'express';
import signupRoute from './signup.route';
import loginRoute from './login.route';
import forgot from './forgot_pwd.route';
import verifyOTP from './verify_otp.route';
import fetchProfile from './fetch_profile.route';
import addPhoto from './add_photo.route'

const router: Router = express.Router();

router.use('/olx', signupRoute,loginRoute,forgot,verifyOTP,fetchProfile,addPhoto);

export default router;
