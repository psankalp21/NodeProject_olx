import { Request, Response } from 'express';
import forgotPassword from '../services/forgot_password.service';

export default async function forgot_password(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const pwd = new forgotPassword();
    const user = await pwd.forgotPWD(email);
    console.log("user is ", user);
    if (user.email) {
      res.send("OTP Generated");
    } else {
      res.send("invalid email");
    }
  } catch (error) {
    console.error(error);
    res.send("Invalid email or password");
  }
}
