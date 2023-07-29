import { error } from "console";
import { ifProfileExists } from "../entities/user.entity";
import { createClient,SetOptions } from "redis";

class forgotPassword {
    async forgotPWD(email: string) {
        try {
            const user = await ifProfileExists(email);
            if (user) {
                const client = createClient()

                client.on("error", (err) => console.log("Redis Client Error", err));

                await client.connect();
                const options: SetOptions = { EX: 180 };
                await client.set(email,"2201",options)
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

export default forgotPassword;
