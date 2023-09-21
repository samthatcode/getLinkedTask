import React from "react";

const ConfirmContact = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
      <div className="fixed inset-0 bg-[#17102a] opacity-80"></div>
      <div className="relative border pink p-7 rounded shadow-lg max-w-sm">
        <div className="text-center">
          <h2 className="text-lg font-bold text-white">
            Congratulations, your message has been sent Successfully!
          </h2>
          <p className="my-10 text-4xl">🎉🎉🎉🎉</p>
          <p className="text-sm  text-white mx-9">
            We appreciate your feedback, Thank You!😜
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

export default ConfirmContact;
