import React from "react";
import image from "../assets/avatar.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[80vh] lg:min-h-[70vh] flex
  items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-5 lg:flex-row 
      lg:items-center lg:gap-x-12"
        >
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] font-bold leading-[0.8] 
          lg:text-[80px] "
            >
              Muhammad Mehtab<span> Arfa</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-3 text-[25px] lg:text-[35px] 
        font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Software Engineer", 2000, "Web Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-5 max-w-lg mx-auto lg:mx-0"
            >
              A passionate software engineer with a keen eye for web
              development, shaping digital possibilities.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-6 max-w-max items-center mb-6 mx-auto
           lg:mx-0"
            >
              <Link to="contact">
                {" "}
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href="/" className="text-gradient btn-link">
                Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/muhammad-mehtab-arfa-31b376240/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/MuhammadMehtabArfa"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[240px]
        lg:max-w-[450px] mix-blend-lighten"
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
