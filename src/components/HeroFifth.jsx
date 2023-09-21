import React from "react";
import cwokCasual from "../assets/images/cwokCasual.png";
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
          <img src={cwokCasual} alt="/" className="w-[800px] h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroFifth;
