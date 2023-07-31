import express, { Router } from 'express';
import signupRoute from './signup.route';
import loginRoute from './login.route';
import forgot from './forgot_pwd.route';
import verifyOTP from './verify_otp.route';
import fetchProfile from './fetch_profile.route';
import addPhoto from './add_photo.route';
import deleteProfile from './delete_profile.route';
import getCategory from './get_categories.route';
import addProduct from './add_product.route';
import delProduct from './delete_product.route';
import updateProduct from './update_product.route';
import getProduct from './get_product.route';
import filter_by_price from './filter_by_price.route';
import filter_by_category from './filter_by_price.route';

import bid from './bid.route';




const router: Router = express.Router();

router.use('/olx', signupRoute,loginRoute,forgot,verifyOTP,fetchProfile,addPhoto,deleteProfile,getCategory,addProduct,delProduct,updateProduct,getProduct,filter_by_price,filter_by_category,bid);

export default router;
