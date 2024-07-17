
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`flex justify-between items-center  ${
          isSticky
            ? "bg-white text-black-300 font-bold h-20 "
            : "bg-black-300 text-white h-24"
        } sticky top-0 z-50 transition-colors duration-300 px-4 lg:px-8 `}
      >
        <div className="flex-shrink-0">
          <img
            className="w-36 h-20 lg:w-52 lg:h-32 pb-2 lg:pb-2"
            src={logo}
            alt="HT Dot logo"
          />
        </div>

        {/* Toggle Button for Mobile and Medium Screens */}
        <div className="lg:hidden pb-8">
          <button
            className="absolute right-10 text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-full lg:items-center lg:justify-between ">
          <ul className="flex justify-center mx-72 text-[18px] leading-[27px]">
            <li className="ml-5 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li className="ml-5 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/about" onClick={handleClick}>About</Link>
            </li>
            <li className="ml-5 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/services" onClick={handleClick}>Service</Link>
            </li>
            <li className="ml-5 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/projects" onClick={handleClick}>Project</Link>
            </li>
            <li className="ml-5 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/contact" onClick={handleClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-black-300 text-white ">
          <ul className="flex sm:flex-row  xsm:flex-col xxsm:flex-col xxxsm:flex-col items-center  mx-32 md:mx-52 text-[18px] leading-[27px]">
            <li className="mt-2 mx-4 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li className="mt-2 mx-4 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/about" onClick={handleClick}>About</Link>
            </li>
            <li className="mt-2 mx-4 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/services" onClick={handleClick}>Service</Link>
            </li>
            <li className="mt-2 mx-4 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/projects" onClick={handleClick}>Project</Link>
            </li>
            <li className="mt-2 mx-4 hover:text-red-600 hover:cursor-pointer hover:underline animate-fadeIn">
              <Link to="/contact" onClick={handleClick}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
