import React from "react";
import { Navbar } from "../components";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:p-16">
        {/* Left Side */}
        <div className="md:w-1/2 p-12 text-white">
          <h2 className="text-lg text-purple font-bold mb-4">Get in touch</h2>
          <p className="my-4">
            Contact <br /> Information
          </p>
          <p className="my-4">
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>
          <p className="my-4">Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday
            <br /> 08:00am - 05:00pm
          </p>
          <div className="md:block hidden">
            <p className="text-purple my-4 text-sm">Share on</p>
            <div className="flex">
              <a href="#" className="mr-4 text-white hover:text-purple">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="mr-4 text-white hover:text-purple">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="mr-4 text-white hover:text-purple">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-purple">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-12 rounded-md bg-[#1c152e] ">
          <h2 className="text-lg font-medium my-2 text-purple">
            Question or Need Assistance?
          </h2>
          <h2 className="text-lg font-medium text-purple mb-6">
            Let us Know about it!
          </h2>
          <p className="md:hidden block text-white">
            Email us below to any question related to our event
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="First Name"
                className="w-full border rounded-md px-3 py-2 outline-none my-4 bg-[#231c34] "
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="topic"
                name="topic"
                placeholder="Topic"
                className="md:hidden block w-full border rounded-md px-3 py-2 outline-none my-4 bg-[#231c34] "
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Mail"
                className="w-full border rounded-md px-3 py-2 outline-none my-4 bg-[#231c34]"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full border rounded-md px-3 py-2 outline-none resize-none bg-[#231c34]"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="primary bg-gradient-to-r from-pink to-indigo-700 text-white px-10 py-2 rounded"
              >
                Submit
              </button>
            </div>
            <div className="md:hidden block text-center my-8">
              <p className="text-purple my-4 text-sm">Share on</p>
              <div className="flex justify-center">
                <a href="#" className="mr-4 text-white hover:text-purple">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="mr-4 text-white hover:text-purple">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="mr-4 text-white hover:text-purple">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-purple">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
