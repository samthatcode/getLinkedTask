import React from "react";
import cup from "../assets/images/cup.png";
import goldMedal from "../assets/images/goldMedal.png";
import silverMedal from "../assets/images/silverMedal.png";
import bronzeMedal from "../assets/images/bronzeMedal.png";

const HeroSix = () => {
  return (
    <div className="px-8 border-b border-gray-400 bg-[#110b20] with-background">
      <div className="text-center md:text-middle my-5 md:mr-30">
        <h1 className="md:text-xl text-lg font-bold text-white">
          Prizes and {""} <br />
          <span className="text-purple">Rewards</span>
        </h1>
        <p className="text-white md:ml-[420px] ">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 text-white md:my-4 my-20">
          <img src={cup} alt="/" className="w-full" />
        </div>

        <div className="md:w-1/2 text-white md:my-4 my-10 ">
          <div className="flex justify-center items-center mx-4">
            <div className="relative">
              <img
                src={silverMedal}
                alt="/"
                className="absolute md:top-[40px] md:right-5 top-[-55px] right-3 md:w-36 md:h-36 w-24 h-24"
              />
              <div className="p-6 md:h-48 h-40 md:m-8 m-2 text-center border border-pink rounded md:mt-40 bg-purple bg-opacity-10 ">
                <div className="mt-10"></div>
                <p className="text-base font-medium">2nd</p>
                <p className="">Runner</p>
                <p className="text-purple text-sm">N300,000</p>
              </div>
            </div>
            <div className="relative">
              <img
                src={goldMedal}
                alt="/"
                className="absolute md:top-[35px] md:-mt-7 md:w-48 md:h-48 w-28 h-28 top-[-55px] md:right-0 right-2"
              />

              <div className="p-6 md:h-48 h-40 md:m-8 m-2 text-center border border-pink rounded md:mt-40 bg-deepPurple bg-opacity-10 ">
                <div className="mt-10"></div>
                <p className="text-base font-medium">1st</p>
                <p className="">Runner</p>
                <p className="text-deepPurple text-sm">N400,000</p>
              </div>
            </div>
            <div className="relative">
              <img
                src={bronzeMedal}
                alt="/"
                className="absolute md:top-[40px] md:right-1 md:w-36 md:h-36 top-[-55px] right-1 w-24 h-24"
              />
              <div className="p-4 md:h-[200px] h-40 md:m-8 m-2 text-center border border-pink rounded md:mt-40 bg-purple bg-opacity-10 ">
                <div className="mt-10"></div>
                <p className="text-base font-medium">3rd</p>
                <p className="">Runner</p>
                <p className="text-purple text-sm">N150, 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSix;
