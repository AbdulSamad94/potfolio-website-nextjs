"use client";
import useScrollProgress from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

const Template = ({ children }) => {

    const variats = {
      hidden : {opacity: 0},
      enter : {opacity: 1},
    }
  const completion = useScrollProgress();
  return (
    <>
    <motion.div variants={variats} initial="hidden" animate={"enter"} transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
    }}>
      {children}
    </motion.div>
    <span style={{transform : `translateY(${completion - 100}%)`}} className="fixed top-0 right-0 bottom-0 w-1 transition-all duration-700 bg-primary z-50"></span>
    <div className="h-[4000px]"></div>
    </>
  );
};

export default Template