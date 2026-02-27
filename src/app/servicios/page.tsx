"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Cpu, Palette, Zap, Server } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: "ingenieria",
    icon: Cpu,
    title: "Ingeniería Digital",
    description: "Construimos sistemas robustos y plataformas escalables.",
    details: [
      "Sistemas web personalizados.",
      "Paneles administrativos (B2B/B2C).",
      "Plataformas SaaS completas.",
      "Arquitectura backend y modelado de datos.",
    ],
  },
  {
    id: "diseno",
    icon: Palette,
    title: "Diseño Estratégico",
    description: "Diseño UI/UX orientado a conversión y retención.",
    details: [
      "Diseño UI/UX con enfoque funcional.",
      "Prototipado interactivo.",
      "Sistemas de Diseño.",
      "Experiencia de usuario accesible.",
    ],
  },
  {
    id: "automatizacion",
    icon: Zap,
    title: "Data & Automatización",
    description: "Optimizamos tus recursos reduciendo tareas manuales.",
    details: [
      "Integraciones de APIs (Stripe, Twilio).",
      "Automatización de procesos.",
      "Flujos de onboarding.",
      "Canales automatizados.",
    ],
  },
  {
    id: "infraestructura",
    icon: Server,
    title: "Cloud & Infraestructura",
    description: "Despliegues seguros, rápidos y profesionales.",
    details: [
      "Despliegue en Vercel, AWS o GCP.",
      "Optimización (Core Web Vitals).",
      "Seguridad y privacidad.",
      "Arquitecturas escalables.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#131212]">
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Capacidades Core.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 leading-relaxed">
              Combinamos ingeniería técnica y diseño intencional para resolver
              problemas de negocio complejos.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl flex flex-col gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={0.05 * i}>
              <motion.div
                id={service.id}
                whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.1)" }}
                className="scroll-mt-32 rounded-2xl border border-white/5 bg-white/[0.03] p-8 lg:p-10 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="lg:col-span-1">
                    <div className="mb-5 inline-flex rounded-xl bg-[#261cc1]/15 p-3">
                      <service.icon size={24} className="text-[#261cc1]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-base text-white/40 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#261cc1]/15">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="#261cc1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="text-sm text-white/50 leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
