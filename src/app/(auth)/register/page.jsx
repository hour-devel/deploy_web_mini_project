import React from "react";
import Image from "next/image";
import sign_up from "../../../../public/assets/icons/sign-up.svg";
import logo from "../../../../public/assets/icons/logo.svg";
import { registerAction } from "@/actions/registerAction";

const RegisterPage = () => {
  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center p-6">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="xl:w-7/12 p-6">
          <div className="bg-white">
            <div className="mx-auto max-w-xl">
              <Image src={logo} alt=""></Image>
            </div>
            <form
              action={registerAction}
              className="mx-auto max-w-xl mt-[20px]"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-[20px]">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      required=""
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Your First Name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      required=""
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Your Last Name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-[20px]">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      required=""
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      required=""
                      type="text"
                      name="passowrd"
                      id="passowrd"
                      placeholder="Your passowrd"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-[20px]">
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2.5">
                    <input
                      required=""
                      type="text"
                      name="gender"
                      id="gender"
                      placeholder="Your Gender"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="profile-url"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Profile URL
                  </label>
                  <div className="mt-2.5">
                    <input
                      required=""
                      type="text"
                      name="profile_url"
                      id="profile_url"
                      placeholder="Your profile url"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-sm py-2 w-full block"
                >
                  Submit →
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <Image src={sign_up} className="h-[100%]" alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
