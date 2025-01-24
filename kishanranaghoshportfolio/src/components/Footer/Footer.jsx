import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import kishan from "../../assets/kishan.jpg";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="  pb-24 bg-white text-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <motion.img
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                src={kishan}
                className="h-8 w-8 rounded-full me-3"
                alt="FlowBite Logo"
              />
              <motion.span
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="self-center text-2xl font-semibold whitespace-nowrap "
              >
                Kishan Rana Ghosh
              </motion.span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <motion.h2
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-6 text-sm font-semibold text-gray-900 uppercase "
              >
                Contacts
              </motion.h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <motion.li
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mb-4"
                >
                  <a
                    href="https://www.linkedin.com/in/kishan-rana-ghosh"
                    className="hover:underline flex  items-center gap-3"
                  >
                    LinkedIn <FaLinkedin />
                  </a>
                </motion.li>
                <motion.li
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <a
                    href="https://github.com/kishanghosh090"
                    className="hover:underline flex  items-center gap-3"
                  >
                    Github
                    <FaGithub />
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 {" "}
            <a href="#" className="hover:underline">
              kishanranaghosh. 
            </a>
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
