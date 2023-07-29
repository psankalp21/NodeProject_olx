import { error } from "console";
import { getProfile } from "../entities/user.entity";

class fetchProfile {
    async fetchProfile(email: string) {
        try {
            const user = await getProfile(email);
            if (user) {
                return user
            }
            else
            {
                throw error("Invalid Email")
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

export default fetchProfile;
