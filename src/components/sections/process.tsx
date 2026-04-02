"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Descubrimiento",
    description:
      "Entender el proyecto, los objetivos y cómo debe sentirse la experiencia para el usuario final.",
    details: [
      "Entender el negocio y sus usuarios",
      "Definir objetivos del proyecto",
      "Diseño de estructura y navegación",
    ],
  },
  {
    num: "02",
    title: "Diseño & Desarrollo",
    description:
      "Diseño visual, desarrollo web y pruebas iterativas para un resultado cuidado y funcional.",
    details: [
      "Diseño de interfaz (UI/UX)",
      "Desarrollo frontend moderno",
      "Revisión y ajustes de calidad",
    ],
  },
  {
    num: "03",
    title: "Lanzamiento",
    description:
      "Publicación, optimización y acompañamiento post-lanzamiento para que tu sitio siga mejorando.",
    details: [
      "Publicación del sitio web",
      "Optimización de rendimiento",
      "Soporte post-lanzamiento",
    ],
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#f7f7f5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#261cc1]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#261cc1]">
                Nuestro proceso
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#1a1a1a] leading-[1.08]"
            >
              Cada proyecto se diseña{" "}
              <span className="text-[#261cc1]">antes</span> de construirse.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-end"
          >
            <p className="text-[17px] text-[#555] leading-[1.7]">
              Nuestro proceso está pensado para crear experiencias digitales
              claras, funcionales y visualmente bien pensadas — desde la primera
              conversación hasta el lanzamiento.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative flex flex-col"
            >
              {/* Card */}
              <div className="relative flex flex-col h-full rounded-2xl bg-white border border-[#e8e8e6] p-8 lg:p-10 transition-all duration-300 hover:border-[#261cc1]/20 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)]">
                {/* Step number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[3.5rem] font-bold text-[#261cc1]/10 leading-none tracking-tighter">
                    {step.num}
                  </span>
                  {i === 1 && (
                    <span className="inline-flex rounded-full bg-[#261cc1] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Iterativo
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#777] leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-3 mt-auto">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#261cc1]/[0.06] mt-0.5">
                        <Check
                          size={11}
                          strokeWidth={2.5}
                          className="text-[#261cc1]"
                        />
                      </span>
                      <span className="text-sm text-[#555] leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector line (between cards on desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-[#ddd]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/metodologia"
            className="group inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#261cc1] hover:shadow-[0_8px_30px_rgba(38,28,193,0.25)]"
          >
            Ver metodología completa
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
