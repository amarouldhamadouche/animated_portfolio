import React from "react";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
import "./about.scss";
const About = () => {
  return (
    <div className="about">
      <div className="textContainer">
        I’m Amar Ould Hamadouche, a passionate software engineer with a Master 2
        in Software Engineering. Since February 2023, I’ve been honing my skills
        as a React Native developer at Developatic, where I’ve worked on diverse
        projects that blend creativity with technical expertise. My core
        competencies include HTML, CSS, React, React Native, Next.js, Firebase,
        and Git for version control. I’m committed to building high-quality,
        user-friendly applications that meet the unique needs of each project,
        and I continuously strive to stay at the forefront of technology and
        development practices.
      </div>
      <a href="/resume.pdf">See my resume</a>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Amar Ould Hamadouche
      </motion.div>
    </div>
  );
};

export default About;
