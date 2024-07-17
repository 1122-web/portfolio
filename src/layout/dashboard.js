import React from "react";
import Home from "../component/home";
import Navbar from "../component/navbar";
// import About from "../component/about";
// import Projects from "../component/projects";
// import Services from "../component/services";
// import Testimonial from "../component/testimonial";
import Footer from "../component/footer";
// import { Outlet } from "react-router-dom";
export default function dashboard({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
