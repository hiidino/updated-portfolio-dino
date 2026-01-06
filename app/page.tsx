// "use client";
import React from "react";
import Beams from "@/components/ui/beams";
import TextPressure from "@/components/TextPressure";
import { Target } from "lucide-react";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import ScrollFloat from "@/components/ScrollFloat";
import ASCIIText from "@/components/ASCIIText";
import VariableProximity from "@/components/VariableProximity";
import TextType from "@/components/TextType";
import ScrambledText from "@/components/ScrambledText";
import Antigravity from "@/components/Antigravity";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import CircularGallery from "@/components/CircularGallery";
import DomeGallery from "@/components/DomeGallery";

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
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Joined I.K. Gujral Punjab Technical University as an undergraduate
            in Bachelor's of technology in Computer Science.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Became a Certified Amazon Web Services Cloud Practitioner{" "}
            {"(Cloud Foundations, Cloud Operations & Data Engineering)."}
          </p>
          <p className="mb-8 text-xs max-w-full font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
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
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Joined TCIL-IT, Chandigarh as a Full Stack Developer Intern{" "}
            {"(05/2024 - 07/2024)"}
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Worked on a blogging web application using Node.js and Express.js,
            enabling real-time post creation, updates, and interactions.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Contributed to building schemas and developing features using the
            MERN stack.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Developed user interfaces using React.js, ensuring a responsive
            frontend experience for the messaging platform.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
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
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Joined UnibluWeb as a Full Stack Engineer {"(06/2024 - 12/2024)"}
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Led end-to-end product development, defining technical strategies
            for scalable web applications.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Designed, developed, and deployed MERN stack-based projects,
            including DKS Security’s website, enhancing client engagement and
            business operations.
          </p>
          <p className="mb-3 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            - Directed a cross-functional team of developers, designers, and
            marketers, ensuring 100% on-time project delivery.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
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
        style={{ position: "relative", height: "100vh", paddingTop: "5rem" }}
      >
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
      <div className="flex flex-col justify-center items-center">
        <div>
          <TextType
            className="text-7xl  font-bold text-gray-300 "
            text={[
              // "Welcome to my PortFolio",
              "I'm Dino Raj !!",
              "Full Stack Developer & Coding Enthusiast",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div className="text-white mt-16 max-w-6xl px-4 text-center">
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
                  count={300}
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
              <p>
                With 3+ years of experience, I have developed and deployed over
                10+ projects, including client work at Unibluweb. I am
                passionate about coding and I'm always curious to learn and
                grow. With a focus on Full Stack Development, I specialize in
                creating dynamic and interactive web applications. With strong
                foundations in Computer Science and Engineering, I bring a
                problem-solving mindset to every project I undertake.
              </p>
            </div>
            <br />
            <Button className="border-2 border-stone-50 p-5 cursor-pointer">
              Let's Connect ?{" "}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-clip">
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
      <div className="text-white mt-15 flex justify-center items-center font-bold">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          PROFESSIONAL OFFERINGS 
        </ScrollFloat>
      </div>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={2}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <center><h1 className="text-white text-6xl font-bold mb-15 mt-15">Skills & Technologies</h1></center>
        <DomeGallery />
      </div>
    </div>
  );
};

export default page;
