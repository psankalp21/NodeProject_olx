
import { Request, Response } from 'express';
import deleteProfile from '../services/delete_profile.services';

export default async function delete_Profile(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const profile = new deleteProfile();
    const user = await profile.deleteProfile(email);
    console.log("deleted from user : ", user);
    if (user.email) {
      res.send("Profile Deleted Successfully");
    }
  } catch (error) {
    console.error(error);
    res.send("Account doesn't exists");
  }
}
