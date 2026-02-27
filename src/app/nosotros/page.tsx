"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "motion/react";

const principles = [
  {
    num: "01",
    title: "Estructura antes que escala",
    description:
      "Nunca automatizamos procesos rotos. Ordenamos las reglas de negocio antes de escribir la primera línea de código.",
  },
  {
    num: "02",
    title: "Diseño Intencional",
    description:
      "Cada botón, cada sombra y cada transición tiene una razón de ser basada en la usabilidad y la conversión.",
  },
  {
    num: "03",
    title: "Transparencia Absoluta",
    description:
      "Comunicación técnica sin jerga. Evaluamos viabilidad y reportamos riesgos con honestidad radical.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#131212]">
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Ingeniería de software con{" "}
              <span className="text-[#261cc1]">criterio de diseño.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-white/40 leading-relaxed">
              Sorin Labs nace de la intersección entre la rigurosidad de la
              ingeniería de software y la intencionalidad del diseño
              estratégico.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 lg:p-10 h-full">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white/20 mb-8">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-base text-white/45 leading-relaxed">
                <p>
                  La mayoría de los estudios construyen lo que el cliente pide
                  sin cuestionar la estructura. Las agencias crean interfaces
                  hermosas que los ingenieros no pueden escalar.
                </p>
                <p className="text-white font-medium">
                  Sorin Labs resuelve esa división.
                </p>
                <p>
                  Fundado en Costa Rica por Kirian Luna, operamos bajo una
                  premisa: el código sin diseño es inusable, y el diseño sin
                  arquitectura técnica es insostenible.
                </p>
                <p>
                  No somos una agencia de marketing ni un &quot;factory&quot; de
                  código genérico. Somos Digital Crafters — artesanos digitales
                  que entienden modelos B2B, flujos financieros, SaaS y
                  arquitecturas cloud complejas.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {principles.map((p, i) => (
              <ScrollReveal key={p.num} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.1)" }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 lg:p-8 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#261cc1]/15 text-sm font-bold text-[#261cc1]">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
