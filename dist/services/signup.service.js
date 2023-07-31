"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
class signupService {
    async signup(name, email, password, dob, phone, gender) {
        const user = await (0, user_entity_1.ifProfileExists)(email);
        console.log(`this is result ${user}`);
        if (!user) {
            try {
                await (0, user_entity_1.add)(name, email, password, phone, dob, gender);
                console.log("signup success");
                return true;
            }
            catch (error) {
                console.error(error);
                throw new Error("Failed to add user");
            }
        }
        else {
            return false;
        }
    }
}
exports.default = signupService;
//# sourceMappingURL=signup.service.js.map