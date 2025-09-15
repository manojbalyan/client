import React from "react";
import Link from "next/link";
function page() {
  return (
    <div className="h-screen w-screen flex  fixed justify-center items-center dark:from-[#3E3E3E] dark:to-[#3E3E3E] bg-gradient-to-br from-blue-300 to-cyan-200">
      <div className=" border border-gray-300 flex flex-col shadow-xl rounded-lg sm:gap-4 gap-3 pl-24 pr-24 p-20 bg-white">
        <h1 className="text-center text-2xl dark:text-black font-semibold font-serif">
          Welcome To Next Stop
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
            className="pl-3 pr-3 p-2 dark:text-black border sm:w-80 border-gray-200 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-sm text-gray-500 pl-1 font-semibold "
          >
            Password
          </label>
          <input
            type="text"
            placeholder="password"
            className="pl-3 pr-3 p-2 border dark:text-black border-gray-200 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor=""
            className="text-sm text-gray-500 pl-1 font-semibold "
          >
            Organization Name
          </label>
          <input
            type="text"
            placeholder="Enter Your organization Name"
            className="pl-3 pr-3 p-2 dark:text-black border border-gray-200 rounded-md"
          />
        </div>
        <div className="w-full pb-8">
          <button className="pl-3 pr-3 p-2  border border-gray-200 rounded-lg bg-slate-100 text-black">
            Select location
          </button>
        </div>
        <button className="pl-4 pr-4 p-2 bg-gradient-to-r shadow-lg text-white hover:from-cyan-500 hover:to-blue-600 rounded-lg from-blue-600 to-cyan-500">
          Register
        </button>
        <span className="text-sm dark:text-gray-700">
          Already Registered,{" "}
          <Link href="/login" className="text-blue-700 text-sm">
            Log In here
          </Link>
        </span>
      </div>
    </div>
  );
}

export default page;
