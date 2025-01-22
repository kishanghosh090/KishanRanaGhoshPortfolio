import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import { motion } from "framer-motion";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-neutral-950 text-white border-b border-neutral-900 pb-4 lg:mb-3 p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-thin tracking-tight">KRG</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
          Menu
        </button>
      </div>
      {isOpen && (
        <motion.div className="transition-transform z-50 duration-500">
          <motion.div
            initial={{ transform: "translateX(-100%)" }}
            animate={{ transform: "translateX(0%)" }}
            className="absolute top-[55px] left-0 backdrop-blur-lg text-slate-900 text-4xl  h-[100%] w-[100vw] p-14 flex flex-col gap-12 transition-transform shadow-2xl rounded-sm z-50 rounded-b-3xl duration-500"
          >
            <NavLink to="https://github.com/kishanghosh090">
              <li className="hover:text-[#66aaf9] cursor-pointer flex gap-4 bg-neutral-700 w-auto py-2 px-3 rounded-full justify-start items-center md:w-[50%] text-white z-[101]">
                <FaGithub />
                Github
              </li>
            </NavLink>
            <NavLink to="https://in.linkedin.com/in/kishan-rana-ghosh-8b95832b9">
              <li className="hover:text-[#66aaf9] cursor-pointer flex gap-4 bg-neutral-700 text-white w-auto py-2 px-3 rounded-full justify-start items-center md:w-[50%]">
                <FaLinkedin />
                Linkedin
              </li>
            </NavLink>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Header;
