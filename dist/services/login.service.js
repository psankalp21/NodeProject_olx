"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
class loginService {
    async login(email, password) {
        try {
            const user = await (0, user_entity_1.login)(email, password);
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = loginService;
//# sourceMappingURL=login.service.js.map