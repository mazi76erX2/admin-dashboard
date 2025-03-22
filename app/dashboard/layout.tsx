import React from "react";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex">
      <div className="bg-(--bgSoft) p-20">
        <Sidebar />
      </div>
      <div className="p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
