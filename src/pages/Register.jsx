import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import registerDesign from "../assets/images/registerDesign.png";
import LineWalk from "../assets/images/LineWalk.png";
import personWalk1 from "../assets/images/personWalk1.png";
import personWalk2 from "../assets/images/personWalk2.png";
import Confirm from "./Confirm";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    category: "",
    group_size: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [categories, setCategories] = useState([]); // State to store categories

  useEffect(() => {
    // Fetch categories from the backend endpoint
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => {
        setCategories(response.data); // Set the fetched categories in state
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Check if the checkbox is checked
    if (!isChecked) {
      // Display an error message and prevent form submission
      alert("Please check the box to agree with the terms and conditions.");
      return;
    }

    try {
      // Make a POST request to the server
      await axios.post(
        "https://backend.getlinked.ai/hackathon/registration",
        formData
      );

      // Clear the form
      setFormData({
        team_name: "",
        email: "",
        phone_number: "",
        project_topic: "",
        category: "",
        group_size: "",
      });

      setIsModalOpen(true);
    } catch (error) {
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
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row mx-7 with-background">
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
                  <div className="mb-4 md:w-1/2">
                    <label htmlFor="name" className="text-white">
                      Team’s Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="team_name"
                      value={formData.team_name}
                      onChange={handleChange}
                      required
                      placeholder="Enter the name of your group"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs capitalize"
                    />
                  </div>
                  <div className="mb-4 md:w-1/2 md:pl-2">
                    <label htmlFor="phone" className="text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-4 md:w-1/2">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
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
                  <div className="mb-4 md:w-1/2 md:pl-2">
                    <label htmlFor="topic" className="text-white">
                      Project Topic
                    </label>
                    <input
                      type="text"
                      id="topic"
                      name="project_topic"
                      value={formData.project_topic}
                      onChange={handleChange}
                      required
                      placeholder="What is your group project topic"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs capitalize"
                    />
                  </div>
                </div>
                <div className="flex flex-row md:flex-row md:space-x-4 space-x-4">
                  {/* Category Dropdown */}
                  <div className="mb-4 md:w-1/2">
                    <label htmlFor="category" className="text-white">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4 md:w-1/2 md:pl-2">
                    <label htmlFor="groupSize" className="text-white">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="group_size"
                      value={formData.group_size}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded py-2 px-3 text-xs"
                    >
                      <option value="Select">Select</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
                <p className="text-xs text-pink italic">
                  Please review your registration details before submitting
                </p>
                <div className="flex items-center ">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
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
                  disabled={!isChecked} // Disable the button if checkbox is not checked
                  className="md:w-full text-center primary bg-gradient-to-r from-pink to-indigo-700 text-white py-2 px-4 border rounded "
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <FaSpinner size={40} className="animate-spin text-purple text-4xl" />
        </div>
      ) : (
        <>{isModalOpen && <Confirm onClose={closeModal} />}</>
      )}
    </div>
  );
};

export default Register;
