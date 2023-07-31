import { ifProfileExists, add } from "../entities/user.entity";

class signupService {
  async signup(name: string, email: string, password: string, dob: string, phone: string, gender: string) {
    const user = await ifProfileExists(email);
    console.log(`this is result ${user}`);
    if (!user) {
      try {
        await add(name, email, password, phone, dob, gender);
        console.log("signup success");
        return true;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to add user");
      }
    } else {
      return false;
    }
  }
}

export default signupService;
