import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="w-full h-screen">
    {children}
    <section></section>
  </main>
);

export default Layout;
