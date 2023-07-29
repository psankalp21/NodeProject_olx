import { User } from "../database/models/user.model";

export async function ifProfileExists(email: string) {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  return user;
}

export async function add(name: string, email: string, password: string,dob: string, phone: string, gender: string) {
  await User.create({
    
    name: name,
    email: email,
    password: password,
    dob: dob,
    phone: phone,
    gender: gender
  });
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


export async function updatePassword(iemail:string,newpassword:string): Promise<User | null> {
  try {
    
    const user = await User.findOne({ where: { email:iemail } });
    if (user) {
      user.password = newpassword;
      await user.save();
    }
    return user;
  }
  catch(error)
  {
    console.log(`entity errror : ${error}`)
    return error
  }
}

export async function getProfile(email: string): Promise<User | null> {
  try {
    const user = await User.findOne({ where: { email: email} });
    console.log(`user --- ${user}`);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}