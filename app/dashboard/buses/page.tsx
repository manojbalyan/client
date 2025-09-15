import React from "react";
import Link from "next/link";
const Buses = [
  {
    number: "2312OD",
    company: "Mahindra",
    revenue: "234000",
    maintanance: "8000",
    status: true,
  },
  {
    number: "2312OD",
    company: "Mahindra",
    revenue: "234000",
    maintanance: "8000",
    status: true,
  },
  {
    number: "2312OD",
    company: "Mahindra",
    revenue: "234000",
    maintanance: "8000",
    status: true,
  },
  {
    number: "2312OD",
    company: "Mahindra",
    revenue: "234000",
    maintanance: "8000",
    status: true,
  },
];

function page() {
  return (
    <div className="w-full flex dark:bg-[#3E3E3E] h-full flex-col gap-3">
      <div className="w-full p-8 flex justify-between">
        <h1 className="text-xl font-semibold font-serif">BUSES</h1>
        <input
          type="text"
          className="pl-3 pr-3 p-2 w-100  border font-mono border-gray-200 text-end rounded-md shadow-sm "
          placeholder="Search Bus"
        />
      </div>
      <div className="p-12  w-full">
        <div className="border rounded-md pl-6 border-slate-300 dark:text-black bg-slate-100 shadow-sm pr-6 p-3 flex justify-between">
          <h1 className="font-semibold">Bus Number</h1>
          <h1 className="font-semibold">Company</h1>
          <h1 className="font-semibold">Revenue</h1>
          <h1 className="font-semibold">Maintanance</h1>
          <h1 className="font-semibold">Status</h1>
          <h1 className="font-semibold">Go</h1>
        </div>
        <div className="flex pt-3 flex-col  gap-2">
          {Buses.map((value, index) => (
            <div
              key={index}
              className={` ${
                index % 2 != 0 ? "bg-slate-100 dark:text-black" : "bg-slate-000"
              } border rounded-md pl-6 border-slate-300  shadow-sm pr-6 p-2 flex items-center justify-between`}
            >
              <h1 className="font-mono">{value.number}</h1>
              <h1 className="font-mono">{value.company}</h1>
              <h1 className="font-medium">Rs. {value.revenue} /-</h1>
              <h1 className="font-mono">{value.maintanance}</h1>
              <h1
                className={`${
                  value.status ? "bg-green-400" : "bg-red-200"
                } pl-3 pr-3 p-2 border rounded-md border-gray-100`}
              >
                {value.status ? "active" : "maintanance"}
              </h1>
              <Link
                href={`/dashboard/buses/${value.number}`}
                className="bg-blue-400 hover:bg-blue-300 hover:text-black pl-4 pr-4 p-2 rounded-lg font-bold text-white
              "
              >
                Go
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
