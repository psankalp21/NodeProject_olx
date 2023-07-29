import { error } from "console";
import { updatePassword } from "../entities/user.entity";
import { createClient } from "redis";

class verifyOTP {
    async verifyOTP(otp: string, email: string, newpassword: string) {
        try {
            const client = createClient()
            client.on("error", (err) => console.log("Redis Client Error", err));
            await client.connect();
            const x = await client.get(email)
            if (otp == x) {
                console.log("OTP Verified");
                const user = updatePassword(email, newpassword);
                if (!user) {
                    throw error("some error occurred")
                }
                return user;
            }
            else {
                throw error("Invalid OTP")
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
export default verifyOTP;
