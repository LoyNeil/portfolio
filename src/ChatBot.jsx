import React from "react";
import { motion } from "framer-motion";
import FancyText from "@carefully-coded/react-text-gradient";

export function ChatBot() {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 2 }}
      className="m-5 p-5 mx-auto bg-gradient-to-b from-[#12100E] to-[#2B4162] min-h-screen text-white -mt-2 md:h-screen md:w-screen md:-ml-25 md:mt-1"
    >
      <motion.h1
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-center font-bold text-3xl mt-5 md:-ml-55"
      >
        <FancyText
          gradient={{ from: "#F858E0", to: "#77156C", type: "linear" }}
          animateTo={{ from: "#6DEDD0", to: "#7AE23A" }}
        >
          Chat Bot
        </FancyText>
      </motion.h1>
      <motion.h3
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5"
      >
        <FancyText
          gradient={{ from: "#FF6F61", to: "#6B5B95", type: "linear" }}
          animateTo={{ from: "#6B5B95", to: "#FFD700" }}
        >
          Problem Statement
        </FancyText>
      </motion.h3>

      <motion.p
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-base mt-2 ml-2 leading-6 font-normal md:max-w-[75%]"
      >
        Customers were looking for a quick resolution instead of waiting for
        customer service representative to get connected
      </motion.p>
      <motion.h3
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5"
      >
        <FancyText
          gradient={{ from: "#FF4500", to: "#8B008B", type: "linear" }}
          animateTo={{ from: "#00CED1", to: "#ADFF2F" }}
        >
          Business Impact
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-base mt-2 ml-2 leading-6 font-normal md:max-w-[75%]"
      >
        The overall Csat score for the organization was dipping down even though
        the customers were compensated for their issues
      </motion.p>
      <motion.h3
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5"
      >
        <FancyText
          gradient={{ from: "#FF6F61", to: "#6B5B95", type: "linear" }}
          animateTo={{ from: "#6B5B95", to: "#FFD700" }}
        >
          Solution for the impact
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-base mt-2 ml-2 leading-6 font-normal"
      >
        Why not create a AI kind of a chatbot which resolves customers query
        instantly
      </motion.p>
      <motion.h3
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5"
      >
        <FancyText
          gradient={{ from: "#FF4500", to: "#8B008B", type: "linear" }}
          animateTo={{ from: "#00CED1", to: "#ADFF2F" }}
        >
          Implementation
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-base mt-2 ml-2 leading-6 font-normal md:max-w-[75%]"
      >
        Created a AI bot which was trained on the SOPs followed by Customer
        Service Representative to resolve the customer's concern. The BOT was
        designed in such a way that it provides the resolution to the customer
        within <b>25 seconds</b> of the customer initiating the chat
        conversation
      </motion.p>
      <motion.h3
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5"
      >
        <FancyText
          gradient={{ from: "#FF0000", to: "#FF69B4", type: "linear" }}
          animateTo={{ from: "#00FF00", to: "#ADFF2F" }}
        >
          Result
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-base mt-2 ml-2 leading-6 font-normal"
      >
        The CSAT at the BOT end increased by <b>42%</b> and this also resulted
        in reduction of Head Count by <b>50</b>.
      </motion.p>
    </motion.div>
  );
}
