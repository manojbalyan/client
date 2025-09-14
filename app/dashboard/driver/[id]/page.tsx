import React from "react";
import Image from "next/image";

const drivers = {
  name: "Anshu Bhable",
  adhar_no: "2300 4200 2020",
  address: "Near Hostel 9, Manit Bhoapl, pin - 430600",
  licence_id: "1202192",
  phone_no: "+918292018292",
  current_bus_no: "23300DL",
};

const salarypaid = [
  {
    Date: "21 : 01 : 2025",
    Paid: 5000,
  },
  {
    Date: "21 : 02 : 2025",
    Paid: 5000,
  },
  {
    Date: "21 : 03 : 2025",
    Paid: 5000,
  },
  {
    Date: "21 : 04 : 2025",
    Paid: 5000,
  },
  {
    Date: "21 : 05 : 2025",
    Paid: 5000,
  },
];
export default function page() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-full flex sm:flex-row flex-col justify-around p-10 items-center">
        <div className="border p-4 rounded-md border-gray-200 bg-slate-100 shadow-md">
          <Image
            src="/driver.png"
            alt="driver image"
            width={300}
            height={400}
          />
        </div>
        <div className=" border p-6 bg-slate-100 gap-3 h-84  flex flex-col justify-start border-gray-200 min-w-88 shadow-md rounded-md">
          <h1 className="font-mono pt-4">Name : {drivers.name}</h1>
          <h1 className="font-mono">Adhar Number : {drivers.adhar_no}</h1>
          <h1 className="font-mono">address : {drivers.address}</h1>
          <h1 className="font-mono">Licence ID : {drivers.licence_id}</h1>
          <h1 className="font-mono">Phone Number : {drivers.phone_no}</h1>
          <h1 className="font-mono">Current Bus : {drivers.current_bus_no}</h1>
        </div>
      </div>
      <div className="p-12 max-w-5xl w-full">
        <div className="border rounded-md pl-6 border-slate-300 bg-slate-100 shadow-sm pr-6 p-3 flex justify-between">
          <h1 className="font-semibold">Date</h1>
          <h1 className="font-semibold">Paid</h1>
        </div>
        <div className="flex pt-3 flex-col gap-2">
          {salarypaid.map((value, index) => (
            <div
              key={index}
              className={` ${
                index % 2 != 0 ? "bg-slate-100" : "bg-slate-000"
              } border rounded-md pl-6 border-slate-300  shadow-sm pr-6 p-3 flex justify-between`}
            >
              <h1 className="font-mono">{value.Date}</h1>
              <h1 className="font-medium">Rs. {value.Paid} /-</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
