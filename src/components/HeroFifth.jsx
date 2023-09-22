import React from "react";
import cwokCasual from "../assets/images/cwokCasual.png";
import qmark from "../assets/images/qmark.png";
import qmark1 from "../assets/images/qmark1.png";
import qmark2 from "../assets/images/qmark2.png";
import FAQ from "./FAQ";

const HeroFifth = () => {
  return (
    <div className="p-8 border-b border-gray-400 relative bg-transparent">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:mt-10 text-white md:p-14 order-last md:order-first">
          <div className="text-left">
            <FAQ />
          </div>
        </div>

        <div className="md:w-1/2 order-last md:order-first md:my-40">
          <div className=" justify-around mr-56 hidden md:flex">
            <img src={qmark1} alt="/" className="" />
            <img src={qmark} alt="/" className="-mt-24" />
            <img src={qmark2} alt="/" className="" />
          </div>

              {/* Mobile */}
          <div className="justify-around mt-28 md:hidden flex">
            <img src={qmark1} alt="/" className="" />
            <img src={qmark} alt="/" className="-mt-24" />
            <img src={qmark2} alt="/" className="" />
          </div>
          <img src={cwokCasual} alt="/" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroFifth;
