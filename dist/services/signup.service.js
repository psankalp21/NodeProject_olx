"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
class signupService {
    async signup(name, email, password, dob, phone, gender) {
        const user = (0, user_entity_1.ifProfileExists)(email);
        console.log(`this is result ${user}`);
        if (user != null) {
            try {
                (0, user_entity_1.add)(name, email, password, phone, dob, gender);
                console.log("signup success");
            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            console.log("already exist");
            return ("already exist");
        }
    }
}
exports.default = signupService;
//# sourceMappingURL=signup.service.js.map