import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//------------------- components -----------------------
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/ContactMe/ContactMe.jsx";
import Project from "./components/Project/Project.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contactme" element={<Contact />} />
          <Route path="Projects" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
