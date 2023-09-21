import React from "react";
import LibertyCompanyLogo from "../assets/images/LibertyCompanyLogo.png";
import LibertyCompanyLogo2 from "../assets/images/LibertyCompanyLogo2.png";
import WinwiseLogo from "../assets/images/WinwiseLogo.png";
import wisperLogo from "../assets/images/wisperLogo.png";

const HeroSeven = () => {
  return (
    <div className="px-12 border-b border-gray-400 bg-transparent ">
      <div className="text-center md:text-middle my-10">
        <h1 className="md:text-xl text-lg font-bold text-white">
          Partners and Sponsors
        </h1>
        <p className="text-white">
          Getlinked Hackathon 1.0 is honored to have the following <br />
          major companies as its partners and sponsors
        </p>
      </div>

      <div className="border border-pink rounded md:p-14 p-3 my-20">
        <div className="grid grid-cols-3 gap-4 md:mx-40">
          {/* Row 1 */}
          <div className="text-center p-6 flex justify-center items-center border-r-2 border-b-2 border-pink custom-border">
            <img
              src={LibertyCompanyLogo}
              alt="LibertyCompanyLogo"
              className="md:w-16 w-12"
            />
          </div>
          <div className="text-center p-2 flex justify-center items-center  border-r-2   border-pink border-b-2">
            <img
              src={LibertyCompanyLogo2}
              alt="LibertyCompanyLogo2"
              className="md:w-24 w-12"
            />
          </div>
          <div className="text-center p-2 flex justify-center items-center  border-b-2 border-pink">
            <img src={WinwiseLogo} alt="WinwiseLogo" className="md:w-16 w-12" />
          </div>

          {/* Row 2 */}
          <div className="text-center p-2 flex justify-center items-center  border-r-2  border-pink">
            <img src={wisperLogo} alt="wisperLogo" className="md:w-16 w-12" />
          </div>
          <div className="text-center p-2 flex justify-center items-center  border-r-2  border-pink">
            <p className="text-white">
              pay <span className="text-blue"></span> box
            </p>
          </div>
          <div className="text-center p-2 flex justify-center items-center  border-pink">
            <p className="text-white">
              Vusual <span className="text-red"></span> Plus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSeven;
