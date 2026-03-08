"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brisas del Río",
    category: "Sitio Web · Hospedaje",
    description:
      "Sitio web para un santuario tropical en Jiménez, Costa Rica. Diseño inmersivo con reservas online, galería de cabañas y gastronomía criolla de autor.",
    image: "/works/BrisasDelRio/HeroBrisasDelRio.png",
    pageImage: "/works/BrisasDelRio/PageBrisasDelRio.png",
    tags: ["Next.js", "Diseño Web", "UI/UX", "Hospedaje"],
    href: "#brisas-del-rio",
  },
];

export default function PortfolioPage() {
  const project = projects[0];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
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
              Trabajo reciente que refleja nuestra forma de pensar el diseño —
              sitios web diseñados con intención, desde Costa Rica.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project showcase */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero image */}
            <div className="group rounded-2xl border border-[#e8e8e6] bg-white overflow-hidden hover:border-[#ccc] transition-all duration-300">
              <div className="relative aspect-[16/9] bg-[#e5e5e3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Project details */}
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                  <div>
                    <span className="text-[12px] font-semibold text-[#888] tracking-wider uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-[15px] text-[#777] leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f5f5f3] border border-[#e8e8e6] px-3 py-1 text-[11px] font-medium text-[#888]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center lg:items-end">
                    <Link
                      href="https://brisasdelrio.vercel.app"
                      target="_blank"
                      className="group/btn inline-flex items-center gap-2.5 rounded-full bg-[#111] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#261cc1] hover:shadow-[0_8px_30px_rgba(38,28,193,0.25)]"
                    >
                      Ver sitio web
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Full page screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="rounded-2xl border border-[#e8e8e6] bg-white overflow-hidden">
              <div className="p-6 lg:p-8 border-b border-[#e8e8e6]">
                <h3 className="text-lg font-bold text-[#111] tracking-tight">
                  Vista de página completa
                </h3>
                <p className="text-[14px] text-[#888] mt-1">
                  Sección de hospedaje con galería de cabañas y amenidades
                </p>
              </div>
              <div className="relative">
                <Image
                  src={project.pageImage}
                  alt={`${project.title} — Vista completa`}
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
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
            ¿Tienes un proyecto similar en mente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-base text-white/30 mb-8"
          >
            Cuéntanos tu idea y diseñemos algo excepcional juntos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
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
