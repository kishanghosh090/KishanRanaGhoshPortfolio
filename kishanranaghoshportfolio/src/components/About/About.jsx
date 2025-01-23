import React from "react";
import Header from "../Header/Header.jsx";
import BottomNavBar from "../BottomNavBar/BottomNavBar.jsx";
import { motion } from "framer-motion";
import Education from "../Education/Education.jsx";

const About = () => {
  return (
    <div className="bg-neutral-950 text-white pb-24">
      <Header />
      <div className="bg-neutral-950 text-white ">
        <Education />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default About;
