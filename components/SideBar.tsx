"use client";
import { navLinks } from "@/utils/Navlinks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SideBar = () => {
  const [isActive, setisActive] = useState("/dashboard");
  const router = useRouter();
  return (
    <div className="w-64 h-screen flex items-center flex-col bg-secondary-50">
      <div className="flex w-full flex-row px-4 py-1 items-center justify-between">
        <div className="flex flex-row items-center space-x-2">
          <Image src={"/icons/Logo.png"} alt="Logo" height={50} width={50} />
          <span className="text-lg text-linear-gradient font-semibold">
            CareSync
          </span>
        </div>
        <button className="cursor-pointer">
          <Image
            src={"/icons/hamburger.svg"}
            alt="Menu"
            height={24}
            width={24}
          />
        </button>
      </div>
      <div className="w-full p-5 mt-10">
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <button
                  onClick={() => {
                    setisActive(link.href);
                    router.replace(link.href);
                  }}
                  className={`flex w-full items-center flex-row space-x-4 p-3 rounded-lg mt-1 hover:bg-secondary-100 ${
                    isActive === link.href && "bg-secondary-100"
                  }`}
                >
                  <Image
                    src={isActive === link.href ? link.activeIcon : link.icon}
                    alt={link.label}
                    height={20}
                    width={20}
                  />
                  <span
                    className={`text-sm font-semibold ${
                      isActive === link.href
                        ? "text-[#2c8c5d]"
                        : "text-[#3f3e3e]"
                    }`}
                  >
                    {link.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-5 w-full px-5">
        <div className="w-full flex items-center justify-between flex-row">
          <hr className="w-12 h-[2px] bg-gray-100" />
          <p className="text-sm text-gray-500">Chat with Carie</p>
          <hr className="w-12 h-[2px] bg-gray-100" />
        </div>
        <button
          onClick={() => {
            setisActive("Carie");
            router.replace("/dashboard/carie");
          }}
          className={`flex w-full items-center flex-row space-x-4 p-2 rounded-lg mt-2 hover:bg-secondary-100 ${
            isActive === "Carie" && "bg-secondary-100"
          }`}
        >
          <Image
            src={"/icons/carie.svg"}
            alt={"Carie"}
            height={30}
            width={30}
          />
          <span className={"text-sm font-semibold text-[#2c8c5d]"}>
            {"Carie Assistant"}
          </span>
        </button>
      </div>
      <div className="mt-12 w-full px-5">
        <div className="w-full flex items-center justify-between flex-row">
          <hr className="w-12 h-[2px] bg-gray-100" />
          <p className="text-sm text-gray-500">Tip of the day</p>
          <hr className="w-12 h-[2px] bg-gray-100" />
        </div>
        <div className="linear-gradient w-full h-[200px] rounded-xl mt-5"></div>
      </div>
      <button className="flex mt-20 items-center space-x-2 bg-secondary-100 py-3 px-10 rounded-lg">
        <Image
          src={"/icons/settings.svg"}
          alt="settings"
          height={20}
          width={20}
        />
        <span className="text-sm font-medium">Settings</span>
      </button>
    </div>
  );
};

export default SideBar;
