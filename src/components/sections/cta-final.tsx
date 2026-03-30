"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const gridY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-44 bg-[#f5f5f3] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative rounded-3xl bg-[#0a0a0f] px-8 sm:px-16 py-20 sm:py-28 overflow-hidden">
          {/* Gradient orb */}
          <motion.div 
            style={{ y: orbY }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#261cc1]/[0.06] blur-[100px] pointer-events-none" 
          />

          {/* Grid bg */}
          <motion.div
            className="absolute inset-0 z-0 opacity-40"
            style={{
              y: gridY,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.95] mb-6"
            >
              Vamos a crear algo{" "}
              <span className="text-white/20">excepcional.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base text-white/30 leading-relaxed max-w-md mx-auto mb-10"
            >
              Cuéntanos sobre tu proyecto. Diseñamos experiencias digitales bien
              construidas, desde Costa Rica para el mundo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-[15px] font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_40_rgba(255,255,255,0.12)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Empezar proyecto
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="mailto:hello@sorinlabs.com"
                className="text-sm font-medium text-white/25 hover:text-white/60 transition-colors"
              >
                hello@sorinlabs.com
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
