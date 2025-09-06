"use client";
import {
  appointmentsData,
  feedbackData,
  perDayData,
  sicknessData,
} from "@/data/data";
import { isLoadingAtom, userAtom } from "@/stores/authStore";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

const Dashboard = () => {
  const user = useAtomValue(userAtom);
  const isLoading = useAtomValue(isLoadingAtom);
  const router = useRouter();
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full flex flex-row bg-neutral-50">
      <div className="w-[80%] min-h-screen flex p-10 flex-col">
        <div className="w-full flex flex-row space-x-6">
          <div className="h-32 bg-secondary-50 border-1 border-secondary-400 px-6 py-2 rounded-xl">
            <h1 className="text-base text-gray-600">
              Goal / <span className="text-secondary-400">day</span>
            </h1>
            <div className="w-full flex flex-row items-center space-x-5 py-2">
              <div className="h-16 w-16 flex items-center justify-center bg-[#ffcccc] rounded-full">
                <Image
                  src={"/icons/goal.svg"}
                  alt="Goal"
                  height={30}
                  width={30}
                />
              </div>
              <h1 className="text-5xl font-medium text-primary-400">
                <span className="text-4xl">10</span>/15
              </h1>
            </div>
          </div>
          <div className="h-32 border-1 bg-secondary-50 border-secondary-400 px-6 py-2 rounded-xl">
            <h1 className="text-base text-gray-600">
              Total patients -{" "}
              <span className="text-secondary-400">this week</span>
            </h1>
            <div className="w-full flex flex-row items-center space-x-5 py-2">
              <div className="h-16 w-16 flex items-center justify-center bg-[#ffc6b2] rounded-full">
                <Image
                  src={"/icons/totalRecords.svg"}
                  alt="Patients"
                  height={35}
                  width={35}
                  className=""
                />
              </div>
              <h1 className="text-5xl font-medium text-primary-400">67</h1>
            </div>
          </div>
          <div className="h-32 border-1 bg-secondary-50 border-secondary-400 px-6 py-2 rounded-xl">
            <h1 className="text-base text-gray-600">
              Upcoming <span className="text-secondary-400">appointments</span>
            </h1>
            <div className="w-full flex flex-row items-center space-x-5 py-2">
              <div className="h-16 w-16 flex items-center justify-center bg-[#b6eeff] rounded-full">
                <Image
                  src={"/icons/activeAppointments.svg"}
                  alt="Goal"
                  height={30}
                  width={30}
                />
              </div>
              <h1 className="text-5xl font-medium text-primary-400">10</h1>
            </div>
          </div>
          <div className="h-32 border-1 bg-secondary-50 border-secondary-400 px-10 py-2 rounded-xl">
            <h1 className="text-base text-gray-600">
              Recovery <span className="text-secondary-400">rate</span>
            </h1>
            <div className="w-full flex flex-row items-center space-x-5 py-2">
              <div className="h-16 w-16 flex items-center justify-center bg-[#ffd7b3] rounded-full">
                <Image
                  src={"/icons/totalPatients.svg"}
                  alt="Patients"
                  height={35}
                  width={35}
                  className="mt-1"
                />
              </div>
              <h1 className="text-5xl font-medium text-primary-400">82%</h1>
            </div>
          </div>
        </div>
        <div className="w-full linear-gradient flex px-10 flex-row items-center justify-between py-5 mt-13 rounded-lg">
          <p className="text-white text-base font-semibold">
            Set your daily goal
          </p>
          <button className="bg-white cursor-pointer rounded-full py-2 px-7">
            Set now
          </button>
        </div>
        <div className="flex flex-row w-full mt-13">
          <div className="w-[60%] flex-col h-[450px] bg-white shadow-lg/5 p-5 flex justify-center border-secondary-300 rounded-xl">
            <h1 className="text-xl font-medium ml-10 text-gray-600">
              Daily Patient Trends
            </h1>
            <ResponsiveContainer className={"mt-10"} width="100%" height="100%">
              <LineChart width={500} height={300} data={perDayData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="male" stroke="#82ca9d" />
                <Line type="monotone" dataKey="female" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col ml-5 space-y-5 flex-1">
            <div className="flex-1 h-44 bg-white shadow-lg/5 p-3 rounded-xl">
              <h1 className="text-xl font-medium ml-5 text-gray-600">
                Appointments
              </h1>
              <PieChart width={400} height={165} className="">
                <Pie
                  data={appointmentsData}
                  cx={180}
                  cy={50}
                  innerRadius={30}
                  outerRadius={50}
                  fill="#8884d8"
                  // paddingAngle={5}
                  dataKey="value"
                  className="border"
                >
                  {appointmentsData.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                  <Legend />
                  <Tooltip />
                </Pie>
              </PieChart>
            </div>
            <div className="flex-1 h-44 bg-white shadow-lg/5 p-3 rounded-xl">
              <h1 className="text-xl font-medium ml-5 text-gray-600">
                Sickness Distribution
              </h1>
              <ResponsiveContainer width="95%" height="80%">
                <RadarChart
                  cx="50%"
                  cy="55%"
                  outerRadius="80%"
                  data={sicknessData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="name" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Mike"
                    dataKey="amount"
                    stroke="#8884d8"
                    fill="#486a86"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full h-[600px] mt-13 bg-white shadow-lg/5 p-5 rounded-xl">
          <h1 className="text-xl font-medium ml-10 text-gray-600">
            Recovery Rate
          </h1>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              width={500}
              height={300}
              data={feedbackData}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="negative"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="positive"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
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
      <div className="border-l-1 fixed right-0 border-gray-200 flex flex-col p-5 h-screen">
        <div className="w-62 h-[40%] flex flex-col items-center p-5 border bg-primary-700 rounded-xl">
          <p className="text-white text-lg font-semibold w-[90%] text-center">
            Upcoming Appointment
          </p>
          <Image
            src={"/images/user1.jpg"}
            alt="User"
            height={80}
            width={80}
            className="rounded-full mt-5"
          />
          <p className="font-regular text-white text-lg mt-3">Alice Nendewa</p>
          <p className="font-regular text-gray-300 w-[90%] text-sm text-center mt-1">
            "Am feeling a bit more dizzy and tired. I'd like to have a short
            convo with you so you can suggest my next steps"
          </p>
          <p className="font-regular text-gray-300 text-base text-center mt-5">
            In - <span className="text-white font-semibold">2 hrs 30 mins</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
