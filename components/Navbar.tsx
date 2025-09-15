"use client";

import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter((segment) => segment);

  return (
    <div className="w-full bg-blue-100 p-3 border-l dark:text-black">
      <div className="pl-5 text-sm flex items-center">
        <span className="capitalize">{pathSegments[0] || "Home"}</span>
        {pathSegments.slice(1).map((segment, index) => (
          <React.Fragment key={index}>
            <span className="mx-2 text-gray-400">{">"}</span>
            <span className="capitalize">{segment.replace(/-/g, " ")}</span>
          </React.Fragment>
        ))}

        {pathSegments.length === 0 && (
          <h1 className="pl-5 text-sm">Dashboard {">"}</h1>
        )}
      </div>
    </div>
  );
}

export default Navbar;
