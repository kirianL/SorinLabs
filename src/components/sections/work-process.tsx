"use client";

import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Estrategia y análisis",
    description:
      "Entendemos tu negocio, investigamos tu mercado y definimos los objetivos del proyecto antes de diseñar una sola pantalla.",
  },
  {
    num: "02",
    title: "Diseño de experiencia",
    description:
      "Creamos wireframes, prototipos y diseños visuales centrados en la experiencia del usuario y la claridad.",
  },
  {
    num: "03",
    title: "Desarrollo moderno",
    description:
      "Construimos con React, Next.js y tecnología actual: código limpio, rápido y preparado para el futuro.",
  },
  {
    num: "04",
    title: "Optimización y lanzamiento",
    description:
      "Aseguramos rendimiento, accesibilidad y SEO antes de publicar. Luego acompañamos el crecimiento.",
  },
];

export function WorkProcess() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0a0a0f] overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: title & description */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <motion.h2
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Un proceso diseñado para resultados{" "}
              <span className="text-white/25">reales.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base text-white/30 leading-relaxed mb-6"
            >
              Cada proyecto pasa por un proceso claro y colaborativo que asegura
              que el resultado final funcione tan bien como se ve.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#261cc1] animate-pulse" />
                <span className="text-[13px] font-medium text-white/40">
                  Iterativo
                </span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[13px] font-medium text-white/40">
                  Colaborativo
                </span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-[13px] font-medium text-white/40">
                  Transparente
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: steps with connecting line */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-[#261cc1]/30 via-white/10 to-transparent hidden lg:block" />

              <div className="space-y-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: i * 0.12,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative flex gap-6 lg:gap-8"
                  >
                    {/* Step indicator */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0a0f] border-2 border-white/[0.08] group-hover:border-[#261cc1]/40 transition-colors">
                      <span className="text-xs font-bold text-[#261cc1]">
                        {step.num}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 lg:p-8 group-hover:border-white/[0.12] group-hover:bg-white/[0.04] transition-all duration-300">
                      <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-white/30 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
