"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TypewriterTitle from "@/components/kokonutui/typewriter-title";
import { motion } from "motion/react";

const heroSequences = [
  { text: "Ingeniería Digital.", deleteAfter: true, pauseAfter: 2000 },
  { text: "Diseño Premium.", deleteAfter: false },
];

const trustedLogos = [
  "Next.js",
  "React",
  "TypeScript",
  "AWS",
  "Vercel",
  "Figma",
];

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[1200px] w-full overflow-hidden bg-[#050510]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroSection.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050510]/80 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#131212] via-[#050510]/80 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-black/20 z-[1]" />
        <div
          className="absolute inset-0 z-[2] opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <TypewriterTitle
              sequences={heroSequences}
              typingSpeed={55}
              startDelay={800}
              deleteSpeed={25}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mx-auto mt-0 max-w-lg text-base sm:text-lg text-white/50 leading-relaxed font-light"
          >
            Construimos plataformas digitales que combinan ingeniería de
            precisión con experiencias excepcionales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black tracking-wide transition-all hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                Empezar Proyecto
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white/70 transition-all hover:border-white/25 hover:text-white hover:bg-white/10"
            >
              Ver Portafolio
            </Link>
          </motion.div>
        </div>

        {/* Horizontal scrolling marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 overflow-hidden"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 sm:gap-16 whitespace-nowrap w-max"
          >
            {[
              ...trustedLogos,
              ...trustedLogos,
              ...trustedLogos,
              ...trustedLogos,
            ].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="text-[11px] font-medium tracking-widest text-white/20 uppercase"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
