import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import send from "../assets/send.png";
export default function footer() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    
      <div className="bg-red-600 md:h-[500px] pl-8 h-full w-full flex flex-col md:grid md:grid-cols-3 justify-evenly mt-72 animate-zoomIn  ">
  <div className="flex flex-col mt-32 ml-14">
    <div className="text-[20px] text-white font-bold">ADDRESS</div>
    <ul className="mt-5 text-white">
      <li className="pt-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-5" />
        123 Street, New York, USA
      </li>
      <li className="pt-2">
        <FontAwesomeIcon icon={faPhone} className="mr-5" />
        +92 3418487861
      </li>
      <li className="pt-2">
        <FontAwesomeIcon icon={faEnvelope} className="mr-5 hover:cursor-pointer" />
        htdots2@gmail.com
      </li>
    </ul>
    <div className="flex justify-start mt-5 pl-5 text-white">
      <a href="https://www.facebook.com/yourFacebookPage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com/yourTwitterPage" target="_blank" rel="noopener noreferrer" className="ml-5">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.linkedin.com/in/yourLinkedInPage" target="_blank" rel="noopener noreferrer" className="ml-5">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.instagram.com/yourInstagramPage" target="_blank" rel="noopener noreferrer" className="ml-5">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>

  <div className="flex flex-col mt-32 ml-20">
    <div className="text-[20px] text-white font-bold">QUICK LINKS</div>
    <ul className="mt-5 text-white">
      <li className="pt-2 hover:text-blue-800 hover:cursor-pointer hover:underline">
        <FontAwesomeIcon icon={faAngleRight} className="mr-5" />
        <Link to="/" className="transition-opacity duration-300" onClick={handleClick}>Home</Link>
      </li>
      <li className="pt-2 hover:text-blue-800 hover:cursor-pointer hover:underline">
        <FontAwesomeIcon icon={faAngleRight} className="mr-5" />
        <Link to="/about" className="transition-opacity duration-300" onClick={handleClick}>About</Link>
      </li>
      <li className="pt-2 hover:text-blue-800 hover:cursor-pointer hover:underline">
        <FontAwesomeIcon icon={faAngleRight} className="mr-5" />
        <Link to="/services" className="transition-opacity duration-300" onClick={handleClick}>Service</Link>
      </li>
      <li className="pt-2 hover:text-blue-800 hover:cursor-pointer hover:underline">
        <FontAwesomeIcon icon={faAngleRight} className="mr-5" />
        <Link to="/projects" className="transition-opacity duration-300" onClick={handleClick}>Project</Link>
      </li>
      <li className="pt-2 hover:text-blue-800 hover:cursor-pointer hover:underline">
        <FontAwesomeIcon icon={faAngleRight} className="mr-5" />
        <Link to="/contact" className="transition-opacity duration-300" onClick={handleClick}>Contact</Link>
      </li>
    </ul>
  </div>

  <div className="flex flex-col mt-32 mr-12">
    <div className="text-[20px] text-white  font-bold">NEWSLETTER</div>
    <div className="mt-5 text-justify text-white">
      Lorem ipsum dolor sit amet elit. <br />
      Phasellus nec pretium mi. Curabitur <br /> facilisis ornare velit non vulpu
    </div>
    <form className="max-w-md " >
      <div className="flex items-center  border-gray-500 py-2">
        <input
          type="email"
        
          className=" border-none w-full text-white mr-3 py-1  leading-tight focus:outline-none rounded-2xl h-12 pl-5 md:w-32 lg:w-52"
          placeholder=" Email"
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
  {/* <div className="w-96 ">
    <hr className="my-10 border-t-2 border-gray-300 w-screen " />
  </div> */}
  <div className="relative lg:w-[1400px] md:w-[670px] xsm:w-[300px] xxsm:w-[200px] xxxsm:w-[100px] ml-8 text-white mt-10 pl-10 "  >
  <hr className="absolute left-0 right-0 my-18 border-t-2 border-gray-300 " /> <div className="mt-4">&copy; HTdots, 2024 All rights reserved</div>
</div>
</div>

    </>
  );
}
