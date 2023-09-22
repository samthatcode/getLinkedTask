import React from "react";
import { Link } from "react-router-dom";
import heroMan from "../assets/images/heroMan.png";
import behindHeroMan from "../assets/images/behindHeroMan.png";
import pinkUnder from "../assets/images/pinkUnder.png";
import fire from "../assets/images/fire.png";
import chain from "../assets/images/chain.png";
import bulb from "../assets/images/bulb.png";
import starsmall from "../assets/images/starsmall.png";
import stars from "../assets/images/stars.png";

const Hero = () => {
  return (
    <div className="px-8 border-b border-gray-400 relative bg-transparent with-background">
      <div className="flex justify-center md:justify-end my-8 ">
      <img src={stars} alt="/" className="md:mr-[800px] hidden md:block" />
      
        <h1 className="capitalize text-white italic text-sm md:text-xl font-bold ">
          igniting a revolution in HR innovation
        </h1>
        <img src={pinkUnder} alt="/" className="w-36 my-4 absolute top-3" />
      </div>
      <img src={starsmall} alt="/" className="ml-[90px] md:hidden block" />

      <div className="flex flex-col md:flex-row md:text-left text-center">
        <div className="md:w-1/2 md:p-14 text-white">
          <img
            src={bulb}
            alt="/"
            className="md:w-10 md:h-10 md:ml-56 md:block hidden"
          />

          <div className="md:flex justify-center items-center hidden">
            <h1 className="md:text-4xl text-lg font-bold">
              getlinked Tech Hackathon <span className="text-purple">1.0</span>
            </h1>
            <div className="flex justify-center items-center mt-14 md:mt-10 md:mr-40 mr-40">
              <div>
                <img src={chain} alt="/" className="md:w-20 md:h-10 w-10 h-5" />
              </div>
              <div>
                <img
                  src={fire}
                  alt="/"
                  className="md:w-20 md:h-10 w-10 h-5 ml-2"
                />
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-16 md:hidden">
          <img src={bulb} alt="/" className="w-5 h-5 top-[-18px] right-[173px] md:hidden absolute" />
            <h1 className="md:text-4xl text-xl font-bold">
              getlinked Tech Hackathon <span className="text-purple">1.0</span>
            </h1>
            <div className="flex justify-center items-center mt-5 mr-20">
              <div>
                <img src={chain} alt="/" className=" w-10 h-5" />
              </div>
              <div>
                <img src={fire} alt="/" className=" w-10 h-5 ml-2" />
              </div>
            </div>
          </div>

          <p className="my-5">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link
            to="/register"
            className="inline-block text-sm text-white primary py-2 px-7 rounded"
          >
            Register
          </Link>
          <div className="space-x-2 text-lg my-12 hidden md:flex">
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
          <div className="space-x-2 text-lg my-12 md:hidden flex ml-20">
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
      <img src={starsmall} alt="/" className="md:ml-[400px] w-5 h-5 " />

        </div>

        <div className="md:w-1/2 relative">
          <img src={heroMan} alt="/" className="w-full with-background" />
          <img
            src={behindHeroMan}
            alt="/"
            className="absolute top-0 left-0 w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
