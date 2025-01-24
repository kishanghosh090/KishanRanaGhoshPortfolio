import { motion } from "framer-motion";
import React from "react";

function ProjectCard(props) {
  return (
    <div className="overflow-hidden border border-neutral-900 p-3 mt-3">
      <div key={props.index} className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <img
            src={props.data.image}
            width={250}
            height={250}
            alt={props.data.name}
            className="mb-6 rounded"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <a
            href={props.data.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h6 className="mb-4 font-semibold ">{props.data.name}</h6>
          </a>
          <p className="mb-4 text-neutral-400">{props.data.description}</p>
          <div className="flex flex-wrap">
            {props.data.tech.map((tech, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectCard;
