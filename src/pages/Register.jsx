import React, { useState } from "react";
import { Navbar } from "../components";
import registerDesign from "../assets/images/registerDesign.png";
import LineWalk from "../assets/images/LineWalk.png";
import personWalk1 from "../assets/images/personWalk1.png";
import personWalk2 from "../assets/images/personWalk2.png";
import Confirm from "./Confirm";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    category: "Select Your Category",
    groupSize: "Select",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form data:", formData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mx-7">
        <div className="md:w-1/2 order-first md:order-first">
          <img src={registerDesign} alt="/" className=" h-auto" />
        </div>

        <div className="md:w-1/2">
          <div className="max-w-xl mx-auto p-12 rounded-xl border my-16">
            <h1 className="text-2xl font-bold my-7 text-pink">Register</h1>
            <div className="relative flex items-center">
              <p className="text-xs my-3 text-white">
                Be part of this movement!
              </p>
              <img
                src={personWalk1}
                alt="Image 1"
                className="absolute md:bottom-[20px] md:left-[197px] bottom-[30px] left-[147px] "
              />
              <img
                src={personWalk2}
                alt="Image 2"
                className="absolute md:bottom-[20px] md:left-[180px] bottom-[30px] left-[130px] "
              />
              <img src={LineWalk} alt="/" className="ml-2" />
            </div>

            <h1 className="text-2xl my-5 text-white">CREATE YOUR ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-4 md:w-1/2 text-white">
                    <label htmlFor="name">Team’s Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter the name of your group"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    />
                  </div>
                  <div className="mb-4 md:w-1/2 md:pl-2 text-white">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-4 md:w-1/2 text-white">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    />
                  </div>
                  <div className="mb-4 md:w-1/2 md:pl-2 text-white">
                    <label htmlFor="topic">Project Topic</label>
                    <input
                      type="text"
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      placeholder="What is your group project topic"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-row md:flex-row md:space-x-4 space-x-4">
                  <div className="mb-4 md:w-1/2">
                    <label htmlFor="category" className="text-white">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    >
                      <option value="Select your category">
                        Select your category
                      </option>
                      <option value="Category 1">Category 1</option>
                      <option value="Category 2">Category 2</option>
                      <option value="Category 3">Category 3</option>
                    </select>
                  </div>
                  <div className="mb-4 md:w-1/2 md:pl-2">
                    <label htmlFor="groupSize" className="text-white">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    >
                      <option value="Select">Select</option>
                      <option value="1-10">1-10</option>
                      <option value="11-20">11-20</option>
                      <option value="21-30">21-30</option>
                    </select>
                  </div>
                </div>
                <p className="text-xs text-pink italic">
                  Please review your registration details before submitting
                </p>
                <div className="flex items-center">
                  <input type="checkbox" id="subscribe" name="subscribe" />
                  <label
                    htmlFor="subscribe"
                    className="ml-2 text-xs text-white"
                  >
                    I agreed with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="md:w-full text-center primary text-white py-2 px-4 border rounded"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen && <Confirm onClose={closeModal} />}
    </div>
  );
};

export default Register;
