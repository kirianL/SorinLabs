"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Sitio Web Corporativo Premium",
    category: "Diseño Web",
    description:
      "Un sitio web moderno donde la experiencia de usuario, la estructura y el diseño visual comunican confianza desde el primer clic.",
    tags: ["Next.js", "React", "Figma"],
    href: "/portafolio",
  },
  {
    num: "02",
    title: "Landing Page de Alto Impacto",
    category: "Landing Page",
    description:
      "Página enfocada en conversión con diseño visual atractivo, copywriting estratégico y micro-animaciones que guían la atención.",
    tags: ["React", "Framer Motion", "UI/UX"],
    href: "/portafolio",
  },
  {
    num: "03",
    title: "Plataforma Digital Interactiva",
    category: "Plataforma Web",
    description:
      "Plataforma con diseño intuitivo, navegación clara y una arquitectura preparada para crecer con el negocio.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "/portafolio",
  },
];

export function PortfolioTeaser() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#0e0e12]">
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
              <span className="h-1.5 w-1.5 rounded-full bg-[#261cc1]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#261cc1]">
                Proyectos
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.05]"
            >
              Trabajo reciente.
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
              className="group inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-5 py-2.5 text-sm font-medium text-white/50 transition-all hover:bg-white/[0.1] hover:text-white hover:border-white/[0.15]"
            >
              Ver todos
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Project cards — stacked full-width */}
        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={project.href}
                className="group relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 lg:p-10 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.12]"
              >
                {/* Left: number + category */}
                <div className="lg:w-[180px] shrink-0">
                  <span className="text-[2.5rem] font-bold text-white/[0.06] leading-none tracking-tight">
                    {project.num}
                  </span>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#261cc1]/60 mt-2">
                    {project.category}
                  </p>
                </div>

                {/* Center: title + description */}
                <div className="flex-1 lg:pr-12">
                  <h3 className="text-xl sm:text-2xl font-bold text-white/90 group-hover:text-white transition-colors tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-white/30 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Right: tags + arrow */}
                <div className="flex flex-col items-start lg:items-end gap-4 shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06] text-white/20 group-hover:bg-[#261cc1] group-hover:border-[#261cc1] group-hover:text-white transition-all">
                    <ExternalLink size={15} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
