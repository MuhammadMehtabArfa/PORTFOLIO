import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import CV from "../assets/MEHTAB_CV.pdf";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[400px]
        mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mt-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3">Passionate FrontEnd Developer</h3>
            <p className="mb-4">
              Enthusiastic about crafting seamless web experiences through the
              FrontEnd, bringing creative ideas to life with code.
            </p>

            <div className="flex gap-x-6 lg-gap-x-10 mb-5 lg:pt-8 pt-12">
              <div>
                <div
                  className="text-[35px] font-tertiary text-gradient
              mb-2"
                >
                  2k
                  {inView ? <CountUp start={0} end={24} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Year of Graduation <br />
                </div>
              </div>
              <div>
                <div
                  className="text-[35px] font-tertiary text-gradient
              mb-2"
                >
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Projects
                  <br />
                  Completed
                </div>
              </div>
              <div>
                <div
                  className="text-[35px] font-tertiary text-gradient
              mb-2"
                >
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Web Internships Completed
                  <br />
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href={CV} className="text-gradient btn-link" download>
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
