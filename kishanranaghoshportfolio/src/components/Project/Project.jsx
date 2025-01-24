import React from "react";
import { WEB_PROJECTS } from "../../constants.js";
import ProjectCard from "./ProjectCard.jsx";
import { motion } from "framer-motion";
import BottomNavBar from "../BottomNavBar/BottomNavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

function Project() {
  return (
    <>
      <Header />
      <div className="  border-b border-neutral-900  lg:mb-35 pt-5 pb-20 overflow-hidden bg-neutral-950 text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Projects
        </motion.h1>
        <div className="mx-6 overflow-hidden">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl"
          >
            Web Projects
          </motion.h1>
          {WEB_PROJECTS.map((project, index) => (
            <ProjectCard key={index} data={project}  />
          ))}
        </div>
      </div>
      <BottomNavBar />
      <Footer />
    </>
  );
}

export default Project;
