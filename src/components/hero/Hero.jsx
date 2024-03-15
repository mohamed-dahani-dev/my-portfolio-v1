/* eslint-disable jsx-a11y/anchor-has-content */
import "./Hero.css";
import Lottie from "lottie-react";
import heroAnimation from "../../animation/Hero.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import avatar from "../../images/me/Profile pic.jpg";
import myCv from "../../cv/mohamed dahani dev.pdf";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <>
      <section id="hero" className="hero">
        <div className="left-section-hero">
          <div className="hero-avatar">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ damping: 6, type: "spring", stiffness: 100 }}
              src={avatar}
              alt=""
              className="avatar"
            />
            <div className="icon-verified"></div>
          </div>
          <motion.h1
            initial={{ transform: "translateX(-10rem)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="title"
          >
            Web Developer, Full Stack Developer
          </motion.h1>
          <motion.p
            initial={{ transform: "translateX(-10rem)", opacity: 0 }}
            animate={{ transform: "translateX(0)", opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="sub-title"
          >
            Hi, Im Mohamed Dahani, Passionate and detail-oriented web developer
            with 2 years of experience in creating and implementing innovative
            web solutions. Adept at coding, troubleshooting, and collaborating
            with cross-functional teams to drive the success of high-impact
            projects. Seeking a challenging position to leverage my skills in
            front-end and back-end development for the benefit of a dynamic and
            forward-thinking company.
          </motion.p>
        </div>
        <motion.div
          initial={{ transform: "scale(0)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ damping: 16, type: "spring", stiffness: 100 }}
          className="right-section-hero"
        >
          <Lottie
            className="hero-animation"
            loop={true}
            animationData={heroAnimation}
            // https://lottiereact.com/
            lottieRef={lottieRef}
            // onLoadedImages={() => {
            //   lottieRef.current.setSpeed(0.5);
            // }}
          />
        </motion.div>
      </section>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ damping: 12, type: "spring", stiffness: 100 }}
        className="social-media"
      >
        <a
          target="_blank"
          href="https://twitter.com/dahanidev"
          className="icon icon-x"
          rel="noreferrer"
        ></a>
        <a
          target="_blank"
          href="https://www.instagram.com/mohamed.dahani.dev?igsh=MTdhOHpzbjBoYnVqdw=="
          className="icon icon-instagram"
          rel="noreferrer"
        ></a>
        <a
          target="_blank"
          href="https://github.com/mohamed-dahani-dev"
          className="icon icon-github"
          rel="noreferrer"
        ></a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-dahani-a453512b0/"
          className="icon icon-linkedin-square"
          rel="noreferrer"
        ></a>
      </motion.div>
      <motion.div
        className="cv-button"
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ damping: 12, type: "spring", stiffness: 100 }}
      >
        <a className="download-cv" href={myCv} download="mohamed dahani dev">
          <span className="circle" aria-hidden="true">
            <span className="download-cv-icon download-cv-arrow"></span>
          </span>
          <span className="download-cv-text">DOWNLOAD CV</span>
        </a>
      </motion.div>
    </>
  );
};

export default Hero;
