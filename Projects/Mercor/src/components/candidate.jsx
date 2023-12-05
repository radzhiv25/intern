// import React from 'react'

export const Candidate = () => {
  return (
    <div className="mx-auto w-3/4 bg-white flex border-none rounded-lg">
      <div className="p-3 text-gray-500 border-r">
        <img src="https://mercor.io/logo.png" alt="" className="h-5 w-auto" />
        <ul className="mt-5 text-left space-y-5">
          <li className="bg-gray-100 p-1 rounded w-max">
            <span></span>
            <p>Marcus</p>
          </li>
          <li>
            <span></span>
            <p>Contractors</p>
          </li>
          <li>
            <span></span>
            <p>Payments</p>
          </li>
        </ul>
        <p className="text-left mt-auto">Settings</p>
      </div>
      <div className="w-auto">
        <nav className=" text-right border-b p-2 flex">
          <img src="" alt="" className="ml-auto border"/>
          <p className="px-2 flex gap-3 text-sm text-gray-500"><span>RK</span>Rajeev Krishna</p>
        </nav>
        <main className=" mx-auto p-40">
            <h3 className="text-purple-500">Hire Instantly</h3>
            <h1 className="text-black font-semibold text-3xl">Leverage AI to assess global talent</h1>
            <p className="my-2 text-gray-700 leading-5">Our AI analyzes resumes, evaluates GitHubs, and even conducts technical interviews of hundred of thousands of candidates, finding the perfect fit for your business.</p>
            <div className="p-2 border rounded border-t-2 border-t-purple-700 flex justify-between">
                <p className="text-gray-500">How can I help build your team?</p>
                <img src="" alt="" />
            </div>
        </main>
        <p className=" text-black border rounded-full w-10 h-10 p-2 m-2 ml-auto">?</p>
      </div>
    </div>
  );
};
