"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const user_entity_1 = require("../entities/user.entity");
const redis_1 = require("redis");
class forgotPassword {
    async forgotPWD(email) {
        try {
            const user = await (0, user_entity_1.ifProfileExists)(email);
            if (user) {
                const client = (0, redis_1.createClient)();
                client.on("error", (err) => console.log("Redis Client Error", err));
                await client.connect();
                const options = { EX: 180 };
                await client.set(email, "2201", options);
                return user;
            }
            else {
                throw (0, console_1.error)("Invalid Email");
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = forgotPassword;
//# sourceMappingURL=forgot_password.service.js.map