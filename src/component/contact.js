import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelopeOpenText, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Laraib",  // Replace with the actual recipient name or keep it dynamic
      from_name: name,
      from_email: email,
      message: message,
      to_email: "laraibsaeed846@gmail.com",
    };
    emailjs.send('service_8xruky4', 'template_h50pvwo', templateParams, 'hGVoELWxFRexYZ8XL')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success('Email sent successfully!');
      }, (err) => {
        console.error('Failed to send email.', err);
        toast.error('Error sending email.');
      });
  };

  return (
    <>
    <ToastContainer  position="top-right" 
  autoClose={5000} 
  hideProgressBar={false} 
  closeOnClick 
  />
    <div className="flex flex-col items-center mx-auto mt-52 animate-zoomIn px-4">
    <div className="leading-24 text-blue-800 text-2xl sm:text-3xl">Contact Us</div>
    <div className="text-3xl sm:text-4xl text-black-300 font-bold pt-3 leading-[48px] text-center">Let’s Get In Touch</div>
    <div className="w-full sm:w-[500px] mt-10 h-auto sm:h-[500px] bg-grayHeart border rounded-2xl flex flex-col justify-evenly p-4 sm:p-0">
      <form className="w-full max-w-lg mt-8 mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6 px-4 md:px-8 ">
          <div className="w-full px-3 sm:px-0">
            <label className="block text-gray-700 font-bold" htmlFor="name">Name</label>
            <input
              className="w-full sm:w-[450px] border rounded-4xl h-12 border-gray-300 focus:border-white pl-2"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 px-4 md:px-8">
          <div className="w-full px-3 sm:px-0">
            <label className="block text-gray-700 font-bold" htmlFor="email">Email</label>
            <input
              className="w-full sm:w-[450px] border rounded-1xl h-12 border-gray-300 focus:border-white pl-2"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 px-4 md:px-8 ">
          <div className="w-full px-3 sm:px-0">
            <label className="block text-gray-700 font-bold" htmlFor="message">Message</label>
            <textarea
              className="w-full sm:w-[450px] border rounded-1xl h-32 border-gray-300 focus:border-white pl-2"
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn w-32 h-10  text-black-300 border rounded-3xl hover:bg-blue-800 hover:text-white">Submit</button>
        </div>
      </form>
    </div>
    <div className="w-full h-auto sm:h-96 bg-purpleHeart mt-24  xsm:h-[250px] xxsm:h-[250px] xxxsm:h-[250px]">
      <div className="flex flex-col items-center mx-auto pt-10">
        <div className="text-3xl sm:text-4xl text-white font-bold pt-1 leading-[48px] text-center">Stay Always In Touch</div>
        <div className="w-full sm:w-[500px] mt-10 h-auto sm:h-52 bg-gray-200 border rounded-2xl flex flex-col justify-evenly p-4 xsm:w-[300px] xxsm:w-[300px] xxxsm:w-[300px]">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
            <div className="flex items-center justify-between w-full sm:w-auto hover:cursor-pointer">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="pl-0 sm:pl-10 mr-4" />
              <span className="text-textgray ml-2 sm:ml-0">htdots2@gmail.com</span>
            </div>
            <div className="hidden sm:block h-full mx-4 border-l border-textgray"></div>
            <div className="flex items-center justify-between w-full sm:w-auto mt-4sm:mt-0 hover:cursor-pointer">
              <FontAwesomeIcon icon={faPhoneVolume} className=" mr-4" />
              <span className="text-textgray ml-2 sm:ml-0 sm:pr-12">+92 3418487861</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);
};

