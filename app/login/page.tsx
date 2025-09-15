import React from "react";
import Link from "next/link";
function page() {
  return (
    <div className="h-screen w-screen  flex justify-center dark:from-[#3E3E3E] dark:to-[#3E3E3E] items-center bg-gradient-to-br from-blue-300 to-cyan-200">
      <div className=" border border-gray-300 flex flex-col shadow-xl rounded-lg sm:gap-8 gap-3 pl-24 pr-24 p-20 bg-white">
        <h1 className="text-center text-2xl dark:text-black font-semibold font-serif">
          Log In
        </h1>
        <div className="flex flex-col gap-2 pt-5">
          <label
            htmlFor=""
            className="text-sm text-gray-500 pl-1 font-semibold 
          "
          >
            User Email
          </label>
          <input
            type="text"
            placeholder="user email"
            className="pl-3 pr-3 p-2 border dark:text-black sm:w-80 border-gray-200 rounded-md"
          />
        </div>
        <div className="flex pb-8 flex-col gap-2">
          <label
            htmlFor=""
            className="text-sm text-gray-500 pl-1 font-semibold "
          >
            Password
          </label>
          <input
            type="text"
            placeholder="password"
            className="pl-3 pr-3 p-2 border border-gray-200 dark:text-black rounded-md"
          />
        </div>
        <button className="pl-4 pr-4 p-2 bg-gradient-to-r shadow-lg text-white hover:from-cyan-500 hover:to-blue-600 rounded-lg from-blue-600 to-cyan-500">
          Log In
        </button>
        <span className="text-sm dark:text-gray-700">
          Have not registered,{" "}
          <Link href="/signup" className="text-blue-700 text-sm">
            Register here
          </Link>
        </span>
        <Link href="/login/forget" className="text-sm font-thin text-red-500">
          forgot password
        </Link>
      </div>
    </div>
  );
}

export default page;
