"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const stats = [
  { label: "CGPA",        value: "7.72" },
  { label: "Projects",    value: "5+"   },
  { label: "Internships", value: "2"    },
  { label: "SIH Wins",    value: "2×"   },
];

const skills = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "TypeScript", "JavaScript", "MongoDB", "PostgreSQL",
  "MySQL", "Tailwind CSS", "AWS", "Git",
  "C++", "Python", "REST APIs", "Docker",
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full px-4 sm:px-8 lg:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-10 lg:p-16 shadow-2xl shadow-black/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            {/* ambient glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-xl" />
            {/* photo frame */}
            <div className="relative w-56 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/dino-profile.jpg"
                alt="Dino Raj"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            {/* availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-5 -right-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md px-4 py-2.5"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wide">Available for work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          {/* label + name */}
          <div>
            <p className="mb-3 text-[0.7rem] font-medium tracking-[0.35em] uppercase text-white/35">
              About Me
            </p>
            <h2 className="mb-1 text-4xl sm:text-5xl font-bold leading-tight text-white">
              Dino Raj
            </h2>
            <p className="text-sm text-white/40 tracking-wide">
              B.Tech CSE &nbsp;·&nbsp; Chandigarh Engineering College (IKGPTU) &nbsp;·&nbsp; 2022 – 2026
            </p>
          </div>

          {/* bio */}
          <p className="leading-relaxed text-white/65 text-sm sm:text-base font-sans">
            I'm a Full Stack Developer with hands-on experience shipping production-grade
            applications across the MERN stack. I've interned at{" "}
            <span className="text-white/90 font-medium">TCIL-IT</span> and worked as a Full Stack
            Engineer at{" "}
            <span className="text-white/90 font-medium">UnibluWeb</span>, where I led
            cross-functional teams and delivered client projects end-to-end. Two-time internal{" "}
            <span className="text-white/90 font-medium">Smart India Hackathon</span> winner — I
            thrive where engineering meets real-world impact.
          </p>

          {/* stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-3 text-center hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 cursor-default"
              >
                <p className="text-xl font-bold text-white">{s.value}</p>
                <p className="mt-0.5 text-[0.6rem] font-medium tracking-widest uppercase text-white/35 group-hover:text-white/55 transition-colors">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* skill pills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: 0.45 + i * 0.025 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/55 hover:text-white hover:border-white/25 hover:bg-white/[0.09] transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="mailto:raj245098@gmail.com"
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200"
            >
              Let's Connect →
            </a>
            <a
              href="/resume.pdf"
              download="Dino_Raj_Resume.pdf"
              className="rounded-xl border border-white/10 bg-transparent px-6 py-2.5 text-sm font-medium text-white/55 hover:text-white hover:border-white/25 hover:bg-white/[0.05] transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

      </div>
      </div>
    </section>
  );
}
