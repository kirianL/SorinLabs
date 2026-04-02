"use client";

import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Layers, GitBranch, MousePointerClick, Zap } from "lucide-react";
import Image from "next/image";

/* ─── Data ──────────────────────────────────────────────────────── */

const differentials = [
  {
    icon: Layers,
    title: "Sistemas personalizados",
    description:
      "Nada de plantillas ni soluciones genéricas. Cada proyecto se construye desde cero.",
  },
  {
    icon: GitBranch,
    title: "Arquitectura a largo plazo",
    description:
      "Estructura, código y tecnología preparados para escalar sin fricción.",
  },
  {
    icon: MousePointerClick,
    title: "Experiencia sin fricción",
    description: "Interfaces claras que guían al usuario sin esfuerzo.",
  },
  {
    icon: Zap,
    title: "Rendimiento integrado",
    description:
      "Velocidad, SEO y accesibilidad como parte del proceso, no como un añadido.",
  },
];

/* ─── Component ─────────────────────────────────────────────────── */

export function BenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yFloat = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-28 lg:py-36 bg-[#f5f5f3] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* ── Section Header ─────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12"
          >
            <h2 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111] leading-[1.15]">
              <span className="text-[#888] font-medium block mb-3 sm:mb-4 text-lg sm:text-2xl lg:text-3xl">
                Nuestro enfoque es simple.
              </span>
              Diseño y desarrollo no se trabajan por separado. Se construyen
              como un solo sistema desde el inicio.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:w-4/12 flex flex-col justify-end"
          >
            <p className="text-[15px] sm:text-base text-[#666] leading-relaxed">
              Cada decisión visual tiene una razón, y cada decisión técnica
              tiene un propósito. El resultado no es solo una web atractiva,{" "}
              <strong className="text-[#111] font-semibold">
                sino una herramienta que funciona, se adapta y evoluciona con tu
                negocio.
              </strong>
            </p>
          </motion.div>
        </div>

        {/* ── Visual Uniform 4-Column Grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-min gap-4 sm:gap-5 lg:gap-6 mb-20 sm:mb-24 lg:mb-32">
          {/* Card 1: Diseño */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col rounded-2xl bg-white border border-[#e8e8e6] p-5 lg:p-7 overflow-hidden group hover:border-[#261cc1]/30 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-all duration-300"
          >
            {/* Visual Embellishment: Skeleton UI (Top aligned) */}
            <div className="absolute -right-2 top-4 w-[70%] lg:w-[80%] flex items-start justify-end pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity">
              <div className="w-[120%] aspect-square bg-white rounded-xl border border-[#e5e5e5] shadow-lg p-3 flex flex-col gap-2 transform rotate-[6deg] group-hover:-translate-y-2 group-hover:rotate-[3deg] transition-transform duration-700">
                <div className="w-full h-3 bg-[#f0f0f0] rounded" />
                <div className="w-2/3 h-3 bg-[#f0f0f0] rounded" />
                <div className="w-full h-8 bg-[#f0f0f0] rounded mt-1" />
              </div>
            </div>

            <div className="mb-8 flex items-center justify-between relative z-10 mt-8 sm:mt-10 lg:mt-12">
              <div className="w-12 h-12 rounded-xl bg-[#261cc1] shadow-lg flex items-center justify-center">
                <MousePointerClick
                  className="w-5 h-5 text-white"
                  strokeWidth={2}
                />
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-[15px] sm:text-[17px] xl:text-[19px] font-bold text-[#111] tracking-tight mb-2 sm:mb-3 leading-snug">
                Diseño con intención
              </h3>
              <p className="text-[12px] sm:text-[13px] xl:text-[14px] text-[#555] leading-relaxed">
                Nada se coloca por estética únicamente. Cada elemento, espacio y
                jerarquía está pensado para guiar al usuario eficientemente.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Ingeniería moderna */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col rounded-2xl bg-[#111] border border-[#222] p-5 lg:p-7 overflow-hidden group hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            {/* Dark background glow */}
            <div className="absolute top-0 right-0 w-[150%] h-[120%] bg-[#261cc1]/20 rounded-full blur-[70px] -mr-16 -mt-16 transition-all duration-[1500ms] ease-out group-hover:bg-[#261cc1]/40 pointer-events-none" />

            <motion.div
              style={{ y: yFloat }}
              className="relative z-10 w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-lg mb-8 mt-8 sm:mt-10 lg:mt-12"
            >
              <GitBranch className="w-5 h-5 text-white" strokeWidth={2} />
            </motion.div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[15px] xl:text-[18px] font-bold text-white tracking-tight mb-2 text-balance leading-snug">
                Ingeniería moderna
              </h3>
              <p className="text-[12px] sm:text-[13px] xl:text-[14px] text-white/60 leading-relaxed font-light">
                Trabajamos con código escalable y tecnologías robustas para que
                tu proyecto crezca sin restricciones estructurales.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Rendimiento */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col rounded-2xl bg-[#fcfcfc] border border-[#e8e8e6] p-5 lg:p-7 overflow-hidden group hover:border-[#261cc1]/30 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-all duration-500"
          >
            {/* Visual Embellishment: Huge Watermark Metric (Top Aligned) */}
            <div className="absolute top-2 right-2 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none select-none">
              <span className="text-[90px] xl:text-[110px] font-black leading-none tracking-tighter">
                99
              </span>
            </div>

            <div className="mb-8 flex items-center justify-between relative z-10 mt-8 sm:mt-10 lg:mt-12">
              <div className="w-12 h-12 rounded-xl bg-[#261cc1] shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-[15px] xl:text-[18px] font-bold text-[#111] tracking-tight mb-2 text-balance leading-snug">
                Rendimiento integrado
              </h3>
              <p className="text-[12px] sm:text-[13px] xl:text-[14px] text-[#555] leading-relaxed">
                Velocidad, optimización y accesibilidad integrados desde el
                núcleo del desarrollo, no como añadido adicional.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Sistema hecho a medida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col rounded-2xl bg-white border border-[#e8e8e6] p-5 lg:p-7 overflow-hidden group hover:border-[#261cc1]/30 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-all duration-500"
          >
            {/* Visual embellishment: Abstract interlocking blocks (Top Aligned) */}
            <div className="absolute top-4 right-0 w-[70%] flex items-start justify-end pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity pr-4">
              <div className="relative w-full h-[100px] transform group-hover:-translate-y-2 transition-transform duration-700">
                <div className="absolute top-4 right-12 w-10 h-10 bg-indigo-100 border border-indigo-200 rounded-lg shadow-sm transform -rotate-12" />
                <div className="absolute top-10 right-4 w-10 h-10 bg-purple-100 border border-purple-200 rounded-lg shadow-sm transform rotate-12" />
                <div className="absolute top-0 right-2 w-12 h-12 bg-emerald-100 border border-emerald-200 rounded-xl shadow-sm transform rotate-3" />
              </div>
            </div>

            <div className="mb-8 flex items-center gap-4 relative z-10 mt-8 sm:mt-10 lg:mt-12">
              <div className="w-12 h-12 rounded-xl bg-[#261cc1] shadow-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="text-[15px] sm:text-[17px] xl:text-[19px] font-bold text-[#111] tracking-tight mb-2 sm:mb-3 leading-snug">
                Sistema hecho a medida
              </h3>
              <p className="text-[12px] sm:text-[13px] xl:text-[14px] text-[#555] leading-relaxed">
                Sin plantillas. Construimos soluciones adaptadas de raíz a la
                lógica y necesidades reales de tu negocio a escala.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Process/Differentials Flow ─────────────────── */}
        <div className="mt-20 sm:mt-24 lg:mt-32 relative">
          {/* Horizontal Desktop Connecting Line */}
          <div className="absolute top-10 left-[15%] right-[15%] h-px hidden lg:block border-t-[1.5px] border-dashed border-[#b3b6e8] opacity-50 z-0" />

          <div
            className="grid grid-cols-2 lg:grid-cols-4 relative z-10"
            style={{ rowGap: "80px", columnGap: "24px" }}
          >
            {differentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-col items-center text-center sm:px-4"
                >
                  {/* Fixed Circle Indicator Effect MATCHING IMAGE */}
                  <div
                    className="relative mb-6 flex items-center justify-center shrink-0 w-16 h-16 sm:w-20 sm:h-20"
                    style={{ width: "84px", height: "84px" }}
                  >
                    {/* Outer dashed ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-dashed"
                      style={{ borderColor: "#a5a9ed" }}
                    />

                    {/* Inner solid circle */}
                    <div
                      className="flex items-center justify-center rounded-full bg-white border z-10 transition-transform duration-300 hover:scale-105"
                      style={{
                        width: "52px",
                        height: "52px",
                        borderColor: "#d6d8f6",
                      }}
                    >
                      <Icon
                        className="text-[#261cc1]"
                        style={{ color: "#261cc1" }}
                        size={20}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Step number badge - Positioned right on the top-right curve of the dashed ring */}
                    <div
                      className="absolute z-20 flex items-center justify-center rounded-full font-bold shadow-sm"
                      style={{
                        top: "2px",
                        right: "2px",
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#111",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h4 className="text-[14px] sm:text-[17px] font-bold text-[#111] mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-[#888] leading-relaxed max-w-[240px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
