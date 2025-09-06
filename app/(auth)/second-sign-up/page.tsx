"use client";
import { Doctor, doctorAtom } from "@/stores/authStore";
import {
  DoctorSecondSchema,
  doctorSecondSchema,
} from "@/utils/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SecondSignUp = () => {
  const setDoctor = useSetAtom(doctorAtom);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorSecondSchema>({
    resolver: zodResolver(doctorSecondSchema),
  });

  const onSubmit = (data: DoctorSecondSchema) => {
    setDoctor((prev) =>
      prev ? { ...prev, ...data } : ({ ...data } as Doctor)
    );
    router.push("/third-sign-up");
  };

  return (
    <main className="bg-white flex-1 h-screen w-full p-20 flex items-center flex-col rounded-l-[100px]">
      <Image
        src={"/icons/Logo.png"}
        alt="logo"
        width={100}
        height={100}
        className="mt-20"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 ">Specialisation</label>
          <input
            type="text"
            {...register("specialisation")}
            placeholder="eg. Pharmacist"
            autoCapitalize="words"
            className="border outline-none p-3 mt-2 focus:border-secondary-500 rounded-xl w-96 text-sm text-gray-600 border-gray-300"
          />
          {errors?.specialisation && (
            <p className="text-xs mt-1 text-red-600">
              {errors.specialisation.message}
            </p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="text-sm text-gray-600 ">
            Hospital/Clinic Affiliation
          </label>
          <input
            type="text"
            {...register("affiliation")}
            placeholder="eg. Connaught"
            autoCapitalize="words"
            className="border outline-none p-3 mt-2 focus:border-secondary-500 rounded-xl w-96 text-sm text-gray-600 border-gray-300"
          />
          {errors?.affiliation && (
            <p className="text-xs mt-1 text-red-600">
              {errors.affiliation.message}
            </p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="text-sm text-gray-600 ">Gender</label>
          <input
            type="text"
            placeholder="eg. Male"
            {...register("gender")}
            className="border outline-none p-3 mt-2 focus:border-secondary-500 rounded-xl w-96 text-sm text-gray-600 border-gray-300"
          />
          {errors.gender && (
            <p className="text-xs mt-1 text-red-600">{errors.gender.message}</p>
          )}
        </div>
        <button
          type="submit"
          // onClick={() => console.log(doctor)}
          className="linear-gradient py-4 px-10 text-white font-base font-semibold mt-28 rounded-xl w-full"
        >
          Next
        </button>
      </form>
    </main>
  );
};

export default SecondSignUp;
