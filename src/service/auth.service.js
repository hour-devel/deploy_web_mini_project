import { headerToken } from "@/app/api/headerToken";
import { baseUrl } from "@/util/constants";
import { redirect } from "next/dist/server/api-utils";

export const loginService = async (loginInfo) => {
  const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/login`, {
    method: "POST",
    body: JSON.stringify(loginInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const registerService = async (registerInfo) => {
  const res = await fetch(`${baseUrl}/api/todo/v1/auth/sign-up`, {
    method: "POST",
    body: JSON.stringify(registerInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(res.ok){
    return { redirect: '/login' };
  }
};
