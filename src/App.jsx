import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <nav className=" flex flex-col bg-cyan-800 ">
        <ul className="flex p-4  flex-row  justify-end text-white font-semibold ">
          <li className=" hover:text-black me-4 ease-in duration-300 cursor-pointer px-2">
            <Link to="/#">Home</Link>
          </li>
          <li className=" hover:text-black me-4 ease-in duration-300 cursor-pointer px-2">
            <Link to="/About">About</Link>
          </li>
          <li className=" hover:text-black me-4 ease-in duration-300 cursor-pointer px-2">
            <Link to="/Skills">Skills</Link>
          </li>
          <li className=" hover:text-black me-4 ease-in duration-300 cursor-pointer px-2">
            <Link to="/Resume">Resume</Link>
          </li>
          <li className=" hover:text-black me-4 ease-in duration-300 cursor-pointer px-2">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      <footer className="text-left bottom-0 left-0 px-20 bg-cyan-600 w-full p-4">
        <p className="text-white font-semibold">
          © Rabin Pandey2023. All Rights Reserved{" "}
        </p>
      </footer>
    </>
  );
};

export default App;
