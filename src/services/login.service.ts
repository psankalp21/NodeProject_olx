import { login } from "../entities/user.entity";

class loginService {
  async login(email: string, password: string) {
    try {
      const user = await login(email, password);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default loginService;
