import React from "react";
import { motion } from "framer-motion";
import FancyText from "@carefully-coded/react-text-gradient";

export function Aht() {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
      className="p-4 bg-gradient-to-b from-[#667eea] to-[#764ba2] w-screen h-screen mx-0 md:-ml-25"
    >
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-3xl text-center font-bold md:-ml-50 md:m-4"
      >
        <FancyText
          gradient={{ from: "#ff9a9e", to: "#fad0c4", type: "linear" }}
          animateTo={{ from: "#fad0c4", to: "#ff9a9e" }}
        >
          AHT Reduction
        </FancyText>
      </motion.h1>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText
          gradient={{ from: "#f3ec78", to: "#af4261", type: "linear" }}
          animateTo={{ from: "#af4261", to: "#f3ec78" }}
        >
          Problem Statement
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-sm font-normal leading-6 md:m-4 text-white"
      >
        Customer's were unhappy with reaching out to the customer services team
        for order delay and no proactive approach
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText
          gradient={{ from: "#f3ec78", to: "#af4261", type: "linear" }}
          animateTo={{ from: "#af4261", to: "#f3ec78" }}
        >
          Business Impact
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-sm font-normal leading-6 md:m-4 text-white"
      >
        This impacted the FTNR along with the CSAT score of Where is My Order
        Nodelable which impact the entire CSAT score
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText
          gradient={{ from: "#f3ec78", to: "#af4261", type: "linear" }}
          animateTo={{ from: "#af4261", to: "#f3ec78" }}
        >
          Solution for the Impact
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-sm font-normal leading-6 md:m-4 text-white"
      >
        Why not monitor the order of the customer's proactively and give them
        timely update without impacting the AHT
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText
          gradient={{ from: "#f3ec78", to: "#af4261", type: "linear" }}
          animateTo={{ from: "#af4261", to: "#f3ec78" }}
        >
          Implementation
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-sm font-normal leading-6 md:max-w-[75%] md:m-4 text-white"
      >
        Created an order monitoring queue which would monitor the orders and
        provide an update to the customer whenever there is a probability delay.
        To make sure the AHT does not get impacted we introduced a snooze option
        to snooze the chats allowing other chats to hit the bucket.
      </motion.p>
      <motion.h3
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
        className="text-xl font-semibold mt-5 md:m-4"
      >
        <FancyText
          gradient={{ from: "#f3ec78", to: "#af4261", type: "linear" }}
          animateTo={{ from: "#af4261", to: "#f3ec78" }}
        >
          Result
        </FancyText>
      </motion.h3>
      <motion.p
        initial={{ x: 2000 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
        className="text-sm font-normal leading-6 md:m-4 text-white"
      >
        The AHT for order monitoring was reduced from 20 seconds to 10 seconds.
        This also positively impacted the CSAT by 15% and FTNR reduced by 1%.
      </motion.p>
    </motion.div>
  );
}
