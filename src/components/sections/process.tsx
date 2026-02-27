"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Fase 1: Estrategia",
    description: "Análisis profundo y diseño de arquitectura técnica.",
    price: "01",
    features: [
      "Diagnóstico de negocio",
      "Definición de requerimientos",
      "Arquitectura de sistema",
      "Modelo de datos",
      "Mapa de proyecto",
    ],
    highlighted: false,
  },
  {
    name: "Fase 2: Construcción",
    description: "Desarrollo ágil con entregas iterativas y diseño UI/UX.",
    price: "02",
    features: [
      "Diseño de interfaz (UI)",
      "Experiencia de usuario (UX)",
      "Desarrollo Frontend",
      "Desarrollo Backend",
      "Pruebas de calidad (QA)",
    ],
    highlighted: true,
    badge: "Iterativo",
  },
  {
    name: "Fase 3: Evolución",
    description: "Despliegue, monitoreo y escalabilidad continua.",
    price: "03",
    features: [
      "Despliegue en producción",
      "Configuración de servidores",
      "Monitoreo de rendimiento",
      "Optimización de SEO",
      "Soporte y mantenimiento",
    ],
    highlighted: false,
  },
];

export function ProcessSection() {
  return (
    <section className="dark relative overflow-hidden py-24 bg-[#131212] text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Un proceso metodológico y transparente
            </h2>
            <p className="text-lg text-white/60">
              Nuestro enfoque iterativo está diseñado para mitigar riesgos,
              asegurar la calidad técnica y entregar resultados tangibles desde
              el primer día.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.15} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  tier.highlighted
                    ? "bg-[#161616] border border-brand/50 shadow-[0_0_30px_rgba(38,28,193,0.15)]"
                    : "bg-[#111111] border border-white/5"
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-0 right-6 translate-y-[-50%] transform">
                    <span className="inline-flex rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-white/60 mb-6 min-h-[40px]">
                  {tier.description}
                </p>

                <div className="mb-8 flex items-baseline text-5xl font-extrabold text-white">
                  {tier.price}
                  <span className="ml-2 text-xl font-medium text-white/40">
                    /fase
                  </span>
                </div>

                <ul className="mb-8 space-y-4 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <Check size={16} className="text-brand shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                    tier.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Conocer más →
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
