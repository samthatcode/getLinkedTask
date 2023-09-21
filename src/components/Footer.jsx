import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import x from "../assets/x.svg";

const Footer = () => {
  return (
    <footer className="bg-[#100b20] p-8 md:mt-10 mt-40">
      <div className="container mx-auto flex flex-wrap justify-center my-10">
        {/* First Footer Div */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-3">
            {" "}
            <Link to="/" className="font-bold text-lg flex items-center">
              get <span className="text-pink">linked</span>
            </Link>
          </h3>
          <p className="text-white text-sm">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <p className="text-white text-sm mt-10">
            Terms of Use &nbsp;<span className="border-r-2 border-pink"></span>{" "}
            &nbsp; Privacy Policy
          </p>
        </div>

        {/* Second Footer Div */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-deepPurple text-sm font-semibold mb-3">
            Useful Links
          </h3>
          <p className="text-white text-sm hover:text-purple">Overview</p>
          <p className="text-white text-sm hover:text-purple">Timeline</p>
          <p className="text-white text-sm hover:text-purple">FAQs</p>
          <Link to="/register">
            <p className="text-white text-sm hover:text-purple">Register</p>
          </Link>
          <div className="flex items-center mt-2 text-sm">
            <p className="text-deepPurple mr-3">Follow Us</p>
            <a href="#" className="mr-4 text-white hover:text-purple">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="mr-4 text-white hover:text-purple">
              <img
                src={x}
                alt="X"
                style={{
                  width: "30px",
                  height: "30px",
                 
                }}
              />
            </a>
            <a href="#" className="mr-4 text-white hover:text-purple">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-purple">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Third Footer Div */}
        <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
          <h3 className="text-deepPurple text-sm font-semibold mb-3">
            Contact Us
          </h3>
          <div className="flex items-center">
            <FaPhone className="text-white text-sm mr-2" />
            <p className="text-white text-sm">+234 679 81819</p>
          </div>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="text-white text-sm mr-2" />
            <p className="text-white text-sm">
              27, Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="text-center text-white text-sm mt-6">
        All rights reserved. &copy; getlinked Ltd.
      </div>
    </footer>
  );
};

export default Footer;
