import Image from "next/image";
import React from "react";

const Carie = () => {
  return (
    <div className="bg-neutral-100 w-full flex items-center justify-center h-screen">
      <div className="w-[40%] shadow-lg/5 p-5 h-28 flex flex-row justify-between absolute bottom-20 bg-white rounded-full">
        <div className="w-[15%] flex items-center justify-center border-r border-neutral-600 h-full">
          <button className="p-3 rounded-full cursor-pointer bg-secondary-50 flex items-center justify-center">
            <Image
              src={"/icons/plus.svg"}
              alt="Add"
              height={25}
              width={25}
              className="ml-[2px]"
            />
          </button>
        </div>
        <input
          type="text"
          placeholder="Ask me anything ..."
          className=" px-5 flex-1 text-gray-600 outline-none"
        />
        <div className="w-[15%] flex items-center justify-center border-l border-neutral-600 h-full">
          <button className="p-3 rounded-full cursor-pointer  flex items-center justify-center">
            <Image
              src={"/icons/send.svg"}
              alt="Add"
              height={25}
              width={25}
              className="ml-[2px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carie;
