import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full h-screen">
      <SideBar />
      <section className="flex flex-1 flex-col ">
        <NavBar />
        <div className="overflow-y-auto flex-col flex hide-scrollbar">
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;
