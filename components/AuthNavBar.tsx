"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import CommonButton from "./CommonButton";

const AuthNavBar = () => {
  const router = useRouter();

  return (
    <div className="w-full flex-row px-10 flex items-center justify-between h-[4rem] border-b border-gray-300">
      <div className="flex flex-row space-x-2 items-center">
        <Image src={"/icons/Logo.png"} alt="Logo" width={50} height={50} />
        <span className="text-base font-poppins font-semibold">CareSync</span>
      </div>
      <div className="flex-row hidden md:flex space-x-10">
        <Link
          href={"/"}
          className="font-poppins text-sm text-gray-700 hover:underline font-normal"
        >
          About
        </Link>
        <Link
          href={""}
          className="font-poppins text-sm text-gray-700 hover:underline font-normal"
        >
          Contact US
        </Link>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <Link
          href={"/sign-in"}
          className="font-poppins text-sm text-gray-700 hover:underline font-normal"
        >
          Sign In
        </Link>
        <CommonButton
          title="Create Account"
          className="px-5 py-4"
          onClick={() => {
            router.push("/sign-up");
          }}
        />
      </div>
    </div>
  );
};

export default AuthNavBar;
