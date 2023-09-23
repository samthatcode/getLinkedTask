import React from "react";
// import { Link } from "react-router-dom";
import heroFourth from "../assets/images/heroFourth.png";
import starPurple from "../assets/images/starPurple.png";
import stars from "../assets/images/stars.png";

const HeroFourth = () => {
  return (
    <div className="p-8 border-b border-gray-400 relative bg-transparent with-background">
      <img src={starPurple} alt="/" className="ml-[135px]" />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:my-20 md:p-14 relative">
          <div className="relative">
            <p className="gradient-text absolute top-[-39px] left-4 z-0"></p>
            <img src={heroFourth} alt="/" className="w-80 h-80 relative z-10" />
          </div>
          <img src={stars} alt="/" className="md:ml-[500px] " />
        </div>

        <div className="md:w-1/2 text-white my-4">
          <div className="text-center md:text-left">
            <h1 className="md:text-2xl text-lg font-bold">
              Judging Criteria <br />
              <span className="text-purple">Key attributes</span>
            </h1>
            <p className="text-sm md:mr-5 my-3">
              <span className="text-pink">Innovation and Creativity:</span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="text-sm md:mr-5 my-3">
              <span className="text-pink"> Functionality:</span> Assess how well
              the solution works. Does it perform its intended functions
              effectively and without major issues? Judges would consider the
              completeness and robustness of the solution.
            </p>
            <p className="text-sm md:mr-5 my-3">
              <span className="text-pink">Impact and Relevance:</span> Determine
              the potential impact of the solution in the real world. Does it
              address a significant problem, and is it relevant to the target
              audience? Judges would assess the potential social, economic, or
              environmental benefits.
            </p>
            <p className="text-sm md:mr-5 my-3">
              <span className="text-pink">Technical Complexity:</span> Evaluate
              the technical sophistication of the solution. Judges would
              consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="text-sm md:mr-5 my-3">
              <span className="text-pink">Adherence to Hackathon Rules:</span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
            <button className="inline-block text-sm text-white primary my-4 py-2 px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFourth;
