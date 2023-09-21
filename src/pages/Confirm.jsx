import React from "react";
import congratulation from "../assets/images/congratulation.png";

const Confirm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative border pink p-7 rounded shadow-lg max-w-sm">
        <div className="text-center">
          <img
            src={congratulation}
            alt="Confirmation"
            className=" mx-auto mb-4"
          />
          <h2 className="text-lg font-bold text-white">
            Congratulations you have successfully Registered!
          </h2>
          <p className="text-sm mt-2 text-white mx-9">
            Yes, it was easy and you did it! check your mail box for next step😜
          </p>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="primary w-full text-white px-4 py-2 rounded-md transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
