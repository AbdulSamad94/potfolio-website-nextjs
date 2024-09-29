"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Badge = ({
  containerStyles,
  icons,
  endCountNumber,
  endCountText,
  textOfBadge,
  sign,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icons}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-3xl leading-none font-bold text-primary">
          <CountUp end={endCountNumber} duration={3} delay={1} />
          {endCountText}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {sign}
          </motion.span>
        </div>
        <p className="max-w-[77px] text-black leading-none text-[15px] font-medium">
          {textOfBadge}
        </p>
      </div>
    </div>
  );
};

export default Badge;
