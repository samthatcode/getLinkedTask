import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQCompo = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full flex-col border-b border-purple transition duration-200 ease-in my-5">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="mb-6 flex min-w-[90%] items-center justify-between text-left"
      >
        <div className="cursor-pointer text-base font-semibold capitalize transition delay-200 duration-300 ease-in-out md:text-lg">
          {title}
        </div>
        <div className="flex w-12 cursor-pointer justify-end transition delay-200 duration-300 ease-in-out">
          {isActive ? <FaMinus size={15} className="text-pink" /> : <FaPlus size={15} className="text-pink" />}
        </div>
        
      </div>
      {isActive && (
        <div className="mb-5 cursor-pointer text-sm text-[#A1A1A1] capitalize transition delay-200 duration-300 ease-in-out md:text-base">
          {content}
        </div>
      )}
    </div>
  );
};

export default FAQCompo;
