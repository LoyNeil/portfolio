import React from "react";
import { motion } from "framer-motion";
import FancyText from "@carefully-coded/react-text-gradient";

export function Escalation() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
      className="p-4 bg-gradient-to-b from-[#1E1E2F] to-[#33334D] w-screen h-screen mx-0 md:-ml-25"
    >
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-3xl text-center font-bold md:-ml-50 md:m-4"
      >
        <FancyText 
              gradient={{ from: "#FF4500", to: "#FFA500", type: "linear" }}
              animateTo={{ from: "#FFA500", to: "#FF4500" }}>
          Escalation
        </FancyText>
      </motion.h1>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText
        gradient={{ from: "#8A2BE2", to: "#DA70D6", type: "linear" }}
        animateTo={{ from: "#DA70D6", to: "#8A2BE2" }}
        >
          Problem Statement
        </FancyText>
      </motion.h3>
      <motion.p 
      initial={{x:2000}}
      animate={{x:0}}
      transition={{duration:2}}
      className="text-sm font-normal leading-6 md:m-4 text-white">
        There was an increase in the escalation from L1 to L2 level which
        impacted the Customer Services Escalation Metric
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText        
        gradient={{ from: "#8A2BE2", to: "#DA70D6", type: "linear" }}
        animateTo={{ from: "#DA70D6", to: "#8A2BE2" }}>
        Business Impact
        </FancyText>
      </motion.h3>
      <motion.p 
            initial={{x:2000}}
            animate={{x:0}}
            transition={{duration:2}}
      className="text-sm font-normal leading-6 md:m-4 text-white">
        This impacted the org financially interms of increased Head Count as
        well as a hit in CSAT metric along with FTNR
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText        
          gradient={{ from: "#8A2BE2", to: "#DA70D6", type: "linear" }}
          animateTo={{ from: "#DA70D6", to: "#8A2BE2" }}>
        Solution for the Impact
        </FancyText>
      </motion.h3>
      <motion.p 
            initial={{x:2000}}
            animate={{x:0}}
            transition={{duration:2}}
      className="text-sm font-normal leading-6 md:m-4 text-white">
        Why not use freshers in L1 to see if they adhere to the process
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText        
          gradient={{ from: "#8A2BE2", to: "#DA70D6", type: "linear" }}
          animateTo={{ from: "#DA70D6", to: "#8A2BE2" }}>
        Implementation
        </FancyText>
      </motion.h3>
      <motion.p 
            initial={{x:2000}}
            animate={{x:0}}
            transition={{duration:2}}
      className="text-sm font-normal leading-6 md:max-w-[75%] md:m-4 text-white">
        Revamped the entire process of high escalations and hired freshers to
        handle the L1 queries for the highest escalated disposition and moved
        the tenured CS with good CSAT and Quality Score to L2 Bucket
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText        
          gradient={{ from: "#8A2BE2", to: "#DA70D6", type: "linear" }}
          animateTo={{ from: "#DA70D6", to: "#8A2BE2" }}>
        Result
        </FancyText>
      </motion.h3>
      <motion.p 
            initial={{x:2000}}
            animate={{x:0}}
            transition={{duration:2}}
      className="text-sm font-normal leading-6 md:m-4 text-white">
        There was an escalation reduction of 23% increasing the CSAT at L2 by 8%
      </motion.p>
    </motion.div>
  );
}
