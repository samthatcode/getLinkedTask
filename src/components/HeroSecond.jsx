import React from "react";
// import { Link } from "react-router-dom";
import BigIdea from "../assets/images/BigIdea.png";
import arrow from "../assets/images/arrow.png";
import starPurple from "../assets/images/starPurple.png";
import starPink from "../assets/images/starPink.png";

const HeroSecond = () => {
  return (
    <div className="p-8 border-b border-gray-400 relative bg-transparent">
      <img
        src={starPink}
        alt="/"
        className="ml-[40px] absolute top-[200px] w-5 h-5"
      />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:p-14 relative">
          <img src={BigIdea} alt="/" className="w-80 h-80" />
          <img
            src={arrow}
            alt="/"
            className="w-10 h-10 ml-80 mt-[-22px] md:block hidden"
          />
          <img src={arrow} alt="/" className="w-10 h-10 ml-40 md:hidden " />
        </div>

        <div className="md:w-1/2 md:mt-32 text-white my-14">
          <div className="text-center md:text-left">

            <h1 className="md:text-4xl text-lg font-bold">
              Introduction to getlinked{" "}
              <span className="text-purple">techHackathon 1.0</span>
            </h1>
            <p className="text-sm md:mr-5 mt-3">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
            <img
              alt="/"
              src={starPurple}
              className="ml-[550px] absolute top-[180px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
