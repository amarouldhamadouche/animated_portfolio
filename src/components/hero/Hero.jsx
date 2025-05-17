import "./hero.scss";
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

const Hero = () => {
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="subtitle">
            AMAR OULD HAMADOUCHE
          </motion.h2>
          <motion.h1 variants={textVariants} className="title">
            React Native Expert
          </motion.h1>
          <motion.p variants={textVariants} className="description">
            Specialized in crafting high-performance mobile applications with React Native.
            Building innovative solutions that push the boundaries of mobile development
            through advanced native integrations and optimized user experiences.
          </motion.p>
          <motion.div variants={textVariants} className="skills">
            <span className="skill-tag">React Native</span>
            <span className="skill-tag">Native Modules</span>
            <span className="skill-tag">Mobile Architecture</span>
            <span className="skill-tag">Performance Optimization</span>
          </motion.div>
          <motion.div variants={textVariants} className="buttons">
            <button className="primary-btn" onClick={() => handleNavigation("Portfolio")}>
              View Projects
            </button>
            <button className="secondary-btn" onClick={() => handleNavigation("Contact")}>
              Contact Me
            </button>
          </motion.div>
          <motion.div
            className="scrollButton"
            variants={textVariants}
            animate="scrollButton"
            onClick={() => handleNavigation("Portfolio")}
          >
            <img src="/scroll.png" alt="Scroll down" />
            <span>Scroll Down</span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Mobile Expert
      </motion.div>
      <div className="imageContainer">
        <motion.img
          src="/hero.png"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="background-gradient"></div>
      </div>
    </div>
  );
};

export default Hero;
