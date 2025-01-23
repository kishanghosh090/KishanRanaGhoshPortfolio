import React from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
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
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-neutral-950 text-white  z-40"
      >
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
              <label htmlFor="name">Enter Your Name</label>
              <input
                name="username"
                type="text"
                className="px-4 py-2 rounded-full bg-neutral-950 focus:outline-none"
                placeholder="Your Name"
                value={formData.username}
                onChange={handleChange}
              />
              <label htmlFor="email" className="text-slate-50">
                Enter Your Email
              </label>
              <input
                name="email"
                type="email"
                className="px-4 py-2 rounded-full bg-neutral-950 focus:outline-none"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="message" className="text-slate-50">
                Enter Your Message
              </label>
              <textarea
                name="message"
                className="px-4 py-2 rounded-full bg-neutral-950 focus:outline-none"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-gradient-to-tr  from-pink-500 to-blue-400"
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
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <BottomNavBar />
    </>
  );
}

export default Contact;
