"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brisas del Río",
    description: "Sitio Web · Hospedaje · Jiménez, Costa Rica",
    image: "/works/BrisasDelRio/HeroBrisasDelRio.png",
    link: "/portafolio/brisas-del-rio",
    tags: ["Next.js", "UI/UX"],
  },
  {
    title: "Puerto Limón",
    description: "Plataforma Cultural · Puerto Limón, Costa Rica",
    image: "/works/Limón/HeroLimon.png",
    link: "/portafolio/limon",
    tags: ["Next.js", "Editorial"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0a0a0f] overflow-hidden">
      {/* Subtle grid — Static (No parallax) */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-18">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Trabajo reciente.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/portafolio"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-white/40 hover:text-white transition-colors"
            >
              Ver todo el portafolio
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Featured projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Link href={project.link} className="group block h-full">
                <div className="flex flex-col h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] bg-[#111] overflow-hidden">
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-1 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-[14px] text-white/40 line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white/30 group-hover:bg-white group-hover:text-[#0a0a0f] transition-all duration-300 transform group-hover:-translate-y-1">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
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
