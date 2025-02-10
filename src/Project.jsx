import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { motion } from "framer-motion";

export function Project() {
  return (
    <motion.div
    initial={{y:-1000}}
    animate={{y:0}}
    transition={{duration:1}}>
      <FancyText
        gradient={{ from: "#FF6F61", to: "#6B5B95", type: "linear" }}
        animateTo={{ from: "#6B5B95", to: "#FF6F61" }}
        animateDuration={2000}
      >
        <h1 className="p-2 text-xs text-center md:text-xl font-semibold md:text-pretty md:max-w-[80%]">
          Every project is an opportunity to learn, to figure out problems and
          challenges, to invent and reinvent - David Rockwell
        </h1>
      </FancyText>
      <div>
        <h1 className="text-sm font-bold p-2 md:text-xl md:-ml-10 md:mt-2">
          Projects Handled as Project Manager
        </h1>
        <div className="grid grid-cols-1 p-2 place-items-center md:grid-cols-4 md:flex md:gap-20 md:-ml-5 md:-mt-3">
          <div>
            <p className="text-center mb-2 font-semibold p-2">ChatBOT</p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-20 h-30 p-2 md:w-30 md:h-40"
              src="/chatbot.jpg"
              alt="chatbot"
            />
          </div>
          <div>
            <p className="text-center mb-2 font-semibold p-2">
              CRM Enhancement
            </p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-40 h-30 p-2 md:w-50 md:h-40"
              src="/crm.png"
              alt="crm"
            />
          </div>
          <div>
            <p className="text-center mb-2 font-semibold p-2">AHT Reduction</p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-30 h-30 p-2 md:w-40 md:h-40"
              src="/aht.jpg"
              alt="AHT Reduction"
            />
          </div>
          <div>
            <p className="text-center mb-2 font-semibold p-2">
              Escalation Reduction
            </p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-40 h-30 p-2 md:w-40 md:h-40"
              src="/escalation.jpeg"
              alt="escalation"
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-sm font-bold p-1 md:text-xl md:-ml-10">
          Projects Handled as Developer
        </h1>
        <div className="grid grid-cols-1 place-items-center md:flex md:gap-25 md:p-2 md:-ml-5 md:-mt-2">
          <div>
            <p className="text-center mb-2 font-semibold p-2">
              Quality Dashboard
            </p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-40 h-30 p-2 md:w-50 md:h-40 md:-mt-2"
              src="/quality.png"
              alt="quality"
            />
          </div>
          <div>
            <p className="text-center mb-2 font-semibold p-2">Portfolio</p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-40 h-30 p-2 md:w-50 md:h-40 md:-mt-2"
              src="/portfolio.gif"
              alt="portfolio"
            />
          </div>
          <div>
            <p className="text-center mb-2 font-semibold p-2">WeatherApp</p>
            <motion.img
            initial={{x:1000}}
            animate={{x:0}}
            transition={{duration:1}}
              className="w-40 h-30 p-2 md:w-50 md:h-40 md:-mt-2"
              src="/weather.png"
              alt="weather"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
