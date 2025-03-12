import React from "react";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { delay, motion } from "framer-motion";

const Technologies = () => {
  const iconvariants = (duration, delay) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay,
      },
    },
  });

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-2xl"
      >
        Web Development
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-4 px-10 lg:px-0">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ durarion: 1.5 }}
          className="flex flex-wrap justify-center items-center gap-4 px-10 lg:px-0"
        >
          <motion.div
            variants={iconvariants(2, 0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaReact className="text-4xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJsSquare className="text-4xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoMongodb className="text-4xl text-[#4db33d]" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiExpress className="text-4xl" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-4xl text-[#3c873a]" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoPostgresql className="text-4xl text-[#336791]" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandCpp className="text-4xl text-blue-600" />
          </motion.div>
          <motion.div
            variants={iconvariants(2, 2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssFill className="text-4xl text-[#06b6d4]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
