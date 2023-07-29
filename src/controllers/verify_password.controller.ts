import { Request, Response } from 'express';
import verifyOTP from '../services/verify_password.service';

export default async function verify_password(req: Request, res: Response) {
    try {
        const { otp,email,newpassword } = req.body;
        const pwd = new verifyOTP();
        const user = await pwd.verifyOTP(otp,email,newpassword);
        if (user.email) {
            res.send("Password changed! Dont forget this time");
        }
    } catch (error) {
        console.log({error});
        res.send("OTP didnot match");
    }
}
