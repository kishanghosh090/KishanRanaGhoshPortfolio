import React from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { motion } from "framer-motion";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";
// import { Form } from "react-router-dom";

function Contact() {
  return (
    <>
      <Header />
      <motion.div className="bg-neutral-950 text-white  z-40">
        <Toaster />
        <ContactForm />
      </motion.div>
      <BottomNavBar />
      <Footer />
    </>
  );
}

export default Contact;
