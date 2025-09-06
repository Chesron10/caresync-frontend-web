"use client";

import AuthNavBar from "@/components/AuthNavBar";
import CommonButton from "@/components/CommonButton";
import {
  isAuthenticatedAtom,
  isLoadingAtom,
  useGetDoctor,
  userAtom,
} from "@/stores/authStore";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [user, setUser] = useAtom(userAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const router = useRouter();
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const { data, isPending, error } = useGetDoctor(user?.id);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      router.replace("/dashboard");
    }
  }, []);

  useEffect(() => {
    if (isPending) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    if (error) {
      console.error("Error fetching doctor:", error);
    }

    if (data) {
      console.log(data);
      setUser({ ...data.safeUser });
    }
  }, [isPending, error, data, setIsLoading, setUser]);

  return (
    <main className="bg-white flex flex-col w-full min-h-screen hide-scrollbar">
      <AuthNavBar />
      <div className="w-full flex pt-28 h-screen ">
        <div className="w-[60%] px-32 py-52">
          <h1 className="text-6xl">
            Your Health,{" "}
            <span className="font-semibold text-secondary-700">Connected</span>.{" "}
            <br /> Your care,{" "}
            <span className="font-semibold text-primary-600">Synchronized</span>{" "}
            with{" "}
            <span className="font-semibold text-linear-gradient">CareSync</span>
            .
          </h1>
          <p className="text-gray-500 mt-20 text-base ">
            Are you a doctor? Be part of us now.
          </p>
          <div className="space-x-5 mt-10">
            <Link
              href={"/sign-in"}
              className="py-5 px-10 hover:bg-gray-300 text-lg text-gray-500 rounded-xl bg-gray-200"
            >
              Sign In
            </Link>
            <CommonButton
              title="Create Account"
              className="p-5 text-base font-semibold"
              onClick={() => router.push("/sign-up")}
            />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={"/images/mainImage.svg"}
            alt="Main Image"
            height={1280}
            width={1280}
          />
        </div>
      </div>
      <div className="w-full h-64 flex items-center space-x-20 justify-center bg-primary-700">
        <div className="flex flex-col items-center justify-center">
          <p className="text-base text-secondary-500">Over</p>
          <h1 className="text-7xl text-white font-semibold">110K</h1>
          <p className="text-base text-secondary-500 font-semibold">Patients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-base text-secondary-500">Over</p>
          <h1 className="text-7xl text-white font-semibold">13K</h1>
          <p className="text-base text-secondary-500 font-semibold">Doctors</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-base text-secondary-500">Over</p>
          <h1 className="text-7xl text-white font-semibold">8K</h1>
          <p className="text-base text-secondary-500 font-semibold">
            Daily Appointments
          </p>
        </div>
      </div>
      <div className="bg-secondary-50 h-[850px] px-52 py-16 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-xl text-secondary-500 font-semibold">Our</p>
          <h1 className="text-6xl text-primary-500 font-semibold">Services</h1>
        </div>
        <div className="flex ">
          <div className="mt-16 w-[50%]">
            <Image
              src={"/images/appointment-image.svg"}
              alt="Appointment Image"
              height={450}
              width={450}
            />
          </div>
          <div className="mt-28 flex-1">
            <h1 className="text-5xl text-linear-gradient font-semibold">
              Online Appointments
            </h1>
            <p className="mt-12 text-lg text-gray-600">
              Get rid of the hassle that comes with being in waiting lines to
              see a doctor. <br /> Book an online medical appointment anytime,
              anywhere.
            </p>
            <p className="mt-8 text-lg text-gray-600">
              To be part of us as a patient download our app now <br />{" "}
              <span className="text-secondary-500 cursor-pointer">
                download
              </span>{" "}
              here and create and join our huge community of professional
              doctors to handle your care.
            </p>
            <CommonButton title="Learn more" className="p-4 mt-20 " />
          </div>
        </div>
      </div>
      <div className="bg-white h-[850px] px-52 py-16 w-full">
        <div className="flex ">
          <div className="mt-32 flex-1">
            <h1 className="text-5xl text-linear-gradient font-semibold">
              Your Medical Record - Everywhere
            </h1>
            <p className="mt-12 text-lg text-gray-600">
              All your medical records ranging from past illnesses, tests and
              results, allergies, common medical metrics and treatments are all
              synced in the cloud from access anywhere, everywhere.
            </p>
            <p className="mt-8 text-lg text-gray-600">
              Be at ease as less questions can be asked with maximum precision
              in decision made my doctors.
            </p>
            <CommonButton title="Learn more" className="p-4 mt-10 " />
          </div>
          <div className="mt-20 ml-44 w-[50%]">
            <Image
              src={"/images/record-image.svg"}
              alt="Appointment Image"
              height={550}
              width={550}
            />
          </div>
        </div>
      </div>
      <div className="bg-secondary-50 h-[850px] px-52 py-16 w-full">
        <div className="flex ">
          <div className="mt-20 w-[50%]">
            <Image
              src={"/images/bot-image.svg"}
              alt="Appointment Image"
              height={450}
              width={450}
            />
          </div>
          <div className="mt-36 flex-1">
            <h1 className="text-5xl text-linear-gradient font-semibold">
              AI Medical Chatbot
            </h1>
            <p className="mt-12 text-lg text-gray-600">
              Delve into the endless possibilities of Artificial Intelligence.
              Find your medical companion in our AI medical chatbot - Carie. Ask
              health related questions and report mild problems for a quick
              solution.
            </p>
            <p className="mt-8 text-lg text-gray-600">
              Doctors can also use Carie to query your health records instead of
              scrolling endlessly to find relevant information.
            </p>
            <CommonButton title="Learn more" className="p-4 mt-10 " />
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full bg-primary-700"></div>
    </main>
  );
}
