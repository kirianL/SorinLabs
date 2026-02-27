"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

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
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#f2f2f2] text-[#131212]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-[#131212] sm:text-5xl lg:text-6xl leading-[1.1]">
                Trabajo Destacado.
              </h2>
              <p className="mt-4 max-w-lg text-base text-[#131212]/50 leading-relaxed">
                Una selección de proyectos donde la arquitectura y el diseño
                generaron impacto real.
              </p>
            </div>

            <Link
              href="/portafolio"
              className="group inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-6 py-2.5 text-sm font-medium text-[#131212]/70 transition-all hover:border-[#261cc1]/20 hover:text-[#261cc1] shadow-sm"
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
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-[#261cc1]">
                  {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-[#131212]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[#131212]/50 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-xs font-medium text-[#131212]/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="rounded-full bg-[#261cc1]/10 px-3 py-1.5 text-xs font-semibold text-[#261cc1]">
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
