"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sorin Labs transformó nuestra presencia digital. El diseño no solo se ve increíble, sino que nuestros clientes lo notan — la experiencia es clara, rápida e intuitiva.",
    name: "María Fernandez",
    role: "CEO",
    company: "NovaTech Solutions",
    avatar: "MF",
  },
  {
    quote:
      "El proceso fue transparente de principio a fin. Nos sentimos parte de cada decisión y el resultado superó nuestras expectativas. Un equipo excepcional.",
    name: "Carlos Ramírez",
    role: "Director de Marketing",
    company: "Clarity Digital",
    avatar: "CR",
  },
  {
    quote:
      "No es solo un sitio web bonito — funciona. Tiempos de carga mínimos, SEO optimizado y un diseño que realmente refleja quiénes somos como empresa.",
    name: "Ana López",
    role: "Fundadora",
    company: "Verde Estudio",
    avatar: "AL",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="relative py-28 lg:py-36 bg-[#0a0a0f]">
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

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Lo que dicen nuestros clientes.
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-12 lg:p-14"
        >
          {/* Quote icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#261cc1]/10 border border-[#261cc1]/15 mb-8">
            <Quote size={18} className="text-[#261cc1]" />
          </div>

          {/* AnimatePresence for smooth transitions */}
          <div className="min-h-[180px] sm:min-h-[140px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-medium mb-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#261cc1] text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[13px] text-white/35">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/[0.06]">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-[#261cc1] w-6"
                      : "bg-white/10 w-1.5 hover:bg-white/25"
                  }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:border-white/15 transition-all"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 hover:text-white hover:border-white/15 transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
