"use client";
import { Doctor, doctorAtom, useSignUp } from "@/stores/authStore";
import { DoctorThirdSchema, doctorThirdSchema } from "@/utils/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ThirdSignUp = () => {
  const [doctor, setDoctor] = useAtom(doctorAtom);
  const router = useRouter();
  const mutation = useSignUp(() => router.replace("/verification"));
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorThirdSchema>({
    resolver: zodResolver(doctorThirdSchema),
  });

  const onSubmit = async (data: DoctorThirdSchema) => {
    const formData = new FormData();
    formData.append("firstName", doctor?.firstName || "");
    formData.append("lastName", doctor?.lastName || "");
    formData.append("email", data?.email || "");
    formData.append("password", data?.password || "");
    formData.append("phoneNumber", doctor?.phoneNumber || "");
    formData.append("gender", doctor?.gender || "");
    formData.append("specialisation", doctor?.specialisation || "");
    formData.append("affiliation", doctor?.affiliation || "");
    if (selectedFile) {
      formData.append("profileImage", selectedFile);
    }

    mutation.mutate(formData);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 items-center flex flex-col"
      >
        <div className="w-28 h-28 border-6 relative bg-gray-200 border-gray-300 rounded-full">
          {selectedFile && (
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="profile"
              width={112}
              height={112}
              className="rounded-full border-2 object-cover"
            />
          )}
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            onChange={(e) => {
              setSelectedFile(e.target.files ? e.target.files[0] : null);
            }}
            className="hidden"
          />
          <label
            htmlFor="upload-image"
            className="cursor-pointer rounded-full p-3 w-11 h-11 -bottom-2 absolute -right-2 bg-secondary-50 flex items-center justify-center"
          >
            <Image
              src="/images/camera.svg"
              alt="upload"
              width={35}
              height={35}
            />
          </label>
        </div>
        <div className="flex flex-col mt-10 ">
          <label className="text-sm text-gray-600 ">Email</label>
          <input
            type="text"
            {...register("email")}
            placeholder="example@gmail.com"
            autoCapitalize="words"
            className="border outline-none p-3 mt-2 focus:border-secondary-500 rounded-xl w-96 text-sm text-gray-600 border-gray-300"
          />
          {errors?.email && (
            <p className="text-xs mt-1 text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <label className="text-sm text-gray-600 ">Password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="********"
            autoCapitalize="words"
            className="border outline-none p-3 mt-2 focus:border-secondary-500 rounded-xl w-96 text-sm text-gray-600 border-gray-300"
          />
          {errors?.password && (
            <p className="text-xs mt-1 text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          // onClick={() => router.push("/verification")}
          className="linear-gradient py-4 px-10 text-white cursor-pointer font-base font-semibold mt-20 rounded-xl w-full"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default ThirdSignUp;
