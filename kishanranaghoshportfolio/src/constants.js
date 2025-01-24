import IITM from "./assets/iitm.jpg";
import GOUR from "./assets/gour.jpg";
import gemini from "./assets/gemini-clone.png";
import socialMediaApp from "./assets/socialApp.png";
import weather from "./assets/weatherApp.png";

export const HERO_CONTENT =
  "I am a Developer, and I love to drink coffee, I live in Malda.Passinate React JS developer with 2 year of experience,dedicated to make impressive web experience and solving complex challenges.";

// -----------------education details---------------
export const EDUCATION_DETAILS = [
  {
    collageName: "IIT Madras",
    collageImg: `${IITM}`,
    year: "2024-2028",
    aboutCollage:
      "I'm a dedicated college student of IITM with a passion for exploring data-driven solution! As a college student about data science, I've been exploring various projects.",
  },
  {
    collageName: "Gour Mahavidyalaya",
    collageImg: `${GOUR}`,
    year: "2024-2028",
    aboutCollage:
      "A dedicated 1st-year Computer Science student with a growing expertise in software development and problem-solving. Proficient in technologies like javascript, Python, and Linux systems, with hands-on experience in various projects. Eager to expand my skills and contribute to cutting-edge technological solutions",
  },
];

// ---------------Projects-------------
export const PROJECTS = [
  {
    name: "Gemini Clone (API Integration)",
    description:
      " This project is a clone of the Gemini UI, designed to provide users with an intuitive and responsive interface Utilizing the Gemini API,the application offers real-time data, the interface is crafted to mirror the original Gemini platform while incorporating unique enhancements for improved usability. Explore the power of cryptocurrency trading with this sleek, functional, and visually appealing clone",
    image: `${gemini}`,
    codeLink: "https://github.com/kishanghosh090/gemini",
    tech: ["react", "tailwind", "node", "express"],
  },
  {
    name: "Weather App (API)",
    description: `Curious about tomorrow's weather? Need to know if it's a good day for soccer practice? Our app is here to help! Just enter your city or , and it'll give you the latest forecast.click get code button to get code of this APP`,
    image: `${weather}`,
    codeLink: "https://github.com/kishanghosh090/weatherAppProject",
    tech: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    name: "Social Media App",
    description: `I've been working on building a modern social media platform that combines functionality, performance, and clean design. Here's what my project includes and what I've learned along the way. technologies used: React, Tailwind CSS, node.js, and express.js. jwt for authentication.`,
    image: `${socialMediaApp}`,
    codeLink: "https://github.com/kishanghosh090/FULLSTACK_SCOCIAL_MEDIA_APP",
    tech: ["react", "tailwind", "node", "express"],
  },
];
