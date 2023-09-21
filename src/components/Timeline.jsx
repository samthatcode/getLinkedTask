import React from "react";

const Timeline = () => {
  return (
    <div className="px-8 border-b border-gray-400 bg-transparent">
      <div className="flex flex-col items-center text-center my-4">
        <h1 className="capitalize text-white text-center text-xl font-bold">
          timeline
        </h1>
        <p className="text-white">
          Here is the breakdown of the time <br /> we anticipate using for the
          upcoming event.
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap md:flex-col md:items-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center my-10 mx-30">
            <div className="text-right md:w-1/2">
              <p className=" text-purple">Hackathon Announcement</p>
              <div className="text-white">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </div>
            </div>
            <div className="relative">
              <div className="milestone-line bg-purple"></div>
              <div className="milestone-circle bg-purple absolute right-0 left-14 mt-1">
                1
              </div>
            </div>
            <div className="font-bold text-lg text-purple text-left">
              November 18, 2023
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ml-36">
          <div className="flex items-center my-10 mx-30">
            <div className="font-bold text-lg text-purple text-right md:w-1/2">
              November 18, 2023
            </div>
            <div className="relative">
              <div className="milestone-line bg-purple"></div>
              <div className="milestone-circle bg-purple absolute right-0 left-14 mt-1">
                2
              </div>
            </div>
            <div className="text-left md:w-1/2">
              <p className=" text-purple">Teams Registration begins</p>
              <div className="text-white">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center my-10 mx-30">
            <div className="text-right md:w-1/2">
              <p className=" text-purple">Teams Registration ends</p>
              <div className="text-white">
                Interested Participants are no longer Allowed to register
              </div>
            </div>
            <div className="relative">
              <div className="milestone-line bg-purple"></div>
              <div className="milestone-circle bg-purple absolute right-0 left-14 mt-1">
                3
              </div>
            </div>
            <div className="font-bold text-lg text-purple text-left">
              November 18, 2023
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ml-36">
          <div className="flex items-center my-10 mx-30">
            <div className="font-bold text-lg text-purple text-right md:w-1/2">
              November 18, 2023
            </div>
            <div className="relative">
              <div className="milestone-line bg-purple"></div>
              <div className="milestone-circle bg-purple absolute right-0 left-14 mt-1">
                4
              </div>
            </div>
            <div className="text-left md:w-1/2">
              <p className=" text-purple">
                Announcement of the accepted teams and ideas
              </p>
              <div className="text-white">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center my-10 mx-30">
            <div className="text-right md:w-1/2">
              <p className=" text-purple">
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <div className="text-white">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </div>
            </div>
            <div className="relative">
              <div className="milestone-line bg-purple"></div>
              <div className="milestone-circle bg-purple absolute right-0 left-14 mt-1">
                5
              </div>
            </div>
            <div className="font-bold text-lg text-purple text-left">
              November 18, 2023
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ml-36 mb-10">
          <div className="flex items-center my-10 mx-30">
            <div className="font-bold text-lg text-purple text-right md:w-1/2">
              November 18, 2023
            </div>
            <div className="relative">
              <div className="milestone-line bg-purple"></div>
              <div className="milestone-circle bg-purple absolute right-0 left-14 mt-1">
                6
              </div>
            </div>
            <div className="text-left md:w-1/2">
              <p className=" text-purple">Demo Day</p>
              <div className="text-white">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
