import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../components";
import {
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaSpinner,
} from "react-icons/fa";
import ConfirmContact from "./ConfirmContact";
import x from "../assets/x.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Make a POST request to your server
      await axios.post(
        "https://backend.getlinked.ai/hackathon/contact-form",
        formData
      );

      // Clear the form
      setFormData({
        first_name: "",
        email: "",
        topic: "",
        message: "",
      });
      setIsModalOpen(true);
    } catch (error) {
      // Handle error (you can display an error message)
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

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
          <div className="flex items-center">
            <FaPhone className="text-white text-sm mr-2" />
            <p className="my-2">Call Us : 07067981819</p>
          </div>
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="text-white text-sm mr-2" />
            <p className="my-2">
              27, Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </div>
          <p>
            We are open from Monday-Friday
            <br /> 08:00am - 05:00pm
          </p>
          <div className="md:block hidden">
            <p className="text-purple my-4 text-sm">Share on</p>
            <div className="flex">
              <a href="#" className="mr-4 text-white hover:text-purple">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="mr-4 text-white hover:text-purple">
                <img
                  src={x}
                  alt="X"
                  style={{
                    width: "28px",
                    height: "28px",
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full border rounded-md px-3 py-2 outline-none my-4 bg-[#231c34]  text-white"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="Topic"
                className="md:hidden block w-full border rounded-md px-3 py-2 outline-none my-4 bg-[#231c34]  text-white capitalize"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Mail"
                className="w-full border rounded-md px-3 py-2 outline-none my-4 bg-[#231c34] text-white"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows="4"
                className="w-full border rounded-md px-3 py-2 outline-none resize-none bg-[#231c34] text-white capitalize"
                required
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
                  <img
                    src={x}
                    alt="X"
                    style={{
                      width: "28px",
                      height: "28px",
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
          </form>
        </div>
      </div>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <FaSpinner size={40} className="animate-spin text-purple text-4xl" />
        </div>
      ) : (
        <>{isModalOpen && <ConfirmContact onClose={closeModal} />}</>
      )}
    </>
  );
};

export default Contact;
