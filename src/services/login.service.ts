import { login } from "../entities/user.entity";
import { generateToken } from "../middleware/jwt";

class loginService {
  async login(email: string, password: string) {
    try {
      const user = await login(email, password);
      const token = generateToken({ uid: user.uid });
      return { token, user };

    } catch (error) {
      console.log(error);
    }
  }
}

export default loginService;
