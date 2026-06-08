"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TextRevealProps {
  phrases: string[];
  className?: string;
  wordDelay?: number;
  holdDuration?: number;
}

export default function TextReveal({
  phrases,
  className = "",
  wordDelay = 0.08,
  holdDuration = 2200,
}: TextRevealProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const words = phrases[index].split(" ");
    const revealTime = words.length * wordDelay * 1000;
    const totalHold = revealTime + holdDuration;

    const hideTimer = setTimeout(() => setVisible(false), totalHold);
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % phrases.length);
      setVisible(true);
    }, totalHold + 500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [index, phrases, wordDelay, holdDuration]);

  const words = phrases[index].split(" ");

  return (
    <div className={`overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            exit={{ opacity: 0, filter: "blur(8px)", y: -10, transition: { duration: 0.4 } }}
            className="flex flex-wrap justify-center gap-x-[0.3em]"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: i * wordDelay,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
