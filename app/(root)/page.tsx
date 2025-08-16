import AuthNavBar from "@/components/AuthNavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-center w-full min-h-screen">
      <AuthNavBar />
    </main>
  );
}
