"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const user_entity_1 = require("../entities/user.entity");
class deleteProfile {
    async deleteProfile(email) {
        try {
            const user = await (0, user_entity_1.delete_Profile)(email);
            if (user) {
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
exports.default = deleteProfile;
//# sourceMappingURL=delete_profile.services.js.map