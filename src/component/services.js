import React, { useState } from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

 

 

const Services = () => {
  return (
    <>
  
      <div className=" mt-72 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 mt-16 animate-slideUp">
            <div className="text-blue-800 text-3xl sm:text-4xl leading-10">
              Our Services
            </div>
            <div className="text-black-300 font-bold text-2xl sm:text-3xl pt-3 leading-normal">
              What Solutions We Provide
            </div>
          </div>

          <div className="grid grid-cols-1 mt-16 md:ml-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp ml-10">
            {/* Service Cards */}
            <div className="w-full bg-grayHeart group hover:bg-purpleHeart rounded-2xl flex flex-col justify-center items-center p-5 transition-transform duration-300 ease-out hover:animate-hoverSlideUp">
              <img src={icon2} alt="icon" className="w-14 h-14 mx-auto" />
              <div className="mt-4 text-black-300 font-semibold text-lg sm:text-xl group-hover:text-white">
                Web Design
              </div>
              <div className="mt-4 text-textgray group-hover:text-white text-sm sm:text-base">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem
              </div>
            </div>

            <div className="w-full bg-grayHeart group hover:bg-purpleHeart rounded-2xl flex flex-col justify-center items-center p-5 transition-transform duration-300 ease-out hover:animate-hoverSlideUp">
              <img src={icon6} alt="icon" className="w-14 h-14 mx-auto" />
              <div className="mt-4 text-black-300 font-semibold text-lg sm:text-xl group-hover:text-white">
                App Development
              </div>
              <div className="mt-4 text-textgray group-hover:text-white text-sm sm:text-base">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem
              </div>
            </div>

            <div className="w-full bg-grayHeart group hover:bg-purpleHeart rounded-2xl flex flex-col justify-center items-center p-5 transition-transform duration-300 ease-out hover:animate-hoverSlideUp">
              <img src={icon1} alt="icon" className="w-14 h-14 mx-auto" />
              <div className="mt-4 text-black-300 font-semibold text-lg sm:text-xl group-hover:text-white">
                SEO Optimization
              </div>
              <div className="mt-4 text-textgray group-hover:text-white text-sm sm:text-base">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem
              </div>
            </div>

            <div className="w-full bg-grayHeart group hover:bg-purpleHeart rounded-2xl flex flex-col justify-center items-center p-5  transition-transform duration-300 ease-out hover:animate-hoverSlideUp">
              <img src={icon4} alt="icon" className="w-14 h-14 mx-auto" />
              <div className="mt-4 text-black-300 font-semibold text-lg sm:text-xl group-hover:text-white">
                AI Chatbot Development
              </div>
              <div className="mt-4 text-textgray group-hover:text-white text-sm sm:text-base">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem
              </div>
            </div>

            <div className="w-full bg-grayHeart group hover:bg-purpleHeart rounded-2xl flex flex-col justify-center items-center p-5   transition-transform duration-300 ease-out hover:animate-hoverSlideUp">
              <img src={icon5} alt="icon" className="w-14 h-14 mx-auto" />
              <div className="mt-4 text-black-300 font-semibold text-lg sm:text-xl group-hover:text-white">
                Desktop Application
              </div>
              <div className="mt-4 text-textgray group-hover:text-white text-sm sm:text-base">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem
              </div>
            </div>

            <div className="w-full bg-grayHeart group hover:bg-purpleHeart rounded-2xl flex flex-col justify-center items-center p-5   transition-transform duration-300 ease-out hover:animate-hoverSlideUp">
              <img src={icon3} alt="icon" className="w-14 h-14 mx-auto" />
              <div className="mt-4 text-black-300 font-semibold text-lg sm:text-xl group-hover:text-white">
                Social Media Marketing
              </div>
              <div className="mt-4 text-textgray group-hover:text-white text-sm sm:text-base">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-red-600 mt-72 animate-slideUp py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white leading-10">- NEWSLETTER -</div>
            <div className="text-white font-bold text-3xl sm:text-4xl pt-3 leading-normal">
              Stay Always In Touch
            </div>
            <div className="text-white text-center pt-8">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
              labore. Clita erat <br />
              ipsum et lorem et sit sed stet lorem sit clita duo justo
            </div>
            <EmailForm />
          </div>
        </div> */}
        <div className="w-full bg-red-600 mt-12 sm:mt-20 lg:mt-32 animate-slideUp py-12 ml-10 ">
          <div className="max-w-4xl mx-auto sm:w-[700px] px-4 sm:px-6  lg:px-8">
            <div className="text-center md:ml-16">
              <div className="text-white leading-10">- NEWSLETTER -</div>
              <div className="text-white font-bold text-3xl sm:text-3xl mt-3 leading-normal">
                Stay Always In Touch
              </div>
              <div className="text-white mt-6 text-center">
                <p className="text-base sm:text-xl">
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat <br class="sm:hidden" /> ipsum et lorem
                  et sit sed stet lorem sit clita duo justo
                </p>
              </div>
              <div className="mt-8 sm:mt-12">
              <form className="max-w-md mx-auto" >
      <div className="flex items-center  border-gray-500 py-2">
        <input
          type="email"
       
          className=" border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none rounded-2xl h-12 pl-5"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-3 px-2 rounded rounded-2xl"
        >
          Subscribe
        </button>
      </div>
    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
