import React from "react";
import VectorLock from "../assets/images/VectorLock.png";
import PersonLock from "../assets/images/PersonLock.png";

const HeroEight = () => {
  return (
    <div className="p-8 bg-transparent">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:my-5 text-white md:p-14">
          <div className="text-center md:text-left">
            <h1 className="md:text-2xl text-lg font-bold">
              Privacy Policy and {""} <br />
              <span className="text-purple">Terms</span>
            </h1>
            <p className="text-sm md:mr-5 mt-3">
              Last updated on September 12, 2023
            </p>
            <p className="text-sm md:mr-5 mt-3">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>

          <div className="border border-pink rounded my-20 p-10">
            <div className="text-center md:text-left">
              <p className="">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <p className="text-pink my-4">Licensing Policy</p>
              <p className="my-4">Here are terms of our Standard License:</p>

              <div className="flex ">
                <div className="rounded-full w-2 h-2 text-blue mr-5">00</div>
                <p className="">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="flex ">
                <div className="rounded-full w-2 h-2 text-blue mr-5">00</div>
                <p className="">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <div className="flex justify-center">
                <button className="inline-block text-sm text-white primary py-2 px-4 rounded my-4 text-center">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 order-last relative">
          <img src={VectorLock} alt="/" className="md:w-[450px]" />
          <img
            src={PersonLock}
            alt="/"
            className="absolute top-40 right-6 md:w-[520px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroEight;
