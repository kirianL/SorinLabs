"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Plataforma SaaS Fintech",
    category: "Ingeniería Web",
    impact: "+200% retención",
    href: "/portafolio",
  },
  {
    num: "02",
    title: "Panel Administrativo de Salud",
    category: "Sistemas Complejos",
    impact: "-85% errores",
    href: "/portafolio",
  },
  {
    num: "03",
    title: "Marketplace B2B Inmobiliario",
    category: "E-commerce",
    impact: "$5M volumen Q1",
    href: "/portafolio",
  },
];

export function PortfolioTeaser() {
  return (
    <section className="relative py-32 lg:py-44 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="h-px w-8 bg-[#261cc1]" />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25">
                Trabajo selecto
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[0.95]"
            >
              Casos.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/portafolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/20 transition-colors hover:text-white/60"
            >
              Ver todos
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Project list — editorial style */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={project.href}
                className="group grid grid-cols-12 gap-4 items-baseline py-8 sm:py-10 border-b border-white/[0.04] transition-colors hover:border-white/[0.08]"
              >
                <span className="col-span-1 text-xs font-mono text-white/10 group-hover:text-[#261cc1] transition-colors">
                  {project.num}
                </span>
                <span className="col-span-6 sm:col-span-5 text-xl sm:text-2xl lg:text-3xl font-bold text-white/80 group-hover:text-white transition-colors tracking-tight">
                  {project.title}
                </span>
                <span className="col-span-5 sm:col-span-3 text-xs font-medium text-white/15 text-right sm:text-left uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="hidden sm:block sm:col-span-3 text-sm font-semibold text-[#261cc1]/50 group-hover:text-[#261cc1] text-right transition-colors">
                  {project.impact}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
