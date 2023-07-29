import { Request, Response } from 'express';
import signupService from '../services/signup.service';




/**
 * @swagger
 * tags:
 *   name: Signup
 *   description: User signup operations
 */

/**
 * @swagger
 * path:
 *   /signup:
 *     post:
 *       summary: Creating a new user account
 *       tags: [Signup]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 dob:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 gender:
 *                   type: string
 *       responses:
 *         '200':
 *           description: Signup success
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
*         '400':
 *           description: Invalid input
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 */









export async function signup(req: Request, res: Response) {
  try {
    const { name, email, password, dob, phone, gender } = req.body;
    const signup = new signupService();
    signup.signup(name, email, password, dob, phone, gender);
    res.send("signup success")
  }
  catch (error) {
    req.send("some error occured")
  }
}
