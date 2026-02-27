"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Plataforma SaaS Fintech",
    category: "Ingeniería Web",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    description:
      "Modernización de software legado hacia una plataforma SaaS real-time con arquitectura serverless.",
    impact: "+200% retención",
    href: "/portafolio",
  },
  {
    title: "Panel Administrativo de Salud",
    category: "Sistemas Complejos",
    tech: ["React", "Go", "AWS"],
    description:
      "Sistema unificado para administrar citas, expedientes y facturación con permisos por rol.",
    impact: "-85% errores",
    href: "/portafolio",
  },
];

export function PortfolioTeaser() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#131212] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Trabajo Destacado.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/40 leading-relaxed">
                Una selección de proyectos donde la arquitectura y el diseño
                generaron impacto real.
              </p>
            </div>
            <Link
              href="/portafolio"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/60 transition-all hover:border-white/20 hover:text-white"
            >
              Ver todos los proyectos
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.1)" }}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#261cc1]">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-white/40 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="rounded-full bg-[#261cc1]/15 px-3 py-1.5 text-xs font-semibold text-[#261cc1]">
                    {project.impact}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
