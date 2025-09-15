import React from "react";

const bus = {
  active: 43,
  maintenance: 7,
};

const driver = {
  active: 95,
  absent: 32,
};

const conductors = {
  active: 100,
  absent: 9,
};

const busPercentage = (bus.active / (bus.active + bus.maintenance)) * 100;
const driverPercentage =
  (driver.active / (driver.active + driver.absent)) * 100;
const conductorPercentage =
  (conductors.active / (conductors.active + conductors.absent)) * 100;

export default function Page() {
  return (
    <div className="flex flex-wrap dark:bg-[#3E3E3E] justify-around p-8 gap-8">
      <div className="flex-grow p-6 pt-4 max-w-4xl">
        <div className="w-full min-h-88 p-4 border rounded-xl border-gray-200 shadow-lg overflow-hidden flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4010.7663019085107!2d77.40623377531935!3d23.207168679044926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d3e4af9601%3A0x12bdd9a8fcdd4fb4!2sHostel%20no%209%20Manit%20Bhopal!5e1!3m2!1sen!2sin!4v1757759384539!5m2!1sen!2sin"
            width="740"
            height="450"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            className="rounded-lg"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-wrap justify-around pt-12 gap-8">
          <div className="flex flex-col p-6 gap-4 border min-w-80 rounded-lg dark:bg-[#3E3E3E] bg-white shadow-lg border-gray-200 justify-around items-center">
            <div className="flex w-full justify-between items-center">
              <h1 className="font-semibold font-mono">Revenue</h1>
              <select className="border-gray-300 rounded-md">
                <option value="today">Today</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div>
              <h1 className="text-2xl text-green-500 font-bold">₹32,000</h1>
            </div>
            <div className="w-full flex justify-between">
              <button className="px-3 py-2 rounded-lg hover:bg-blue-600 bg-blue-500 text-sm text-white">
                Receipt
              </button>
              <button className="px-3 py-2 text-sm border-slate-300 rounded-lg shadow-sm hover:bg-blue-100 border bg-slate-50 text-black">
                Add Revenue
              </button>
            </div>
          </div>

          <div className="flex flex-col p-6 gap-4 border min-w-80 rounded-lg dark:bg-[#3E3E3E]  bg-white shadow-lg border-gray-200 justify-around items-center">
            <div className="flex w-full justify-between items-center">
              <h1 className="font-semibold font-mono">Maintenance</h1>
              <select className="border-gray-300 rounded-md">
                <option value="today">Today</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>
            <div>
              <h1 className="text-2xl text-red-500 font-bold">₹3,000</h1>
            </div>
            <div className="w-full flex justify-between">
              <button className="px-3 py-2 rounded-lg hover:bg-blue-600 bg-blue-500 text-sm text-white">
                Receipt
              </button>
              <button className="px-3 py-2 text-sm border-slate-300 rounded-lg shadow-sm hover:bg-blue-100 border bg-slate-50 text-black">
                Add Maintenance
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 pt-4 w-full md:w-80">
        <div className="p-4 flex flex-col gap-4 border border-gray-200 shadow-lg rounded-md text-start w-full">
          <h1 className="w-full text-center font-mono font-semibold">BUS</h1>
          <div className="w-full h-8 rounded-2xl border bg-gray-200">
            <div
              className="rounded-2xl bg-green-500 h-full"
              style={{ width: `${busPercentage}%` }}
            ></div>
          </div>
          <h1 className="pl-4">Active: {bus.active}</h1>
          <h1 className="pl-4">Maintenance: {bus.maintenance}</h1>
        </div>

        <div className="p-4 flex flex-col gap-4 border border-gray-200 shadow-lg rounded-md text-start w-full">
          <h1 className="w-full text-center font-mono font-semibold">
            Drivers
          </h1>
          <div className="w-full h-8 rounded-2xl border bg-gray-200">
            <div
              className="rounded-2xl bg-green-500 h-full"
              style={{ width: `${driverPercentage}%` }}
            ></div>
          </div>
          <h1 className="pl-4">Active: {driver.active}</h1>
          <h1 className="pl-4">Absent: {driver.absent}</h1>
        </div>

        <div className="p-4 flex flex-col gap-4 border border-gray-200 shadow-lg rounded-md text-start w-full">
          <h1 className="w-full text-center font-mono font-semibold">
            Conductors
          </h1>
          <div className="w-full h-8 rounded-2xl border bg-gray-200">
            <div
              className="rounded-2xl bg-green-500 h-full"
              style={{ width: `${conductorPercentage}%` }}
            ></div>
          </div>
          <h1 className="pl-4">Active: {conductors.active}</h1>
          <h1 className="pl-4">Absent: {conductors.absent}</h1>
        </div>
      </div>
    </div>
  );
}
