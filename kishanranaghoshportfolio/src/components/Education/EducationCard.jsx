import React from "react";
import { motion } from "framer-motion";
function EducationCard(props) {
  return (
    <div className="border-b border-neutral-900 mt-4 p-3">
      <div
        key={props.index}
        className="mb-8 flex flex-wrap lg:justify-center border border-neutral-900 p-2"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 text-lg text-neutral-400">
            {props.data.collageName}
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={props.data.collageImg}
            width={250}
            height={250}
            alt={props.data.collageName}
            className="mb-6 rounded"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full max-w-xl lg:w-3/4 "
        >
          <h6 className="mb-4 font-semibold flex flex-col gap-3">
            {props.data.year}
            <span className="text-sm text-purple-100">
              {props.data.aboutCollage}
            </span>
          </h6>
        </motion.div>
      </div>
    </div>
  );
}

export default EducationCard;
