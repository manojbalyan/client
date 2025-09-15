"use client";
import React, { useState } from "react";
import Image from "next/image";

const bus23 = {
  number: "234022OD",
  company: "mahindra",
  revenue: "40000",
  maintanance: "2300",
  status: true,
  images: ["/bus.jpeg", "/bus2.jpeg"],
  routes: ["bhopal", "ketrich", "road43", "nagpur"],
};

function Page() {
  const [detailRoutes, setDetailsRoutes] = useState(false);
  return (
    <div className="w-full dark:bg-[#3E3E3E]  flex flex-col gap-4 p-8">
      <h1 className="text-xl font-semibold p-4">
        BUS NUMBER : <span className="font-sans">{bus23.number}</span>
      </h1>
      <div className="w-full flex gap-4 p-5 justify-start">
        {bus23.images.map((value, indexe) => (
          <Image
            className="border bg-slate-100 rounded-md"
            key={indexe}
            src={value}
            alt="bus Image"
            width={400}
            height={300}
          />
        ))}
      </div>
      <div className="w-full flex justify-start p-6 gap-4 items-center">
        <div className="flex flex-col gap-6 p-4 min-w-92 border rounded-lg bg-slate-100 justify-around items-center">
          <div className="flex w-full dark:text-black justify-between items-center">
            <h1 className="font-semibold font-mono">Revenue</h1>
            <select name="" id="">
              <option value="">Today</option>
              <option value="">Weak</option>
              <option value="">Month</option>
              <option value="">Yearly</option>
            </select>
          </div>
          <div className="">
            <h1 className="text-2xl text-green-500 font-bold">23000</h1>
          </div>
          <div className="w-full flex justify-between items-center">
            <button className="pl-3 pr-3 p-2 rounded-lg bg-blue-500 text-sm font-thin text-white">
              Receipt
            </button>
            <button className="pl-3 pr-3 p-2 text-sm border-slate-300 rounded-lg shadow-sm hover:bg-blue-100 border bg-slate-50 text-black">
              Add Revenue
            </button>
          </div>
        </div>
        <div className="flex flex-col p-6 gap-4 border min-w-92 rounded-lg dark:text-black bg-slate-100 justify-around items-center">
          <div className="flex w-full justify-between items-center">
            <h1 className="font-semibold font-mono">Maintanance</h1>
            <select name="" id="">
              <option value="">Today</option>
              <option value="">Weak</option>
              <option value="">Month</option>
              <option value="">Yearly</option>
            </select>
          </div>
          <div className="">
            <h1 className="text-2xl text-red-500 font-bold">3000</h1>
          </div>
          <div className="w-full flex justify-between">
            <button className="pl-3 pr-3 p-2 rounded-lg hover:bg-blue-600  bg-blue-500 text-sm font-thin text-white">
              Receipt
            </button>
            <button className="pl-3 pr-3 p-2 text-sm border-slate-300 rounded-lg shadow-sm hover:bg-blue-100 border bg-slate-50 text-black">
              Add Revenue
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 border flex flex-col gap-4 dark:text-black border-gray-200  max-w-5xl rounded-lg">
        <h1 className="text-xl font-semibold dark:text-white">Routes</h1>
        <div className="flex justify-around border p-2 bg-slate-100 rounded-md items-center">
          <h1>Source : {bus23.routes[0]}</h1>
          <h1>Destination : {bus23.routes[bus23.routes.length - 1]}</h1>
          <button
            onClick={() => setDetailsRoutes((p) => !p)}
            className="pl-3 pr-3 p-2 border rounded-md"
          >
            Detail Route
          </button>
        </div>
        <div className="flex flex-col w-full gap-2">
          {detailRoutes &&
            bus23.routes.map((value, index) => (
              <div
                key={index}
                className="border bg-slate-100 pl-4 pr-4 p-2 rounded-md"
              >
                <h1>Bus Station : {value}</h1>
                {/* <h1>Approax Time : {}</h1> */}
              </div>
            ))}
        </div>
      </div>
      {/* <div className="flex justify-around items-center">
        <div className="flex flex-col gap-2 ">
          <Image
            src="/driver.png"
            alt="driver image"
            width={100}
            height={100}
            className="rounded-b-full p-2 bg-slate-100"
          />
          <h1 className="text-center text-xl">Driver</h1>
        </div>
        <div className="flex flex-col gap-2 ">
          <Image
            src="/driver.png"
            alt="driver image"
            width={100}
            height={100}
            className="rounded-b-full p-2 bg-slate-100"
          />
          <h1 className="text-center text-xl">Contractor</h1>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default Page;
