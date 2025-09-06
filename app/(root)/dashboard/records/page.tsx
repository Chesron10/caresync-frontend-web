import Image from "next/image";
import React from "react";

const Records = () => {
  return (
    <div className="w-full h-screen flex flex-col p-10 bg-neutral-50">
      <div className="w-full h-28 shadow-lg/5 bg-white rounded-xl flex flex-row items-center px-10">
        <input
          type="text"
          placeholder="Enter patient's code ..."
          className="h-14 text-[#5b5b5b] bg-neutral-100 px-8 focus:border focus:border-secondary-300 outline-none ml-2 flex w-[40%] rounded-full"
        />
        <button className="bg-primary-500 py-4 ml-5 hover:bg-primary-400 font-semibold cursor-pointer px-10 rounded-full text-white">
          Search
        </button>
      </div>
      <div className="w-full min-h-[30%] shadow-lg/5 bg-white rounded-xl py-5 flex flex-col mt-20 px-10">
        <h1 className="text-xl text-gray-700">Recent Records</h1>
        <table className="w-full mt-10">
          <tbody>
            <tr className="bg-neutral-200 h-16">
              <th className="text-gray-600 font-normal">Profile</th>
              <th className="text-gray-600 font-normal">Full name</th>
              <th className="text-gray-600 font-normal">Location</th>
              <th className="text-gray-600 font-normal">City/town</th>
              <th className="text-gray-600 font-normal">Last viewed</th>
              <th className="text-gray-600 font-normal">More</th>
            </tr>
            <tr className="h-16">
              <td className="h-16 flex justify-center items-center">
                <Image
                  src={"/images/user1.jpg"}
                  alt="User"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </td>
              <td className="">
                <p className="text-center">Alice Nendewa</p>
              </td>
              <td className="">
                <p className="text-center">30 Kabala Road</p>
              </td>
              <td className="">
                <p className="text-center">Kamabai</p>
              </td>
              <td className="">
                <p className="text-center">2:00 pm</p>
              </td>
              <td className="text-center">
                <button>
                  <Image
                    src={"/icons/more.svg"}
                    alt="User"
                    height={20}
                    width={20}
                    className="rounded-full mt-2"
                  />
                </button>
              </td>
            </tr>
            <tr className="h-16 bg-neutral-100">
              <td className="h-16 flex justify-center items-center">
                <Image
                  src={"/images/user1.jpg"}
                  alt="User"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </td>
              <td className="">
                <p className="text-center">Alice Nendewa</p>
              </td>
              <td className="">
                <p className="text-center">30 Kabala Road</p>
              </td>
              <td className="">
                <p className="text-center">Kamabai</p>
              </td>
              <td className="">
                <p className="text-center">2:00 pm</p>
              </td>
              <td className="text-center">
                <button>
                  <Image
                    src={"/icons/more.svg"}
                    alt="User"
                    height={20}
                    width={20}
                    className="rounded-full mt-2"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;
