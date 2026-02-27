"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import TextRotate from "@/components/fancy/text-rotate";

const stack = ["Next.js", "React", "TypeScript", "AWS", "Vercel", "Figma"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0f] pt-24 pb-8 px-4 sm:px-6">
      {/* Framed container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1400px] h-[calc(100vh-8rem)] min-h-[600px] rounded-3xl border border-white/[0.08] overflow-hidden"
      >
        {/* Background image */}
        <Image
          src="/HeroSection.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1400px"
          className="object-cover object-center"
          quality={90}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 z-[1]" />

        {/* Noise */}
        <div
          className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content — centered */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center">
          {/* Small cross detail */}
          <motion.span
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 0.3, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-xl font-extralight mb-8 select-none"
          >
            +
          </motion.span>

          {/* Headline with rotating verb */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[0.92]"
          >
            <span className="block">Ingeniería</span>
            <span className="flex items-baseline justify-center gap-3 mt-1">
              <span className="text-white/25 font-bold">para el</span>
              <TextRotate
                texts={["futuro.", "avance.", "cambio.", "mañana."]}
                rotationInterval={2500}
                mainClassName="text-white font-bold"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 max-w-md text-[15px] sm:text-base text-white/40 leading-relaxed font-light"
          >
            Construimos plataformas y sistemas digitales con precisión técnica y
            diseño intencional.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.1] backdrop-blur-sm border border-white/[0.15] px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.18] hover:border-white/25"
            >
              Empezar proyecto
            </Link>
            <Link
              href="/portafolio"
              className="text-sm font-medium text-white/25 hover:text-white/50 transition-colors"
            >
              Ver portafolio →
            </Link>
          </motion.div>
        </div>

        {/* Corner labels */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute top-6 left-7 z-10 text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium"
        >
          Sorin Labs ©
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute top-6 right-7 z-10 text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium"
        >
          Costa Rica
        </motion.span>

        {/* Bottom scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-0 right-0 z-10 overflow-hidden"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 sm:gap-14 whitespace-nowrap w-max px-7"
          >
            {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-[10px] font-medium tracking-[0.2em] text-white/15 uppercase"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
