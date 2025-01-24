import React from "react";
import Header from "../Header/Header.jsx";
import BottomNavBar from "../BottomNavBar/BottomNavBar.jsx";
import { motion } from "framer-motion";
import Education from "../Education/Education.jsx";
import Technologies from "../Technologies/Technologies.jsx";
import Footer from "../Footer/Footer.jsx";

const About = () => {
  return (
    <>
      <div className="bg-neutral-950 text-white pb-32">
        <Header />
        <div className="bg-neutral-950 text-white ">
          <Education />
        </div>
        <div>
          <Technologies />
        </div>
      </div>
      <BottomNavBar />
      <Footer />
    </>
  );
};

export default About;
