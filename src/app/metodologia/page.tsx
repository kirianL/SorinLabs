"use client";

import { motion } from "motion/react";
import {
  Compass,
  Layers,
  Sparkles,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    num: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, tus usuarios y tus objetivos. Definimos cómo debería sentirse la experiencia antes de diseñar una sola pantalla.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Estrategia & Estructura",
    description:
      "Planificamos la arquitectura del sitio, la navegación y la estructura de contenido para que todo tenga sentido desde el primer clic.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Diseño Visual (UI/UX)",
    description:
      "Creamos interfaces con intención. Cada espacio, cada interacción y cada transición tiene un propósito claro enfocado en la experiencia.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Desarrollo Web",
    description:
      "Construimos con tecnología moderna: sitios rápidos, eficientes y preparados para evolucionar. Entregas iterativas para validar en tiempo real.",
    icon: Code2,
  },
  {
    num: "05",
    title: "Lanzamiento & Evolución",
    description:
      "Publicamos, optimizamos el rendimiento y te acompañamos después del lanzamiento para que tu sitio siga mejorando.",
    icon: Rocket,
  },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Nuestra Metodología.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base text-white/35 leading-relaxed lg:mt-4"
            >
              Cada proyecto se diseña cuidadosamente antes de construirse. Un
              proceso pensado para crear experiencias digitales claras, modernas
              y funcionales.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex gap-6 lg:gap-8 mb-5 last:mb-0"
            >
              {/* Connecting line */}
              {i < processSteps.length - 1 && (
                <div className="absolute left-5 top-20 bottom-0 w-px bg-[#ddd]" />
              )}

              {/* Indicator */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f5f3] border-2 border-[#ddd] group-hover:border-[#261cc1]/40 transition-colors">
                <span className="text-xs font-bold text-[#261cc1]">
                  {step.num}
                </span>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-2xl border border-[#e8e8e6] bg-white p-6 lg:p-8 group-hover:border-[#261cc1]/20 group-hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-[#111] tracking-tight">
                    {step.title}
                  </h3>
                  <step.icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#ccc] shrink-0 mt-1"
                  />
                </div>
                <p className="text-[14px] text-[#777] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            ¿Quieres saber más?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:scale-[1.02]"
            >
              Hablemos de tu proyecto
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
