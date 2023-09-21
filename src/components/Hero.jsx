import React from "react";
import { Link } from "react-router-dom";
import heroMan from "../assets/images/heroMan.png";
import behindHeroMan from "../assets/images/behindHeroMan.png";
import pinkUnder from "../assets/images/pinkUnder.png";
import fire from "../assets/images/fire.png";
import chain from "../assets/images/chain.png";

const Hero = () => {
  return (
    <div className="px-8 border-b border-gray-400 relative bg-transparent">
      <div className="flex justify-center md:justify-end my-4">
        <h1 className="capitalize text-white italic text-xl font-bold">
          igniting a revolution in HR innovation
        </h1>
        <img src={pinkUnder} alt="/" className="w-36 my-4 absolute top-3" />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:p-8 text-white">
          <div className="flex justify-center items-center">
            <h1 className="md:text-4xl text-lg font-bold">
              getlinked Tech Hackathon <span className="text-purple">1.0</span>
            </h1>
            <span>
              <img src={chain} alt="/" className="w-10 h-10" />
            </span>
            <span>
              <img src={fire} alt="/" className="w-10 h-10 ml-2" />
            </span>
          </div>
          <p className="my-5">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link
            to="/register"
            className="inline-block text-sm text-white primary py-2 px-4 rounded"
          >
            Register
          </Link>
          <div className="flex space-x-2 text-lg my-12">
            <div className="text-white p-1 rounded">
              <span className="text-3xl">00</span>
              <span className="text-[10px]">H</span>
            </div>
            <div className="text-white p-1 rounded">
              <span className="text-3xl">00</span>
              <span className="text-[10px]">M</span>
            </div>
            <div className="text-white p-1 rounded">
              <span className="text-3xl">00</span>
              <span className="text-[10px]">S</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">        
          <img src={heroMan} alt="/" className="w-full" />
          <img
            src={behindHeroMan}
            alt="/"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
