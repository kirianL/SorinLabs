"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Compass, Layers, Sparkles, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

const processSteps = [
  {
    num: "01",
    title: "Diagnóstico Estratégico",
    description:
      "Analizamos procesos, identificamos cuellos de botella y definimos objetivos antes de escribir código.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Arquitectura Técnica",
    description:
      "Diseñamos la base estructural: modelo de datos, stack tecnológico, escalabilidad y seguridad desde el día uno.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Diseño Estructural (UI/UX)",
    description:
      "Creamos interfaces intencionales. Priorizamos usabilidad, arquitectura de la información y conversión.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Desarrollo e Ingeniería",
    description:
      "Frontend interactivo, backend robusto y APIs seguras. Entregas iterativas para validar en tiempo real.",
    icon: Code2,
  },
  {
    num: "05",
    title: "Despliegue y Evolución",
    description:
      "Lanzamos a producción profesional. Monitoreamos rendimiento y planificamos iteraciones.",
    icon: Rocket,
  },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#131212]">
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Ingeniería Predictible.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 leading-relaxed">
              Un proceso estructurado que mitiga riesgos, asegura la calidad y
              entrega resultados desde las primeras semanas.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-4xl">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={0.05 * i}>
              <motion.div
                whileHover={{ x: 4 }}
                className="relative flex gap-6 lg:gap-10 py-10 group"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-20 bottom-0 w-px bg-white/5" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm font-bold text-[#261cc1] group-hover:border-[#261cc1]/30 transition-all">
                  {step.num}
                </div>
                <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.03] p-6 lg:p-8 group-hover:border-white/10 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <step.icon
                      size={20}
                      className="text-white/15 shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
