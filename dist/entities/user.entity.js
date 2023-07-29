"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.updatePassword = exports.login = exports.add = exports.ifProfileExists = void 0;
const user_model_1 = require("../database/models/user.model");
async function ifProfileExists(email) {
    const user = await user_model_1.User.findOne({ where: { email } });
    console.log(user);
    return user;
}
exports.ifProfileExists = ifProfileExists;
async function add(name, email, password, dob, phone, gender) {
    await user_model_1.User.create({
        name: name,
        email: email,
        password: password,
        dob: dob,
        phone: phone,
        gender: gender
    });
}
exports.add = add;
async function login(email, password) {
    try {
        const user = await user_model_1.User.findOne({ where: { email: email, password: password } });
        console.log(user);
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
exports.login = login;
async function updatePassword(iemail, newpassword) {
    try {
        const user = await user_model_1.User.findOne({ where: { email: iemail } });
        if (user) {
            user.password = newpassword;
            await user.save();
        }
        return user;
    }
    catch (error) {
        console.log(`entity errror : ${error}`);
        return error;
    }
}
exports.updatePassword = updatePassword;
async function getProfile(email) {
    try {
        const user = await user_model_1.User.findOne({ where: { email: email } });
        console.log(`user --- ${user}`);
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
exports.getProfile = getProfile;
//# sourceMappingURL=user.entity.js.map