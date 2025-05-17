import { useRef, useEffect, useState } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const Parallax = ({ text }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Add spring physics for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
    mass: 0.5
  });

  // Initial animation values
  const initialY = isMobile ? "5%" : "10%";
  const initialScale = 0.95;
  const initialOpacity = 0.6;

  // Reduced movement for mobile
  const yText = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [initialY, "0%", isMobile ? "15%" : "500%"]
  );

  const mountainsY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [initialY, "0%", isMobile ? "3%" : "50%"]
  );

  const planetsY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [initialY, "0%", isMobile ? "8%" : "100%"]
  );

  const starsX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [initialY, "0%", isMobile ? "3%" : "50%"]
  );

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ 
          y: yText,
          opacity: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [initialOpacity, 1, 0.9]
          )
        }}
        className={isMobile ? "mobile-title" : ""}
      >
        {text}
      </motion.h1>
      <motion.div 
        initial={{ y: 30, scale: initialScale }}
        animate={isInView ? { y: 0, scale: 1 } : { y: 30, scale: initialScale }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mountains"
        style={{
          y: mountainsY,
          scale: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [initialScale, 1, isMobile ? 1.02 : 1.2]
          )
        }}
      />
      <motion.div
        initial={{ y: 20, scale: initialScale }}
        animate={isInView ? { y: 0, scale: 1 } : { y: 20, scale: initialScale }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="planets"
        style={{
          y: planetsY,
          scale: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [initialScale, 1, isMobile ? 1.03 : 1.1]
          ),
          opacity: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [initialOpacity, 1, 0.8]
          ),
          backgroundImage: `url(${
            text === "What We Do?" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div 
        initial={{ x: -20, scale: initialScale }}
        animate={isInView ? { x: 0, scale: 1 } : { x: -20, scale: initialScale }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="stars" 
        style={{ 
          x: starsX,
          scale: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [initialScale, 1, isMobile ? 1.05 : 1.2]
          ),
          opacity: useTransform(
            smoothProgress,
            [0, 0.5, 1],
            [initialOpacity, 1, 0.8]
          )
        }} 
      />
    </div>
  );
};

export default Parallax;
