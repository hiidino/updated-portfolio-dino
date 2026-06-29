"use client";

import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/ui/beams"), { ssr: false });

export default function BeamsClient() {
  return (
    <Beams
      beamWidth={2}
      beamHeight={15}
      beamNumber={3}
      lightColor="#ffffff"
      speed={1.5}
      noiseIntensity={1.2}
      scale={0.2}
      rotation={0}
    />
  );
}
