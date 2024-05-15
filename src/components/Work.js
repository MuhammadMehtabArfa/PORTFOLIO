import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 mt-12"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> Work
              </h2>
              <p className="max-w-sm mb-3">
                Explore my latest project, a dynamic fusion of design and
                technology, showcasing my passion for innovation and creativity.
              </p>

              <a
                href="https://github.com/MuhammadMehtabArfa"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <button className="btn btn-sm">View all Projects</button>
              </a>
            </div>

            <a
              href="https://ecommerece-olive.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[230px] lg:w-[500px] ">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
       transition-all duration-500 z-50"
                >
                  <span className="text-gradient">Next Ecommerce Webapp</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
       transition-all duration-700 z-50"
                >
                  <span className="text-3xl text-white">Globalx</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <a
              href="https://car-app-two.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[230px] lg:w-[500px] lg:mt-12">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img2}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">Car Sell WebApp</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">All cars</span>
                </div>
              </div>{" "}
            </a>

            <a
              href="https://dashboardmaterialui-muhammad-mehtab-arfas-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[230px] lg:w-[500px] lg:mt-2">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img3}
                  alt=""
                />
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
       transition-all duration-500 z-50"
                >
                  <span className="text-gradient">Dashboard</span>
                </div>
                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
       transition-all duration-700 z-50"
                >
                  <span className="text-3xl text-white">
                    Material UI & Recharts
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
