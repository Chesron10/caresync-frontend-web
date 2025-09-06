import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="w-full h-screen">
    <section className="w-[60%] h-screen bg-[url('/images/auth-image.svg')] bg-cover "></section>
    <section className="absolute top-0 right-0 h-screen w-[50%]">
      {children}
    </section>
  </main>
);

export default Layout;
