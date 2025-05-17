import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const textVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
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

const skills = {
  "Core": ["React Native", "React.js", "JavaScript"],
  "Mobile Development": ["Native Modules", "iOS", "Android", "App Performance"],
  "Backend & Database": ["Node.js", "Firebase", "REST APIs"],
  "Tools & Others": ["Git", "Redux", "Maestro", "CI/CD"]
};

const About = () => {
  return (
    <div className="about">
      <div className="content-wrapper">
        <motion.div 
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.p variants={textVariants}>
            Hello! I'm <span className="highlight">Amar Ould Hamadouche</span>, a passionate software engineer with a Master's degree in Software Engineering. Since <span className="highlight">February 2023</span>, I've been working as a <span className="highlight">React Native Developer</span> at Developatic, where I've had the opportunity to work on diverse and challenging projects.
          </motion.p>
          
          <motion.p variants={textVariants}>
            My journey in mobile development has been focused on creating high-performance applications that deliver exceptional user experiences. I specialize in developing custom native modules and implementing complex features that bridge the gap between native functionality and React Native's flexibility.
          </motion.p>

          <motion.div className="skills-section" variants={textVariants}>
            <h3>Technical Expertise</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, categorySkills]) =>
                categorySkills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    variants={textVariants}
                  >
                    {skill}
                  </motion.span>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="/resume.pdf"
          className="resume-button"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        React Native Expert
      </motion.div>
    </div>
  );
};

export default About;
