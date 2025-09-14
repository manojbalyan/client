// components/Sidebar.jsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-blue-100 gap-8 justify-start pt-10 p-4">
      <Link href="/" className="text-center text-xl font-serif font-medium">
        Next
        <br />
        <span className="pl-6">Stop</span>
      </Link>

      <div className="flex flex-col pt-10 gap-8 p-4">
        <Link
          href="/dashboard"
          className={`pl-6 pr-6 p-2 rounded-md hover:border-black border border-blue-100 ${
            pathname === "/dashboard" ? "bg-blue-200" : "hover:bg-blue-100"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/buses"
          className={`pl-6 pr-6 p-2 rounded-md hover:border-black border border-blue-100 ${
            pathname === "/dashboard/buses"
              ? "bg-blue-200"
              : "hover:bg-blue-100"
          }`}
        >
          Buses
        </Link>
        <Link
          href="/dashboard/driver"
          className={`pl-6 pr-6 p-2 rounded-md hover:border-black border border-blue-100 ${
            pathname === "/dashboard/driver"
              ? "bg-blue-200"
              : "hover:bg-blue-100"
          }`}
        >
          Drivers
        </Link>
        <Link
          href="/dashboard/conductor"
          className={`pl-6 pr-6 p-2 rounded-md hover:border-black border border-blue-100 ${
            pathname === "/dashboard/conductor"
              ? "bg-blue-200"
              : "hover:bg-blue-100"
          }`}
        >
          Conductors
        </Link>
      </div>
    </div>
  );
}
