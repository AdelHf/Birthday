import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TypingAnimation(props) {
  const letters = Array.from(props.text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: props.delay,
        staggerChildren: props.stagger,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: props.duration },
    },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.1 } },
  };
  return (
    // the component responsible for animated the different letters on start button words, by deviding the string of words into letters then using framer
    //  motion variants to animate the different letters in sequence
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" overflow-hidden"
        exit="exit"
        key={props.Keys}
      >
        {letters.map((letter, index) => {
          return (
            <motion.div variants={item} className={props.style} key={index}>
              <motion.div whileHover={{ y: -10, color: "#fff" }}>
                {letter === " " ? "\u00A0" : letter}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}
