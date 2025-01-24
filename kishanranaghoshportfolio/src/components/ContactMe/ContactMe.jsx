import React from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Form } from "react-router-dom";

function Contact() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.message) {
      if (Toaster) {
        toast.error("Please fill all the fields");
      }
      return;
    }

    setIsOpen(true);

    axios
      .post("https://portfoliobackend-l7xc.onrender.com/send-email/", formData)
      .then((response) => {
        setIsOpen(false);
        setFormData({
          username: "",
          email: "",
          message: "",
        });
        toast.success("Email sent successfully");
      })
      .catch((error) => {
        setFormData({
          username: "",
          email: "",
          message: "",
        });
        toast.error("Error sending email");
        setIsOpen(false);
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <motion.div className="bg-neutral-950 text-white  z-40">
        <Toaster />
        <div className=" isolate px-6  lg:px-8">
          {/* main content */}
          <div className="px-4 py-20 h-[100vh] flex flex-col items-center  md:w-[40%] m-auto z-50">
            <motion.h1
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 1.5 }}
              className=" text-center text-4xl my-2 mb-20"
            >
              Contact Me
            </motion.h1>
            <form
              onSubmit={handleSubmit}
              className="md:text-2xl text-xl md:w-[100%] flex flex-col gap-4 bg-neutral-900 py-4 px-4 rounded-3xl z-50 border-4 border-neutral-700"
            >
              <motion.label
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                htmlFor="name"
              >
                Enter Your Name
              </motion.label>
              <motion.input
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                name="username"
                type="text"
                className="px-4 py-2 rounded-full bg-neutral-950 focus:outline-none"
                placeholder="Your Name"
                value={formData.username}
                onChange={handleChange}
              />
              <motion.label
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                htmlFor="email"
                className="text-slate-50"
              >
                Enter Your Email
              </motion.label>
              <motion.input
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                name="email"
                type="email"
                className="px-4 py-2 rounded-full bg-neutral-950 focus:outline-none"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <motion.label
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                htmlFor="message"
                className="text-slate-50"
              >
                Enter Your Message
              </motion.label>
              <motion.textarea
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                name="message"
                className="px-4 py-2 rounded-full bg-neutral-950 focus:outline-none"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <motion.button
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                type="submit"
                className="px-4 py-2 rounded-full bg-gradient-to-tr  from-pink-500 to-blue-400 flex justify-center items-center"
              >
                Submit
                {isOpen && (
                  <svg
                    className="animate-spin h-5 w-5 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
      <BottomNavBar />
      <Footer />
    </>
  );
}

export default Contact;
