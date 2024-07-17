import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./layout/dashboard";

import React, { useEffect } from "react";
import Navbar from "./component/navbar";
import About from "./component/about";
import Home from "./component/home";
import Services from "./component/services";
import Projects from "./component/projects";
import Contact from "./component/contact";

function App() {
  return (
    <>
      <Router>
        <div>
          <Dashboard>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Dashboard>
        </div>
      </Router>
    </>
  );
}

export default App;
