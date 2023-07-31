import { error } from "console";
import { delete_Profile } from "../entities/user.entity";

class deleteProfile {
    async deleteProfile(email: string) {
        try {
            const user = await delete_Profile(email);
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

export default deleteProfile;
