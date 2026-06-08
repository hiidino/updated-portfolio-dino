"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";

// Heavy WebGL / Three.js / animation components — loaded client-side only,
// each in its own JS chunk so the initial page parse stays lean.
const TextPressure   = dynamic(() => import("@/components/TextPressure"),   { ssr: false });
const BinaryReveal   = dynamic(() => import("@/components/BinaryReveal"),   { ssr: false });
const Antigravity    = dynamic(() => import("@/components/Antigravity"),    { ssr: false });
const SplitReveal    = dynamic(() => import("@/components/SplitReveal"),    { ssr: false });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const AboutSection    = dynamic(() => import("@/components/AboutSection"),    { ssr: false });
const ProjectsCTA     = dynamic(() => import("@/components/ProjectsCTA"),     { ssr: false });
const DomeGallery    = dynamic(() => import("@/components/DomeGallery"),    { ssr: false });

const page = () => {
  // const containerRef = useRef(null);
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
  const data = [
    {
      title: "2022 & 23",
      content: (
        <div>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Joined I.K. Gujral Punjab Technical University as an undergraduate
            in Bachelor's of technology in Computer Science.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Became a Certified Amazon Web Services Cloud Practitioner{" "}
            {"(Cloud Foundations, Cloud Operations & Data Engineering)."}
          </p>
          <p className="mb-8 text-xs max-w-full font-normal text-neutral-800 md:text-sm">
            - Completed a MERN + DevOps Cohort from 100xdevs, contributing to
            real world projects on cohort's private repositories.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/dino_100xdevs.png"
              alt="100xdevs certificate"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/dino-aws-co.png"
              alt="aws certificate 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/dino-aws-cf.png"
              alt="aws certificate 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/images/dino-aws-de.png"
              alt="aws certificate 3"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Joined TCIL-IT, Chandigarh as a Full Stack Developer Intern{" "}
            {"(05/2024 - 07/2024)"}
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Worked on a blogging web application using Node.js and Express.js,
            enabling real-time post creation, updates, and interactions.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Contributed to building schemas and developing features using the
            MERN stack.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Developed user interfaces using React.js, ensuring a responsive
            frontend experience for the messaging platform.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            - Implemented necessary rate limiters and load balancers to ensure
            scalability and performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Joined UnibluWeb as a Full Stack Engineer {"(06/2024 - 12/2024)"}
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Led end-to-end product development, defining technical strategies
            for scalable web applications.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Designed, developed, and deployed MERN stack-based projects,
            including DKS Security’s website, enhancing client engagement and
            business operations.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm">
            - Directed a cross-functional team of developers, designers, and
            marketers, ensuring 100% on-time project delivery.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm">
            - Utilized Google Ads, Google Analytics, Google Marketing Platform,
            and SEO strategies to optimize campaigns, track performance, and
            improve website visibility and conversion rates during my time at
            Unibluweb.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/dino-uniblu.png"
              alt="uniblu certificate"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div
        id="hero"
        className="relative flex items-center justify-center"
        style={{ height: "100svh", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
      >
        <div className="relative z-0 w-full h-[40vh]">
          <TextPressure
            text="Hello!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <div className="absolute bottom-10 z-10 flex md:hidden flex-col items-center gap-3 text-white/60">
          <p className="text-sm tracking-[0.25em] uppercase">Scroll to explore</p>
          <div className="animate-bounce">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div id="about-content" className="flex flex-col justify-center items-center w-full">
        <div className="w-full max-w-5xl px-4 text-center overflow-hidden">
          <BinaryReveal
            phrases={["I'm Dino Raj !!", "Software Engineer & Full Stack Developer"]}
            className="font-bold text-[clamp(1rem,3vw,2.75rem)]"
            charDelay={45}
            frameSpeed={55}
            resolveFrames={7}
            holdDuration={2600}
          />
        </div>
        <div className="text-white mt-8 md:mt-16 max-w-6xl w-full px-4 sm:px-8 text-center text-sm sm:text-base">
          <div
            style={{ position: "relative", width: "100%", minHeight: "262px" }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 20,
                pointerEvents: "none",
              }}
            >
              <div style={{ width: "100%", height: "100%" }}>
                <Antigravity
                  count={80}
                  magnetRadius={6}
                  ringRadius={7}
                  waveSpeed={0.4}
                  waveAmplitude={1}
                  particleSize={1.5}
                  lerpSpeed={0.05}
                  color={"#FFFFFF"}
                  autoAnimate={true}
                  particleVariance={1}
                />
              </div>
            </div>
            <div
              style={{ position: "relative", zIndex: 10, paddingTop: "1rem" }}
            >
              <p className="font-sans text-white/80 leading-relaxed tracking-wide">
                Full Stack Developer with 2+ years of hands-on experience
                designing, building, and shipping production-grade web
                applications. I have delivered 10+ projects end-to-end —
                spanning client engagements, SaaS products, and open-source
                work — with a consistent focus on performance, scalability, and
                clean architecture. Grounded in Computer Science fundamentals
                and driven by a genuine passion for engineering, I thrive in
                fast-moving environments where ownership and impact matter.
              </p>
            </div>
            <br />
            <a
              href="mailto:raj245098@gmail.com"
              style={{ position: "relative", zIndex: 30 }}
              className="inline-block border-2 border-stone-50 px-5 py-2.5 text-sm font-semibold text-white rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Let's Connect →
            </a>
          </div>
        </div>
      </div>
      <div id="journey" className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
      {/* <BlurText
        text="Services Offered"
        delay={150}
        animateBy="words"
        direction="top"
        // onAnimationComplete={handleAnimationComplete}
        className="flex justify-center items-center mt-15 text-white text-7xl font-bold mb-8"
      /> */}
      <div id="services" className="text-white mt-15 flex justify-center items-center font-bold px-4 text-center">
        <SplitReveal
          className="text-[clamp(1.6rem,4vw,3rem)] leading-tight tracking-widest uppercase"
          delay={0.1}
          stagger={0.08}
        >
          PROFESSIONAL OFFERINGS
        </SplitReveal>
      </div>
      <ServicesSection />
      <AboutSection />
      <ProjectsCTA />
    </div>
  );
};

export default page;
