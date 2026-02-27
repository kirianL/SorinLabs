"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Compass, Layers, Sparkles, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

const processSteps = [
  {
    num: "01",
    title: "Diagnóstico Estratégico",
    description:
      "No escribimos una sola línea de código sin entender el problema de fondo. Analizamos procesos, identificamos cuellos de botella y definimos objetivos.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Arquitectura Técnica",
    description:
      "Diseñamos la base estructural del sistema. Definimos modelo de datos, stack tecnológico y planificamos escalabilidad y seguridad desde el día uno.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Diseño Estructural (UI/UX)",
    description:
      "Creamos interfaces intencionales. Priorizamos usabilidad, arquitectura de la información y conversión con prototipos de alta fidelidad.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Desarrollo e Ingeniería",
    description:
      "Construimos con estándares de la industria. Frontend interactivo, backend robusto y APIs seguras. Entregas iterativas para validar en tiempo real.",
    icon: Code2,
  },
  {
    num: "05",
    title: "Despliegue y Evolución",
    description:
      "Lanzamos a producción profesional. Monitoreamos rendimiento, resolvemos incidencias y planificamos iteraciones para que el software evolucione con tu negocio.",
    icon: Rocket,
  },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Hero */}
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-[#131212] sm:text-6xl lg:text-7xl leading-[1.05]">
              Ingeniería Predictible.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#131212]/50 leading-relaxed">
              Desarrollamos software complejo mediante un proceso estructurado
              que mitiga riesgos, asegura la calidad y entrega resultados desde
              las primeras semanas.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-4xl">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={0.05 * i}>
              <motion.div
                whileHover={{ x: 4 }}
                className="relative flex gap-6 lg:gap-10 py-10 group"
              >
                {/* Timeline line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-20 bottom-0 w-px bg-black/[0.06]" />
                )}

                {/* Number circle */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.06] bg-white text-sm font-bold text-[#261cc1] shadow-sm group-hover:border-[#261cc1]/20 group-hover:shadow-md transition-all">
                  {step.num}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-black/[0.06] bg-white p-6 lg:p-8 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#131212]">
                      {step.title}
                    </h3>
                    <step.icon
                      size={20}
                      className="text-[#131212]/20 shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-[#131212]/50 leading-relaxed">
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
