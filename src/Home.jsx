import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export function Home() {
  const [text] = useTypewriter({
    words: ["Project Manager", "Web Developer", "Process Designer"],
    loop: false,
    delaySpeed: 1500,
  });

  const style = {
    display: "inline-block",
    color: "red",
    fontFamily: "Calibri",
    fontWeight: "1000",
  };

  return (
    <div>
      <motion.div className="relative"     
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}>
        <img
          className="h-screen w-screen opacity-30 object-cover md:-ml-25"
          src="/Lightening.png"
          alt="Lighting Effect"
        />
      </motion.div>
      <motion.h1
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-black md:text-6xl md:font-bold mt-10">
        Loy Neil
      </motion.h1>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-1/2 transform -translate-x-1/4 -translate-y-1/40 text-xl">
        <div className="flex md:ml-15">
          <p className="text-xl -ml-15 mt-10 md:text-3xl md:mt-15">I am a</p>
          <p className="text-xl mt-10.5 ml-1 md:mt-15 md:text-4xl md:ml-3" style={style}>
            {text}
          </p>
        </div>
        <p className="text-black top-1/3 text-wrap -ml-25 text-lg mt-7 md:text-xl">
          I am a problem solver at heart—a Project Manager, Web Developer, and
          Process Designer who thrives on creating order out of chaos. With a
          knack for turning complex challenges into streamlined solutions, I
          bring ideas to life through efficient systems, intuitive digital
          experiences, and optimized workflows. Whether I’m leading teams to
          deliver projects on time, building dynamic web applications, or
          designing processes that scale, my goal is always the same: to make
          things work better, faster, and smarter. Let’s build something
          extraordinary together.
        </p>
      </motion.div>
    </div>
  );
}
