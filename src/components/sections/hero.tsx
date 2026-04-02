"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import TextRotate from "@/components/fancy/text-rotate";

const stack = ["Next.js", "React", "TypeScript", "AWS", "Vercel", "Figma"];

export function HeroSection() {
  return (
    <section 
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
      className="relative bg-[#0a0a0f] flex flex-col pt-24 pb-8 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Framed container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full flex-1 flex flex-col rounded-[2.5rem] border border-white/[0.08] overflow-hidden"
      >
        {/* Background image — Fixed (No parallax) */}
        <div className="absolute inset-0">
          <Image
            src="/HeroSection.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Base dark wash — subtle, lets the image breathe */}
        <div className="absolute inset-0 bg-[#0a0a0f]/35 z-[1]" />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/20 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/30 via-transparent to-[#0a0a0f]/30 z-[2]" />

        {/* Noise */}
        <div
          className="absolute inset-0 z-[3] opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative Elements — Static */}
        <div className="absolute top-[20%] right-[15%] z-10 text-white/10 text-4xl font-extralight select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-[30%] left-[10%] z-10 text-white/5 text-6xl font-extralight select-none hidden md:block">
          -
        </div>

        {/* Content — centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-12 text-center pb-8 md:pb-4">
          {/* Small cross detail */}
          <motion.span
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 0.3, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white text-lg md:text-xl font-extralight mb-4 md:mb-6 select-none"
          >
            +
          </motion.span>

          {/* Headline with rotating verb */}
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.12]"
          >
            <span className="block mb-1 sm:mb-2">Ingeniería</span>
            <span className="flex flex-col sm:flex-row items-center justify-center sm:items-baseline gap-2 sm:gap-4 mt-2 sm:mt-4">
              <span className="text-white/30 font-bold whitespace-nowrap">
                para el
              </span>
              <TextRotate
                texts={["futuro.", "avance.", "cambio.", "mañana."]}
                rotationInterval={2500}
                mainClassName="text-white font-bold"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-5 md:mt-8 max-w-md text-[14px] sm:text-base text-white/40 leading-relaxed font-light"
          >
            Construimos plataformas y sistemas digitales con precisión técnica y
            diseño intencional.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.1] backdrop-blur-sm border border-white/[0.15] px-7 py-3 md:px-8 md:py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.18] hover:border-white/25"
            >
              Empezar proyecto
            </Link>
            <Link
              href="/portafolio"
              className="text-[13px] md:text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
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
          className="absolute top-6 left-7 z-10 text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium hidden sm:block"
        >
          Sorin Labs ©
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute top-6 right-7 z-10 text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium hidden sm:block"
        >
          Costa Rica
        </motion.span>

        {/* Bottom scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-4 left-0 right-0 z-10 overflow-hidden"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 sm:gap-14 whitespace-nowrap w-max px-7"
          >
            {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-white/15 uppercase"
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
