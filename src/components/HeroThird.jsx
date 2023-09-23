import React from "react";
import heroThird from "../assets/images/heroThird.png";
import starsmall from "../assets/images/starsmall.png";
import stars from "../assets/images/stars.png";

const HeroThird = () => {
  return (
    <div className="p-8 border-b border-gray-400 relative bg-transparent with-background">
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:mt-10 text-white md:p-14">
          <img src={starsmall} alt="/" className="md:ml-[400px] w-5 h-5" />

          <div className="text-center md:text-left">
            <h1 className="md:text-4xl text-lg font-bold">
              Rules and {""} <br />
              <span className="text-purple">Guildlines</span>
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
            <img src={stars} alt="/" className="md:ml-[550px] w-5 h-5" />
          </div>
        </div>

        <div className="md:w-1/2 order-first md:order-last ">
          <img src={heroThird} alt="/" className="w h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroThird;
