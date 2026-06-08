"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { IconBrandGithub, IconArrowUpRight } from "@tabler/icons-react";

export default function ProjectsCTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="w-full px-4 sm:px-8 lg:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-8 py-16 sm:px-16 sm:py-20 flex flex-col items-center text-center gap-8"
      >
        {/* Decorative top line */}
        <div className="flex items-center gap-3 text-white/20 text-xs tracking-[0.3em] uppercase">
          <div className="h-px w-10 bg-white/20" />
          Projects
          <div className="h-px w-10 bg-white/20" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Wanna deep dive on
          <br />
          <span className="text-white/50">what I've built?</span>
        </h2>

        <p className="text-white/40 text-sm sm:text-base max-w-md leading-relaxed">
          From full-stack web apps to open-source experiments — it's all on GitHub.
        </p>

        <a
          href="https://github.com/hiidino"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.12] hover:border-white/30 transition-all duration-300"
        >
          <IconBrandGithub className="h-5 w-5" />
          View my GitHub
          <IconArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
      </motion.div>
    </section>
  );
}
