import { Request, Response } from 'express';
import signupService from '../services/signup.service';

export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, dob, phone, gender } = req.body;
    const signup = new signupService();
    const result = await signup.signup(name, email, password, dob, phone, gender);
    
    if (result === true) {
      res.status(201).send("Signup success");
    } else {
      res.status(409).send("Account already exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
}
