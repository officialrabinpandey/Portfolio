import React from "react";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import { SiGmail } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className=" Flex h-screen bg-green-50">
        <div className="space-y-6 items-center justify-around py-10">
          <h1 className=" text-cyan-700 text-center  p-3 items-center font-bold text-5xl">
            {" "}
            Hi
          </h1>
          <p className="  text-cyan-700  text-center p-3 items-center font-bold text-5xl">
            {" "}
            I am Rabin Pandey
          </p>
          <p className="p-3 text-center text-2xl font-extralight">
            LET'S BUILD SOMETHING LEGENDARY TOGETHER.<br></br>
            I’m focused on building responsive web applications integrating both
            front-end and back-end technologies.
          </p>
        </div>
        <div className=" mt-12 flex justify-center space-x-4">
          <div class="rounded-lg shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110  hover:shadow-gray-800 ease-in duration-300">
            <BsLinkedin className="text-cyan-700" />
          </div>
          <div class="rounded-lg shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110  hover:shadow-gray-800 ease-in duration-300">
            <BsFacebook className="text-cyan-700 " />
          </div>
          <div class="rounded-lg shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110  hover:shadow-gray-800 ease-in duration-300">
            <SiGmail className="text-cyan-700" />
          </div>
          <div class="rounded-lg shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110  hover:shadow-gray-800 ease-in duration-300">
            <BsGithub className="text-cyan-700" />
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
