import React from "react";
import Link from "next/link";
const drivers = [
  {
    name: "Sidaarth",
    licence_no: "23430223",
    pending_amount: "1000",
    status: true,
  },
  {
    name: "Sidaarth",
    licence_no: "23430223",
    pending_amount: "1000",
    status: false,
  },
  {
    name: "Sidaarth",
    licence_no: "23430223",
    pending_amount: "1000",
    status: true,
  },
  {
    name: "Sidaarth",
    licence_no: "23430223",
    pending_amount: "1000",
    status: true,
  },
  {
    name: "Sidaarth",
    licence_no: "23430223",
    pending_amount: "1000",
    status: true,
  },
];
function page() {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full p-8 flex justify-between">
        <h1 className="text-xl font-semibold font-serif">CONDUCTORS</h1>
        <input
          type="text"
          className="pl-3 pr-3 p-2 w-100  border font-mono border-gray-200 text-end rounded-md shadow-sm "
          placeholder="Search Bus"
        />
      </div>
      <div className="p-12  w-full">
        <div className="border rounded-md pl-6 border-slate-300 bg-slate-100 shadow-sm pr-6 p-3 flex justify-between">
          <h1 className="font-semibold">Name</h1>
          <h1 className="font-semibold">Licence Number</h1>
          <h1 className="font-semibold">Pending Amount</h1>
          <h1 className="font-semibold">Status</h1>
          <h1 className="font-semibold">Details</h1>
        </div>
        <div className="flex pt-3 flex-col  gap-2">
          {drivers.map((value, index) => (
            <div
              key={index}
              className={` ${
                index % 2 != 0 ? "bg-slate-100" : "bg-slate-000"
              } border rounded-md pl-6 border-slate-300  shadow-sm pr-6 p-2 flex items-center justify-between`}
            >
              <h1 className="font-mono">{value.name}</h1>
              <h1 className="font-mono">{value.licence_no}</h1>
              <h1 className="font-medium">Rs. {value.pending_amount} /-</h1>
              <h1
                className={`${
                  value.status ? "bg-green-400" : "bg-red-200"
                } pl-3 pr-3 p-2 border rounded-md border-gray-100`}
              >
                {value.status ? "working" : "absent"}
              </h1>
              <Link
                href={`/dashboard/conductor/${value.licence_no}`}
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
