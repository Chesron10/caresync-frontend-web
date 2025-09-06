"use client";
import { userAtom } from "@/stores/authStore";
import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  const user = useAtomValue(userAtom);

  return (
    <div className="py-3 border-b border-gray-200 px-10 flex bg-white flex-row w-full items-center justify-between ">
      <div className="flex flex-col">
        <span className="text-gray-400 italic text-sm">Welcome back,</span>
        <span className="text-gray-600 text-lg font-medium">{`Dr. ${
          user?.firstName || ""
        }`}</span>
      </div>
      <div className="w-[40%] h-12 flex flex-row items-center justify-start px-5  bg-[#EDECEC] rounded-full">
        <Image src={"/icons/search.svg"} alt="Search" height={24} width={24} />
        <input
          type="text"
          placeholder="Search ..."
          className="h-full text-[#5b5b5b] outline-none ml-2 italic flex flex-1"
        />
      </div>
      <div className="flex flex-row items-center space-x-5">
        <button className="p-2 rounded-full cursor-pointer bg-secondary-50 flex items-center justify-center">
          <Image
            src={"/icons/plus.svg"}
            alt="Add"
            height={20}
            width={20}
            className="ml-[2px]"
          />
        </button>
        <button className="cursor-pointer flex items-center justify-center">
          <Image
            src={"/icons/carie.svg"}
            alt="Carie"
            height={50}
            width={50}
            className=""
          />
        </button>
        <button className="cursor-pointer flex items-center justify-center">
          <Image
            src={"/icons/notification.svg"}
            alt="Notification"
            height={25}
            width={25}
            className=""
          />
        </button>
        <button
          onClick={() => console.log(user)}
          className="cursor-pointer bg-secondary-50 rounded-full p-2 flex items-center justify-center"
        >
          <img
            src={user?.profileImg}
            alt="Profile"
            // height={25}
            // width={25}
            className=" rounded-full h-[40px] w-[40px] "
          />
          {/* <div className="bg-rose-200 rounded-full h-10 w-10 flex items-center justify-center">
            <p className="text-lg font-bold text-rose-800">CB</p>
          </div> */}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
