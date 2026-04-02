"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "brisas-del-rio",
    title: "Brisas del Río",
    category: "Sitio Web · Hospedaje",
    image: "/works/BrisasDelRio/HeroBrisasDelRio.png",
    tags: ["Next.js", "UI/UX"],
  },
  {
    slug: "limon",
    title: "Puerto Limón",
    category: "Plataforma Cultural · Editorial",
    image: "/works/Limón/HeroLimon.png",
    tags: ["Next.js", "Editorial"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-[100svh] bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pb-28">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Nuestro Portafolio.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base text-white/35 leading-relaxed lg:mt-4"
            >
              Trabajo reciente que refleja nuestra forma de pensar el diseño.
              sitios web diseñados con intención, desde Costa Rica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link
                  href={`/portafolio/${project.slug}`}
                  className="group block rounded-2xl border border-[#e8e8e6] bg-white overflow-hidden hover:border-[#ccc] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] bg-[#e5e5e3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-[#111] tracking-tight mb-1 group-hover:text-[#261cc1] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[13px] text-[#888]">
                          {project.category}
                        </p>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f5f3] border border-[#e8e8e6] text-[#bbb] group-hover:bg-[#111] group-hover:text-white group-hover:border-[#111] transition-all duration-300">
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f5f5f3] border border-[#e8e8e6] px-2.5 py-0.5 text-[10px] font-medium text-[#999]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Coming soon placeholder */}
            {[1].map((i) => (
              <motion.div key={`soon-${i}`} variants={itemVariants}>
                <div className="rounded-2xl border border-dashed border-[#ddd] bg-white/50 overflow-hidden">
                  <div className="aspect-[16/10] bg-[#eee]/50 flex items-center justify-center">
                    <span className="text-[13px] font-medium text-[#ccc]">
                      Próximamente
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="h-5 w-32 rounded bg-[#eee]/60 mb-2" />
                    <div className="h-4 w-24 rounded bg-[#eee]/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            ¿Tienes un proyecto en mente?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:scale-[1.02]"
            >
              Empezar proyecto
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
