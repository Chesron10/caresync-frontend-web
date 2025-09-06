"use client";
import { useVerify } from "@/stores/authStore";
import {
  verificationSchema,
  VerificationSchema,
} from "@/utils/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";

const Verification = () => {
  const router = useRouter();
  const mutation = useVerify(() => router.replace("/dashboard"));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationSchema>({
    resolver: zodResolver(verificationSchema),
  });

  const onSubmit = (data: VerificationSchema) => {
    mutation.mutate(data.code);
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
      <p className="text-sm text-gray-500 mt-5">
        Please enter the verification code sent to your email.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 items-center flex flex-col"
      >
        <div className="flex flex-col mt-10 ">
          <label className="text-sm text-gray-600 ">Verification Code</label>
          <input
            type="text"
            {...register("code")}
            placeholder="Enter your verification code"
            autoCapitalize="words"
            className="border outline-none p-3 mt-2 focus:border-secondary-500 rounded-xl w-96 text-sm text-gray-600 border-gray-300"
          />
          {errors?.code && (
            <p className="text-xs mt-1 text-red-600">{errors.code.message}</p>
          )}
        </div>

        <button
          // type="submit"
          onClick={() => router.replace("/dashboard")}
          className="linear-gradient py-4 px-10 text-white font-base font-semibold mt-32 rounded-xl w-full"
        >
          Done
        </button>
      </form>
    </main>
  );
};

export default Verification;
