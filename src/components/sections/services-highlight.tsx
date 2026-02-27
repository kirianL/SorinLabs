"use client";

import { Cpu, Palette, Zap, Server, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    id: "ingenieria",
    icon: Cpu,
    title: "Ingeniería Digital",
    description:
      "Sistemas web personalizados, paneles administrativos y plataformas SaaS robustas con arquitectura escalable.",
    href: "/servicios#ingenieria",
    span: "lg:col-span-2",
  },
  {
    id: "diseno",
    icon: Palette,
    title: "Diseño Estratégico",
    description:
      "Sistemas de diseño, prototipado y UX/UI enfocados en conversión, usabilidad y retención.",
    href: "/servicios#diseno",
    span: "lg:col-span-1",
  },
  {
    id: "automatizacion",
    icon: Zap,
    title: "Data & IA",
    description:
      "Integración de APIs, flujos automatizados e inteligencia artificial para optimizar recursos.",
    href: "/servicios#automatizacion",
    span: "lg:col-span-1",
  },
  {
    id: "infraestructura",
    icon: Server,
    title: "Cloud & Infra",
    description:
      "Despliegues profesionales, optimización de rendimiento en la nube y seguridad avanzada.",
    href: "/servicios#infraestructura",
    span: "lg:col-span-2",
  },
];

export function ServicesHighlight() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 bg-[#131212]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Lo que hacemos.
          </h2>
          <p className="mt-4 text-lg text-white/50 leading-relaxed">
            Soluciones tecnológicas integrales. No solo escribimos código,
            resolvemos problemas de negocio complejos.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl border border-white/5 bg-[#1a1a1a] p-8 transition-all hover:border-white/10 hover:bg-[#1f1f1f] ${service.span}`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 inline-flex rounded-xl bg-white/5 p-3">
                    <service.icon size={24} className="text-white/70" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/40 transition-colors group-hover:text-white"
                  >
                    Saber más
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
