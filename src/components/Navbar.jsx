import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //   const handleScrollTo = (id) => {
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  return (
    <nav className="text-white md:w-full w-full z-10 border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[90px]">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-lg flex items-center">
              get <span className="text-pink">linked</span>
            </Link>
          </div>
          {/* Desktop View */}
          <div className="hidden md:flex items-baseline justify-center space-x-4 ">
            <Link to="/" className="font-medium text-sm hover:text-purple">
              Timeline
            </Link>
            <div className="group inline-block">
              <a smooth="true" className="font-medium text-sm hover:text-purple">
                Overview
              </a>
            </div>
            <div className="group inline-block">
              <a href="" smooth="true" className="font-medium text-sm hover:text-purple">
                FAQs
              </a>
            </div>
            <Link
            to="/contact"
            className="block px-3 py-2 rounded-md  text-sm font-medium hover:text-purple"
          >
            Contact
          </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white cursor-pointer focus:outline-none  focus:ring-inset"
              onClick={toggleMenu}
            >
              <span className="sr-only">Menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <Link
              to="/register"
              className="inline-block text-sm text-white primary py-2 px-4 rounded"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md  text-sm font-medium hover:text-purple"
          >
            Timeline
          </Link>

          <a className="block px-3 py-2 rounded-md  text-sm font-medium hover:text-purple">
            Overview
          </a>
          <a className="block px-3 py-2 rounded-md  text-sm font-medium hover:text-purple">
            FAQs
          </a>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md  text-sm font-medium hover:text-purple"
          >
            Contact
          </Link>
        </div>
        <div className="px-4 py-3 sm:px-6">
          <Link
            to="/register"
            className="inline-block text-sm text-white primary py-2 px-4 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
