import React from "react";
import logo from "../assets/about.png";
export default function about() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center  mt-72 px-4 sm:flex-row sm:justify-center sm:px-0 ">
        <div className="flex flex-col w-full max-w-xl md:ml-8 animate-slideUp ">
          <div className="leading-10 text-blue-800 text-3xl sm:text-5xl">
            ABOUT US{" "}
          </div>
          <div className="text-2xl sm:text-4xl text-black-300 font-bold pt-3 leading-normal font-Jost, sans-serif">
            #1 Web solution with 6 years of experience
          </div>
          <div className="pt-8 text-textgray text-justify ">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo eirmod magna dolore erat amet
          </div>
          <div className="pt-8 text-textgray ">
            <div>
              Web Design
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                value="90"
              />
            </div>
            <div className="pt-4">
              App Development
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                value="80"
              />
            </div>
            <div className="pt-4">
              AI chatbot development
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                value="85"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 sm:ml-8 sm:mt-0 md:mx-10">
          <img
            src={logo}
            alt="about image"
            className="w-full sm:max-w-[500px] md:w-[550px]  animate-zoomIn"
          />
        </div>
      </div>
      {/* <div className="w-full h-72 bg-red-600 mt-72 ml-4 md:w-[950px]">
        <div className="flex justify-evenly text-white pt-32 sm:flex-col ">
          <div>Years Experience</div>
          <div>Team Members</div>
          <div>Satisfied Clients</div>
          <div>Compleate Projects</div>
        </div>
      </div> */}
      <div className="w-full h-72 bg-red-600 mt-72 ml-4 ">
  <div className="flex flex-col sm:flex-row sm:justify-evenly text-white items-center pt-32 sm:items-start">
    <div className="mb-4 sm:mb-0">Years Experience</div>
    <div className="mb-4 sm:mb-0">Team Members</div>
    <div className="mb-4 sm:mb-0">Satisfied Clients</div>
    <div className="mb-4 sm:mb-0">Complete Projects</div>
  </div>
</div>
    </>
  );
}
