// "use client"
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

const page = () => {
  // const containerRef = useRef(null);
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
              "Welcome to my PortFolio",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
