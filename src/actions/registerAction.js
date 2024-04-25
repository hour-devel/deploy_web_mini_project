"use server";

import { registerService } from "@/service/auth.service";

export const registerAction = async (registerInfo) => {
  const newRegister = {
    firstname: registerInfo.get("firstname"),
    lastname: registerInfo.get("lastname"),
    gender: registerInfo.get("gender"),
    profile_url: registerInfo.get("profile_url"),
    email: registerInfo.get("email"),
    password: registerInfo.get("passowrd"),
  };
  await registerService(newRegister);
};
