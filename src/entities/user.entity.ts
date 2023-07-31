import { User } from "../database/models/user.model";

export async function ifProfileExists(email: string) {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  return user; 
}

export async function add(name: string, email: string, password: string, dob: string, phone: string, gender: string) {
  try {
    const user = await User.create({
      name,
      email,
      password,
      dob,
      phone,
      gender,
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }
}

export async function login(email: string, password: string): Promise<User | null> {
  try {
    const user = await User.findOne({ where: { email: email, password: password } });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function updatePassword(iemail: string, newpassword: string): Promise<User | null> {
  try {

    const user = await User.findOne({ where: { email: iemail } });
    if (user) {
      user.password = newpassword;
      await user.save();
    }
    return user;
  }
  catch (error) {
    console.log(`entity errror : ${error}`)
    return error
  }
}

export async function getProfile(email: string): Promise<User | null> {
  try {
    const user = await User.findOne({ where: { email: email } });
    console.log(`found user  --- ${user}`);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function delete_Profile(email: string): Promise<User | null> {
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      await user.destroy();
      console.log(`deleting user --- ${user}`);
      return user;
    }
    else
      return null
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addPhoto(photo) {
  try {
    const user = await User.findOne({ where: { uid: 12} });
    if (user) {
      user.profile = photo;
      await user.save();
    }
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}