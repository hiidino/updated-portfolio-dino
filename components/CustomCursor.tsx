"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  // Skip on touch devices — no pointer to track
  if (typeof window !== "undefined" && navigator.maxTouchPoints > 0) return null;
  const dotRef   = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  const lag      = useRef({ x: -100, y: -100 });
  const mouse    = useRef({ x: -100, y: -100 });
  const rotation = useRef(0);
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) {
        hoveredRef.current = true;
        setHovered(true);
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) {
        hoveredRef.current = false;
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    let raf: number;
    const tick = () => {
      // Lerp the trailing shape
      lag.current.x += (mouse.current.x - lag.current.x) * 0.1;
      lag.current.y += (mouse.current.y - lag.current.y) * 0.1;

      // Rotate only when not hovered
      if (!hoveredRef.current) rotation.current += 0.8;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      if (shapeRef.current) {
        shapeRef.current.style.transform =
          `translate(${lag.current.x}px, ${lag.current.y}px) rotate(${rotation.current}deg)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Trailing rotating square → circle on hover */}
      <div
        ref={shapeRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         hovered ? 38 : 26,
          height:        hovered ? 38 : 26,
          marginLeft:    hovered ? -19 : -13,
          marginTop:     hovered ? -19 : -13,
          borderRadius:  hovered ? "50%" : "4px",
          border:        `1px solid rgba(255,255,255,${hovered ? 0.75 : 0.45})`,
          boxShadow:     hovered ? "0 0 14px rgba(255,255,255,0.12)" : "none",
          transition:    "width 0.3s cubic-bezier(.22,1,.36,1), height 0.3s cubic-bezier(.22,1,.36,1), margin 0.3s cubic-bezier(.22,1,.36,1), border-radius 0.3s cubic-bezier(.22,1,.36,1), border-color 0.25s, box-shadow 0.25s",
          pointerEvents: "none",
          zIndex:        9998,
          willChange:    "transform",
        }}
      />

      {/* Dot — snaps to exact cursor position */}
      <div
        ref={dotRef}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         hovered ? 5 : 4,
          height:        hovered ? 5 : 4,
          marginLeft:    hovered ? -2.5 : -2,
          marginTop:     hovered ? -2.5 : -2,
          borderRadius:  "50%",
          background:    "white",
          mixBlendMode:  "difference",
          transition:    "width 0.2s, height 0.2s, margin 0.2s",
          pointerEvents: "none",
          zIndex:        9999,
          willChange:    "transform",
        }}
      />
    </>
  );
}
