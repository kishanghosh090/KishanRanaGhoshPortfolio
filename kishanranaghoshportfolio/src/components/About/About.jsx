import React from "react";
import Header from "../Header/Header.jsx";
import BottomNavBar from "../BottomNavBar/BottomNavBar.jsx";
import { EDUCATION_DETAILS } from "../../constants.js";

import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <Header />
      <div className="border-b bg-neutral-950 border-neutral-900 pb-1 text-white">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="py-10 text-center text-4xl"
        >
          Education
        </motion.h1>
        <div className="mx-6"></div>
      </div>
      <BottomNavBar />
    </>
  );
};

export default About;
