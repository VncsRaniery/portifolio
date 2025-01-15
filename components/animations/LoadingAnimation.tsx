"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  name: string;
  onComplete: () => void;
}

export default function LoadingAnimation({
  name,
  onComplete,
}: LoadingAnimationProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const animationDuration = 2500;
    const exitDuration = 1000;

    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, exitDuration);
    }, animationDuration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      initial="hidden"
      animate={isComplete ? "exit" : "visible"}
      variants={containerVariants}
    >
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="text-6xl md:text-8xl font-bold"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
