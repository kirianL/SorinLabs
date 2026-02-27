"use client";

import { Cpu, Palette, Zap, Server, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const services = [
  {
    id: "ingenieria",
    icon: Cpu,
    title: "Ingeniería Digital",
    description:
      "Sistemas web personalizados, paneles administrativos y plataformas SaaS robustas con arquitectura escalable.",
    preview: [
      "Plataformas SaaS",
      "Paneles B2B/B2C",
      "APIs & Backend",
      "Modelado de datos",
    ],
    href: "/servicios#ingenieria",
  },
  {
    id: "diseno",
    icon: Palette,
    title: "Diseño Estratégico",
    description:
      "Sistemas de diseño, prototipado interactivo y UX/UI enfocados en conversión y retención.",
    preview: [
      "UI/UX Funcional",
      "Prototipado",
      "Design Systems",
      "Accesibilidad",
    ],
    href: "/servicios#diseno",
  },
  {
    id: "automatizacion",
    icon: Zap,
    title: "Data & Automatización",
    description:
      "Integración de APIs, flujos automatizados e inteligencia artificial para optimizar recursos.",
    preview: [
      "APIs (Stripe, Twilio)",
      "Workflows",
      "Onboarding",
      "IA Aplicada",
    ],
    href: "/servicios#automatizacion",
  },
  {
    id: "infraestructura",
    icon: Server,
    title: "Cloud & Infraestructura",
    description:
      "Despliegues profesionales en Vercel, AWS o GCP. Optimización, seguridad y arquitectura cloud.",
    preview: ["Vercel / AWS / GCP", "Core Web Vitals", "CI/CD", "Seguridad"],
    href: "/servicios#infraestructura",
  },
];

function AnimatedIcon({
  icon: Icon,
  index,
}: {
  icon: typeof Cpu;
  index: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeInOut",
      }}
    >
      <Icon size={22} strokeWidth={1.5} className="text-[#261cc1]" />
    </motion.div>
  );
}

export function ServicesHighlight() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 bg-[#0e0e12]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header — Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-2 w-2 rounded-sm bg-[#261cc1]" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/30">
                Soluciones & Capacidades
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.1]"
            >
              Lo que hacemos
              <br />
              <span className="text-white/20">para nuestros clientes.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            <p className="text-base text-white/40 leading-relaxed max-w-lg lg:ml-auto">
              Sorin Labs ofrece soluciones tecnológicas integrales. No solo
              escribimos código — resolvemos problemas de negocio complejos con
              ingeniería de precisión y diseño estratégico.
            </p>
          </motion.div>
        </div>

        {/* Cards — 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="group bg-white/[0.02] border-white/[0.06] hover:border-[#261cc1]/20 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-xl bg-[#261cc1]/15 p-3">
                      <AnimatedIcon icon={service.icon} index={i} />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-white/35 leading-relaxed mt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Inner preview area */}
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.015] p-5">
                    <div className="grid grid-cols-2 gap-3">
                      {service.preview.map((item, idx) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.08 }}
                          className="flex items-center gap-2.5"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#261cc1]/10">
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
                          <span className="text-xs text-white/40 font-medium">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/20 transition-colors group-hover:text-[#261cc1]"
                  >
                    Explorar
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
