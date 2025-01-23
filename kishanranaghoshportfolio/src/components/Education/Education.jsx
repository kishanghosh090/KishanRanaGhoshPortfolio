import { motion } from "framer-motion";
import React, { useEffect } from "react";
import EducationCard from "./EducationCard.jsx";
import { EDUCATION_DETAILS } from "../../constants.js";

function Education() {
  return (
    <div className="bg-neutral-950 text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" text-center text-4xl py-4"
      >
        Education
      </motion.h1>
      <div className="border-b border-neutral-900">
        {EDUCATION_DETAILS.map((education, index) => (
          <EducationCard key={index} data={education} />
        ))}
      </div>
    </div>
  );
}

export default Education;
