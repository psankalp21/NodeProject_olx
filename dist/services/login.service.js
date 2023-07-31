"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../entities/user.entity");
const jwt_1 = require("../middleware/jwt");
class loginService {
    async login(email, password) {
        try {
            const user = await (0, user_entity_1.login)(email, password);
            const token = (0, jwt_1.generateToken)({ uid: user.uid });
            return { token, user };
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = loginService;
//# sourceMappingURL=login.service.js.map