import { Request, Response } from 'express';
import loginService from '../services/login.service';

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const login = new loginService();
    const user = await login.login(email, password);
    if (!user) {
      res.send("Invalid credentials");
    } else {
      res.send(user);
    }
  } catch (error) {
    console.error(error);
    res.send("Invalid email or password");
  }
}
