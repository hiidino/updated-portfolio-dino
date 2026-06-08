"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAME = "DINO RAJ".split("");

export default function Loader() {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    let start: number | null = null;
    const duration = 2000;
    const raf = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Phase timeline
    const t1 = setTimeout(() => setPhase("hold"), 300);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => setShow(false), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Name letters */}
          <div className="relative flex items-end gap-[0.04em] overflow-hidden">
            {NAME.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.65,
                  delay: 0.05 + i * 0.055,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: "clamp(2.5rem, 8vw, 6rem)",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#ffffff",
                  lineHeight: 1,
                  whiteSpace: "pre",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.4em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
            }}
          >
            Full Stack Developer · Portfolio
          </motion.p>

          {/* Progress bar */}
          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(140px, 25vw, 280px)",
            }}
          >
            {/* Track */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              {/* Fill */}
              <motion.div
                style={{
                  height: "100%",
                  background: "rgba(255,255,255,0.55)",
                  borderRadius: "999px",
                  transformOrigin: "left",
                  scaleX: progress,
                }}
              />
            </div>

            {/* Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                marginTop: "0.6rem",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.2)",
                textAlign: "right",
              }}
            >
              {Math.round(progress * 100)}%
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
