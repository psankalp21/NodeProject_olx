"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const user_entity_1 = require("../entities/user.entity");
const redis_1 = require("redis");
class verifyOTP {
    async verifyOTP(otp, email, newpassword) {
        try {
            const client = (0, redis_1.createClient)();
            client.on("error", (err) => console.log("Redis Client Error", err));
            await client.connect();
            const x = await client.get(email);
            if (otp == x) {
                console.log("OTP Verified");
                const user = (0, user_entity_1.updatePassword)(email, newpassword);
                if (!user) {
                    throw (0, console_1.error)("some error occurred");
                }
                return user;
            }
            else {
                throw (0, console_1.error)("Invalid OTP");
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = verifyOTP;
//# sourceMappingURL=verify_password.service.js.map