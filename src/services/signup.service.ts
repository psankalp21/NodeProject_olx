import { ifProfileExists, add } from "../entities/user.entity";

class signupService {
    async signup(name: string, email: string,password: string,dob: string,  phone: string, gender: string) {
        const user = ifProfileExists(email);
        console.log(`this is result ${user}`);
        if (user != null) {
            try {
                add(name, email, password, phone, dob ,gender);
                console.log("signup success")
            }
            catch(error)
            {
                console.log(error);
            }
        }
        else
        {
            console.log("already exist")
            return("already exist")
        }
    }
}
export default signupService;
