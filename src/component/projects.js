import React from "react";
import { useState } from "react";

import img from "../assets/talha.jpg";
import img2 from "../assets/haseeb.jpg";
import img3 from "../assets/john.jpg";
import Slider from "../component/slider";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function projects() {
  return (
    <>
    
  <div className="text-center mb-12 mt-72 ml-16 animate-slideUp">
            <div className="text-blue-800 text-3xl sm:text-4xl leading-10 ">
              Our Projects
            </div>
            <div className="text-black-300 font-bold text-2xl sm:text-3xl pt-3 leading-normal">
            Recently Completed Projects
            </div>
          </div>
<div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-y-8 gap-x-10 mx-16 lg:mx-52  animate-slideUp ">
  {/* Project Cards */}
  {[
    { img: project1, title: "238K", link: "https://point72-main.web.app/" },
    { img: project2, title: "HomeEase", link: "https://dem0-domain.web.app/" },
    { img: project3, title: "DashCafe", link: "https://dashcafe-stage.web.app/" },
    { img: project4, title: "WorkChat", link: "https://workchatapp.com/" },
    { img: project5, title: "Tutolk", link: "https://www.tutolk.com/en" },
    { img: project6, title: "Sparc", link: "https://sparc.world/" },
  ].map((project, index) => (
    <div key={index} className="w-96 h-96  md:w-80 lg:ml-2 sm:ml-4  text-center bg-grayHeart border rounded-2xl flex flex-col justify-start  relative overflow-hidden ">
      <div className="relative group">
        <img src={project.img} alt="project" className="w-54 h-52 mx-auto pt-0 m-0" />
        <div className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={project.link} className="text-white text-2xl">
            <FontAwesomeIcon icon={faLink} size="1x" />
          </a>
        </div>
      </div>
      <div className="mt-10 text-[20px] text-black-300 font-semibold">
        {project.title}
      </div>
      <div className="mt-4 text-textgray text-sm">
        Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
      </div>
    </div>
  ))}
</div>

      <div className="flex flex-col items-center mx-auto mt-72  animate-slideUp mx-4 ">
        <div className=" leading-24 text-blue-800 text-[25px] sm:text-4xl text-3xl sm:text-4xl">Testimonial</div>
        <div className="text-[40px] text-black-300 font-bold pt-3 leading-[48px]  text-2xl sm:text-3xl mx-32">
          What Say Our Clients!
        </div>
        {/* <div className="h-80  ">
          {" "}
          <Slider />
        </div> */}
        <div className=" w-[1200px] ">
          <div className="flex items-start justify-start ">
            <div className="h-[250px] md:ml-32 xsm:ml-52 xxsm:ml-32 xxxsm:ml-32   ">
              <Slider />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto mt-72 animate-slideUp mx:4 ">
        <div className=" leading-24 text-blue-800 text-[25px] text-3xl sm:text-4xl">Our Team</div>
        <div className="text-[40px] text-black-300 font-bold pt-3 leading-[48px] text-2xl sm:text-3xl">
          Our Team Members
        </div>
      </div>
    
      <div className="mt-10 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-slideRightToLeft lg:mx-52">
        <div className="w-80 h-96 text-center bg-grayHeart border rounded-2xl flex flex-col justify-evenly mx-16 lg:mx-4 my-4">
          <img src={img} alt="Talha Zia" className="h-40 w-40 rounded-full mx-auto" />
          <div className="mt-4 text-textgray">
            <span className="text-black-300 font-bold text-xl">Talha Zia</span><br /> CEO
          </div>
          <div className="flex justify-center">
            <a href="https://www.facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800" />
            </a>
            <a href="https://twitter.com/yourTwitterPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/yourLinkedInPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="w-80 h-96 text-center bg-grayHeart border rounded-2xl flex flex-col justify-evenly mx-16 my-4 lg:mx-4">
          <img src={img2} alt="Haseeb Malik" className="h-40 w-40 rounded-full mx-auto" />
          <div className="mt-4 text-textgray">
            <span className="text-black-300 font-bold text-xl">Haseeb Malik</span><br /> CEO & Founder
          </div>
          <div className="flex justify-center">
            <a href="https://www.facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800" />
            </a>
            <a href="https://twitter.com/yourTwitterPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/yourLinkedInPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="w-80 h-96 text-center bg-grayHeart border rounded-2xl flex flex-col justify-evenly lg:mx-4 mx-16  my-4">
          <img src={img3} alt="John Doe" className="h-40 w-40 rounded-full mx-auto" />
          <div className="mt-4 text-textgray">
            <span className="text-black-300 font-bold text-xl">John Doe</span><br /> Web Developer
          </div>
          <div className="flex justify-center">
            <a href="https://www.facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800" />
            </a>
            <a href="https://twitter.com/yourTwitterPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/yourLinkedInPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer" className="ml-3 hover:bg-blue-800 hover:text-white border hover:border-blue-800 w-6 h-6 rounded-full text-blue-800">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    
    </>
  );
}
