"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface SplitRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function SplitReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.06,
}: SplitRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { setVisible(entry.isIntersecting); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <h2 ref={ref} className={`flex flex-wrap justify-center gap-x-[0.35em] ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={visible ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}
