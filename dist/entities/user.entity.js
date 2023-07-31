"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPhoto = exports.delete_Profile = exports.getProfile = exports.updatePassword = exports.login = exports.add = exports.ifProfileExists = void 0;
const user_model_1 = require("../database/models/user.model");
async function ifProfileExists(email) {
    const user = await user_model_1.User.findOne({ where: { email } });
    console.log(user);
    return user;
}
exports.ifProfileExists = ifProfileExists;
async function add(name, email, password, dob, phone, gender) {
    try {
        const user = await user_model_1.User.create({
            name,
            email,
            password,
            dob,
            phone,
            gender,
        });
        return user;
    }
    catch (error) {
        console.error(error);
        throw new Error("Failed to create user");
    }
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
        console.log(`found user  --- ${user}`);
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
exports.getProfile = getProfile;
async function delete_Profile(email) {
    try {
        const user = await user_model_1.User.findOne({ where: { email } });
        if (user) {
            await user.destroy();
            console.log(`deleting user --- ${user}`);
            return user;
        }
        else
            return null;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
exports.delete_Profile = delete_Profile;
async function addPhoto(photo) {
    try {
        const user = await user_model_1.User.findOne({ where: { uid: 12 } });
        if (user) {
            user.profile = photo;
            await user.save();
        }
        return user;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}
exports.addPhoto = addPhoto;
//# sourceMappingURL=user.entity.js.map