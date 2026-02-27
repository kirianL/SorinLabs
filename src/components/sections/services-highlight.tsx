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
    icon: Cpu,
    title: "Ingeniería",
    accent: "Sistemas que escalan",
    description:
      "Plataformas SaaS, paneles B2B, APIs robustas y arquitectura backend que soporta crecimiento real.",
    href: "/servicios#ingenieria",
  },
  {
    icon: Palette,
    title: "Diseño",
    accent: "Interfaces con criterio",
    description:
      "UI/UX enfocado en conversión. Sistemas de diseño, prototipado funcional y experiencias accesibles.",
    href: "/servicios#diseno",
  },
  {
    icon: Zap,
    title: "Automatización",
    accent: "Menos manual, más inteligente",
    description:
      "Integraciones API, flujos automatizados, onboarding y canales optimizados con IA aplicada.",
    href: "/servicios#automatizacion",
  },
  {
    icon: Server,
    title: "Infraestructura",
    accent: "Deploy seguro y rápido",
    description:
      "Vercel, AWS, GCP. Optimización de Core Web Vitals, CI/CD profesional y seguridad desde el día uno.",
    href: "/servicios#infraestructura",
  },
];

export function ServicesHighlight() {
  return (
    <section className="relative py-32 lg:py-44 bg-[#09090b]">
      {/* Grid bg continuation */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section intro — asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="h-px w-8 bg-[#261cc1]" />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25">
                Capacidades
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.95]"
            >
              Lo que
              <br />
              hacemos.
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-base text-white/30 leading-relaxed"
            >
              No escribimos código por escribirlo. Resolvemos problemas de
              negocio complejos con ingeniería de precisión y diseño que tiene
              razón de ser.
            </motion.p>
          </div>
        </div>

        {/* Cards — 2x2 responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Card className="group h-full bg-white/[0.02] border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#261cc1]/10">
                      <service.icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#261cc1]"
                      />
                    </div>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-white/15">
                      0{i + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white mt-5">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-[#261cc1]/70 text-xs font-semibold tracking-wide uppercase mt-1">
                    {service.accent}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-white/30 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white/15 transition-colors group-hover:text-white/50"
                  >
                    Explorar
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5"
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
