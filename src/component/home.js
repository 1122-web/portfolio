import React from "react";
import hero from "../assets/hero.png";

import About from "../component/about";
import Projects from "../component/projects";
import Services from "../component/services";
import { useNavigate } from "react-router-dom";
import icon1 from "../assets/icon1.png";
import icon3 from "../assets/icon3.png";
import icon2 from "../assets/icon2.png";
export default function Home() {
  // Capitalized the function name
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };
  return (
    <>
    
      <div className="bg-red-600 h-[750px] w-full flex flex-col justify-center items-center sm:flex-row sm:justify-around pl-4 pt-24  ">
        <div className="mt-8 max-w-xl flex flex-col animate-zoomIn text-center sm:text-left sm:mt-32 md:ml-4 md:mt-12 lg:mt-4"  >
          <div className="text-4xl text-grayHeart font-bold pb-2 leading-normal font-Jost, sans-serif">
            A Digital Agency Of <br />
            Intelligent & Creative
            <br /> People
          </div>
          <div>
            <span className="text-grayHeart text-base leading-normal text-justify">
              Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
              <br />
              dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
              <br />
              sit justo amet ipsum vero ipsum clita lorem
            </span>
          </div>
          <div className="flex justify-center sm:justify-start mt-10">
            <button
              className="btn w-40 h-14 bg-gray-300 text-black-300 hover:text-white rounded-full border hover:border-blue-800 hover:bg-blue-800"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        {/* <div className="mt-8 sm:mt-0">
          <img
            src={hero}
            alt="hero img"
            className="w-full max-w-md h-auto mt-8 sm:mt-0 animate-zoomIn"
          />
        </div> */}
    <div className="lg:mb-6 sm:mt-0 flex justify-center">
  <img
    src={hero}
    alt="hero img"
    className="w-full h-auto  sm:max-w-[600px] animate-zoomIn"
  />
</div>
      </div>
      <div className="flex justify-center mt-60 animate-zoomIn flex-col sm:flex-row sm:flex-wrap  gap-2 ml-4">
        <div className="w-80 h-64 text-center p-5 bg-grayHeart rounded-2xl ">
          <div>
            <img src={icon2} alt="icon" className="w-14 h-14 mx-auto" />
          </div>
          <div className="mt-4 text-1xl text-black-300 font-semibold text-[20px]">
            Design & Development
          </div>
          <div className="mt-4 text-textgray">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </div>
        </div>

        <div className="w-80 h-64 p-5 text-center bg-grayHeart rounded-2xl mt-6 sm:mt-0 sm:ml-6">
          <div>
            <img src={icon1} alt="icon" className="w-14 h-14 mx-auto" />
          </div>
          <div className="mt-4 text-1xl text-black-300 font-semibold text-[20px]">
            SEO & Backlinks
          </div>
          <div className="mt-4 text-textgray">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </div>
        </div>

        <div className="w-80 h-64 p-5 text-center bg-grayHeart rounded-2xl   mt-6  sm:mt-0 sm:mx-6">
          <div>
            <img src={icon3} alt="icon" className="w-14 h-14 mx-auto" />
          </div>
          <div className="mt-4 text-1xl text-black-300 font-semibold text-[20px]">
            Social Media Marketing
          </div>
          <div className="mt-4 text-textgray">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
            diam stet diam sed stet lorem
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Projects />
    </>
  );
}
