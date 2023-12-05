// import React from 'react'

import { Candidate } from "../components/candidate";
import { Partners } from "../components/partners";

export const Home = () => {
  let time = "seconds";
  return (
    <div className="mt-20 text-center text-white h-screen">
      <h1 className="text-5xl font-bold">
        On board your global
        <br />
        team in
        <span className="pl-1 text-purple-500">{time}</span>
      </h1>
      <p className="my-5">
        We leverage AI to source, vet, match and pay your team, so you dont have
        to.
      </p>

      <div className="my-10 flex text-sm gap-5 justify-center text-white">
        <button className="p-2 bg-purple-600 rounded font-semibold">
          Hire a team
        </button>
        <button className="">Apply to work</button>
      </div>

      <Candidate />
      <Partners />
    </div>
  );
};
