import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { motion } from "framer-motion";
function BottomNavBar() {
  return (
    <motion.div
      initial={{ transform: "translateY(100px)" }}
      animate={{ transform: "translateY(0)" }}
      className="fixed bottom-[12px] w-[100%]  p-4 z-50 flex justify-center items-center "
    >
      <motion.ul className="flex justify-between items-center gap-7  px-1 py-1 rounded-full backdrop-blur-sm bg-gradient-to-br from-indigo-500 to-fuchsia-500  border-4 border-neutral-700">
        <li>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <NavLink
              color="primary"
              variant="flat"
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-pink-950 text-white" : ""
                } flex justify-center items-center flex-col p-1  h-[2.5rem] w-[2.5rem] rounded-full  transition-transform bg-white text-black text-2xl `
              }
            >
              <IoHomeOutline className="font-semibold" />
            </NavLink>
          </motion.div>
        </li>

        <li>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-pink-950 text-white" : ""
                } flex justify-center items-center flex-col p-1  h-[2.5rem] w-[2.5rem] rounded-full  transition-transform bg-white text-black text-2xl `
              }
            >
              <IoIosContact />
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.7 }}
          >
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-pink-950 text-white" : ""
                } flex justify-center items-center flex-col p-1  h-[2.5rem] w-[2.5rem] rounded-full  transition-transform bg-white text-black text-2xl `
              }
            >
              <GrContact />
            </NavLink>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 2.3 }}
          >
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-pink-950 text-white" : ""
                } flex justify-center items-center flex-col p-1  h-[2.5rem] w-[2.5rem] rounded-full  transition-transform bg-white text-black text-2xl `
              }
            >
              <GrProjects />
            </NavLink>
          </motion.div>
        </li>
      </motion.ul>
    </motion.div>
  );
}

export default BottomNavBar;
