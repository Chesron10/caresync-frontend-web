import api from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { atom, useAtom, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { da } from "zod/locales";

export type Doctor = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  specialisation?: string;
  affiliation?: string;
  gender?: string;
  email?: string;
  password?: string;
  profileImage?: any;
};

type User = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  specialisation?: string;
  hospitalAffiliation?: string;
  gender?: string;
  email?: string;
  profileImg?: string;
  createdAt?: Date;
  dailyGoal?: number;
  id?: string;
  status?: string;
};

type OtpResponse = {
  userId: string;
  message: string;
};

// auth atoms
export const userAtom = atomWithStorage<User | null>("user", null);
export const doctorAtom = atom<Doctor | null>(null);
export const isAuthenticatedAtom = atom(false);
export const otp = atom<OtpResponse | null>(null);
export const isLoadingAtom = atom(false);

// auth functions

export function useSignUp(onSuccessCallback?: () => void) {
  const setOtp = useSetAtom(otp);
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await api.post("/doctors", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      // console.log(data);
      setOtp(data);
      onSuccessCallback?.();
    },
  });
}

export function useVerify(onSuccessCallback?: () => void) {
  const setUser = useSetAtom(userAtom);
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const otpData = useAtomValue(otp);

  return useMutation({
    mutationFn: async (data: string) => {
      const response = await api.post("/auth/verify-otp", {
        code: data,
        userId: otpData?.userId,
      });
      return response.data;
    },
    onSuccess: (data) => {
      const user = data.safeUser;
      setUser({ ...user });
      setIsAuthenticated(true);
      localStorage.setItem("token", JSON.stringify(data.token));
      onSuccessCallback?.();
    },
  });
}

// Sign In

// get doctor

export function useGetDoctor(id: string | undefined) {
  return useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      const response = await api.get(`/doctors/${id}`);
      return response.data;
    },
  });
}
