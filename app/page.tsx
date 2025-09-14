import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-8 flex flex-col justify-center items-center">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-serif font-semibold sm:text-xl text-[20px]">
          NEXT <br /> <span className="pl-4">STOP</span>
        </h1>
        <Link
          href="/login"
          className="sm:pl-3 pl-2  sm:pr-3 pr-2 sm:p-2 p-1 border sm:rounded-md rounded hover:bg-slate-100"
        >
          Log In
        </Link>
      </div>
      <div className="pt-12 pb-10 flex flex-col justify-center gap-2 items-center">
        <h1 className="sm:text-5xl text-4xl text-center font-stretch-expanded font-serif font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Your Ultimate Bus Management Solution.
        </h1>
        <h2 className="text-center p-2 sm:text-xl text-sm font-sans">
          From real-time tracking to automated maintenance alerts, our platform
          gives you complete control over your fleet, drivers, and routes.
        </h2>
        <Link href="/dashboard">
          <button className="pl-4 mt-4 pr-4 p-2 bg-gradient-to-br from-amber-400 to-red-500 font-bold rounded-lg text-white">
            Get A Free Demo
          </button>
        </Link>
      </div>
      <div className="border p-2 bg-slate-100 w-fit rounded-md shadow-2xl border-gray-50 flex justify-center items-center">
        <Image
          src="/dashboard.png"
          width={800}
          height={800}
          alt="dashboard Image"
        />
      </div>
      <div className="pt-18 flex sm:flex-row flex-col max-w-5xl w-full justify-around">
        <div className="p-4 text-center">
          <h1 className="text-xl font-semibold font-sans">Bus Maintenance</h1>
          <h2 className="text-sm">Maintain Bus Maintenance Charges</h2>
        </div>
        <span className="text-center h-full pt-8">|</span>
        <div className="p-4 text-center">
          <h1 className="text-xl font-semibold text-center font-sans">
            Monthly Revenue
          </h1>
          <h2 className="text-sm ">Download Receipt of Revenue</h2>
        </div>

        <span className="text-center h-full pt-8">|</span>
        <div className="p-4 text-center">
          <h1 className="text-xl font-semibold text-center font-sans">
            Payment Management
          </h1>
          <h2 className="text-sm">
            Store Details of all staff, and manage Payment
          </h2>
        </div>
      </div>
      <div className="pt-20 w-full flex flex-col max-w-7xl justify-center items-center">
        <h1 className="text-2xl font-serif font-semibold">Pricing</h1>
        <div className="w-full max-w-5xl flex sm:flex-row flex-col gap-6 pt-8 text-center justify-around items-end">
          <div className="p-6 border border-gray-200 shadow-xl rounded-xl flex flex-col justify-between w-full min-h-[25rem]">
            <div>
              <h1 className="text-2xl font-bold p-5">Starter</h1>
              <h2 className="text-4xl font-extrabold text-blue-600">
                Rs. 600
                <span className="text-xl font-normal text-gray-500">/mo</span>
              </h2>
              <h3 className="w-full text-center mt-2 text-gray-600">
                Good for small fleets
              </h3>
              <ul className="mt-6 text-left space-y-2 text-sm text-gray-700">
                <li>Basic real-time tracking</li>
                <li>Driver and vehicle management</li>
                <li>Basic payment management</li>
                <li>Maintenance scheduling and alerts</li>
                <li>Standard customer support</li>
              </ul>
            </div>
            <button className="mt-8 py-3 px-6 bg-slate-100 text-black border border-gray-300 rounded-md hover:bg-slate-200 transition-all">
              Purchase
            </button>
          </div>

          <div
            className="p-6 border border-gray-200 shadow-2xl rounded-xl flex flex-col justify-between w-full min-h-[30rem]
      bg-gradient-to-br from-blue-300 to-red-200 transform scale-105"
          >
            <div>
              <h1 className="text-2xl font-bold p-5 text-white">
                Professional
              </h1>
              <h2 className="text-4xl font-extrabold text-white">
                Rs. 1500
                <span className="text-xl font-normal text-slate-100">/mo</span>
              </h2>
              <h3 className="w-full text-center mt-2 text-white font-medium">
                Best for growing businesses
              </h3>
              <ul className="mt-6 text-left space-y-2 text-sm text-gray-800">
                <li className="font-semibold">Everything in Starter, plus:</li>
                <li>Advanced route optimization</li>
                <li>Automated maintenance alerts</li>
                <li>Monthly revenue reports and analytics</li>
                <li>Fuel consumption monitoring</li>
                <li>Driver behavior scoring</li>
                <li>Priority customer support</li>
              </ul>
            </div>
            <button className="mt-8 py-3 px-6 bg-amber-600 text-white font-bold rounded-md hover:bg-amber-700 transition-all shadow-md">
              Purchase
            </button>
          </div>

          <div className="p-6 border border-gray-200 shadow-xl rounded-xl flex flex-col justify-between w-full min-h-[35rem]">
            <div>
              <h1 className="text-2xl font-bold p-5">Enterprise</h1>
              <h2 className="text-4xl font-extrabold text-blue-600">
                Rs. 2500
                <span className="text-xl font-normal text-gray-500">/mo</span>
              </h2>
              <h3 className="w-full text-center mt-2 text-gray-600">
                For large-scale operations
              </h3>
              <ul className="mt-6 text-left space-y-2 text-sm text-gray-700">
                <li className="font-semibold">
                  Everything in Professional, plus:
                </li>
                <li>Predictive maintenance and analytics</li>
                <li>
                  AI-powered route planning with **real-time traffic data**
                </li>
                <li>Automated regulatory compliance</li>
                <li>Dedicated account manager</li>
                <li>Full API and third-party integrations</li>
                <li>Customizable dashboards and reports</li>
                <li>Advanced geofencing and landmark management</li>
                <li>Dedicated cloud infrastructure for enhanced security</li>
                <li>24/7 premium support</li>
              </ul>
            </div>
            <button className="mt-8 py-3 px-6 bg-slate-100 text-black border border-gray-300 rounded-md hover:bg-slate-200 transition-all">
              Purchase
            </button>
          </div>
        </div>
      </div>
      <div className="p-20  mt-20 rounded-xl w-full  flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-serif font-bold">
          Ready to take control of your fleet?
        </h2>
        <p className="mt-4 text-lg">
          Sign up today and experience the difference.
        </p>
        <button className="mt-6 pl-6 pr-6 p-3 bg-gradient-to-br from-purple-600 to-indigo-500 font-bold rounded-lg text-white text-xl hover:shadow-lg">
          Get Started Now
        </button>
      </div>

      <footer className="mt-24 w-full border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <p>
              &copy; {new Date().getFullYear()} NEXT STOP. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">
              Privacy Policy
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-700">
              Terms of Service
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-700">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
