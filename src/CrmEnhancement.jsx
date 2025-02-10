import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";
import { motion } from "framer-motion";

export function CrmEnhancement() {
  return (
    <motion.div
    initial={{x:-1000}}
    animate={{x:0}}
    transition={{duration:2}}
     className="m-2 p-2 bg-gradient-to-l from-[#EB5757] to-[#000000] min-h-screen text-white md:-ml-25 md:-mt-1 md:m-5 md:p-5">
      <motion.h1 
      initial={{y:-1000}}
      animate={{y:0}}
      transition={{duration:2}}
      className="text-center font-bold text-3xl md:mt-5 md:-ml-55">
        <FancyText
          gradient={{ from: "#32CD32", to: "#006400", type: "linear" }}
          animateTo={{ from: "#ADFF2F", to: "#2E8B57" }}
          animateDuration={1000}
        >
          CRM Enhancement
        </FancyText>
      </motion.h1>
      <motion.h3 
      initial={{y:-1000}}
      animate={{y:0}}
      transition={{duration:2}}
      className="font-bold text-xl mt-5 md:mt-10">
        <FancyText
          gradient={{ from: "#FFA500", to: "#FFD700", type: "linear" }}
          animateTo={{ from: "#FF4500", to: "#FF6347" }}
        >
          Problem Statement
        </FancyText>
      </motion.h3>
      <motion.p 
      initial={{x:2000}} 
      animate={{x:0}} 
      transition={{duration:2}} 
      className="font-normal leading-6">
        The organization was facing a severe loss in terms of order getting
        cancelled at Customer Service team
      </motion.p>
      <motion.h3 
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{duration:2}}
      className="font-bold text-xl mt-5">
        <FancyText
          gradient={{ from: "#FFA500", to: "#FFD700", type: "linear" }}
          animateTo={{ from: "#FF4500", to: "#FF6347" }}
        >
          Business Impact
        </FancyText>
      </motion.h3>
      <motion.p
             initial={{x:2000}} 
             animate={{x:0}} 
             transition={{duration:2}}
       className="font-normal leading-6">
        The Organization was facing a loss of 5lakhs per month due to incorrect
        cancellation of orders
      </motion.p>
      <motion.h3 
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{duration:2}}
            className="font-bold text-xl mt-5">
        <FancyText
          gradient={{ from: "#FFA500", to: "#FFD700", type: "linear" }}
          animateTo={{ from: "#FF4500", to: "#FF6347" }}
        >
          Solution for the Impact
        </FancyText>
      </motion.h3>
      <motion.p       
      initial={{x:2000}} 
      animate={{x:0}} 
      transition={{duration:2}} 
      className="font-normal leading-6">
        Why not create a trigger system to caution the CS team before
        cancellation
      </motion.p>
      <motion.h3
             initial={{y:-1000}}
             animate={{y:0}}
             transition={{duration:2}}
       className="font-bold text-xl mt-5">
        <FancyText
          gradient={{ from: "#FFA500", to: "#FFD700", type: "linear" }}
          animateTo={{ from: "#FF4500", to: "#FF6347" }}
        >
          Implementation
        </FancyText>
      </motion.h3>
      <motion.p
             initial={{x:2000}} 
             animate={{x:0}} 
             transition={{duration:2}}
       className="font-normal leading-6 md:max-w-[75%]">
        Poke Yoke solution was implemented and a trigger was shown to the CS
        agent before initiating the cancellation to make sure they check the
        relevant details
      </motion.p>
      <motion.h3
            initial={{y:-1000}}
            animate={{y:0}}
            transition={{duration:2}}
      className="font-bold text-xl mt-5">
        <FancyText
          gradient={{ from: "#FFA500", to: "#FFD700", type: "linear" }}
          animateTo={{ from: "#FF4500", to: "#FF6347" }}
        >
          Result
        </FancyText>
      </motion.h3>
      <motion.p 
            initial={{x:2000}} 
            animate={{x:0}} 
            transition={{duration:2}}
      className="font-normal leading-6">
        Post Implementation we did see a savings of 4 lakhs per month which
        inversely increased the CSAT by 1% on cancelled orders
      </motion.p>
    </motion.div>
  );
}
