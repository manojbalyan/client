import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  w-screen">
      <Sidebar />
      <div className="flex max-h-screen h-screen w-full  flex-col justify-start">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
