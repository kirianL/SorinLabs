"use client";

import dynamic from "next/dynamic";

const TextRotate = dynamic(
  () => import("@/components/fancy/text-rotate"),
  { ssr: false }
);

export function HeroTextRotate() {
  return (
    <TextRotate
      texts={["futuro.", "avance.", "cambio.", "mañana."]}
      rotationInterval={2500}
      mainClassName="text-white font-bold"
    />
  );
}
