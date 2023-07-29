import { Request, Response } from 'express';
import fetchProfile from '../services/fetch_profile.services';

export default async function add_product(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const profile = new fetchProfile();
    const user = await profile.fetchProfile(email);
    console.log("user is ", user);
    if (user.email) {
      res.send(user);
    }
  } catch (error) {
    console.error(error);
    res.send("Invalid email");
  }
}
