"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface BinaryRevealProps {
  phrases: string[];
  className?: string;
  charDelay?: number;
  frameSpeed?: number;
  resolveFrames?: number;
  holdDuration?: number;
}

export default function BinaryReveal({
  phrases,
  className = "",
  charDelay = 45,
  frameSpeed = 55,
  resolveFrames = 7,
  holdDuration = 2600,
}: BinaryRevealProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState<{ char: string; resolved: boolean }[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const rand01 = () => (Math.random() < 0.5 ? "0" : "1");

  const animate = useCallback(
    (phrase: string) => {
      const len = phrase.length;

      // Initialise with binary noise
      setDisplayed(Array.from({ length: len }, () => ({ char: rand01(), resolved: false })));

      // Resolve each character staggered
      for (let i = 0; i < len; i++) {
        const target = phrase[i];
        const start = i * charDelay;

        // Flicker frames before locking in
        for (let f = 0; f < resolveFrames; f++) {
          const t = setTimeout(() => {
            setDisplayed((prev) => {
              const next = [...prev];
              next[i] = {
                char: f < resolveFrames - 1 ? rand01() : target,
                resolved: f === resolveFrames - 1,
              };
              return next;
            });
          }, start + f * frameSpeed);
          timers.current.push(t);
        }
      }

      // Hold, then scramble back out and swap phrase
      const fullReveal = (len - 1) * charDelay + resolveFrames * frameSpeed;

      const holdTimer = setTimeout(() => {
        // Scramble out right-to-left
        for (let i = len - 1; i >= 0; i--) {
          const t = setTimeout(() => {
            setDisplayed((prev) => {
              const next = [...prev];
              next[i] = { char: rand01(), resolved: false };
              return next;
            });
          }, (len - 1 - i) * (charDelay * 0.6));
          timers.current.push(t);
        }

        const switchTimer = setTimeout(() => {
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }, len * charDelay * 0.6 + 150);
        timers.current.push(switchTimer);
      }, fullReveal + holdDuration);

      timers.current.push(holdTimer);
    },
    [charDelay, frameSpeed, resolveFrames, holdDuration, phrases.length]
  );

  useEffect(() => {
    clearTimers();
    animate(phrases[phraseIndex]);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phraseIndex]);

  return (
    <div className={`font-mono tracking-wide ${className}`}>
      {displayed.map((d, i) => (
        <span
          key={i}
          style={{
            color: d.resolved ? "rgb(209 213 219)" : "rgba(255,255,255,0.25)",
            transition: d.resolved ? "color 0.1s" : "none",
          }}
        >
          {d.char === " " ? " " : d.char}
        </span>
      ))}
    </div>
  );
}
