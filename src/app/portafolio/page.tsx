"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NovaTech Solutions",
    category: "Sitio Web Corporativo",
    description:
      "Sitio web premium con diseño elegante, navegación clara y enfoque en la confianza del usuario.",
    image: "/project-1.png",
    tags: ["Next.js", "React", "Figma"],
    href: "#",
  },
  {
    title: "Clarity Landing",
    category: "Landing Page",
    description:
      "Página de alto impacto con diseño visual atractivo, copywriting estratégico y micro-animaciones.",
    image: "/project-2.png",
    tags: ["React", "Framer Motion", "UI/UX"],
    href: "#",
  },
  {
    title: "FinBoard Platform",
    category: "Plataforma Web",
    description:
      "Interfaz intuitiva con navegación clara y una arquitectura preparada para crecer.",
    image: "/project-3.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PortfolioPage() {
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
              Sitios web, landing pages y plataformas digitales diseñadas con
              intención — trabajo reciente que refleja nuestra forma de pensar
              el diseño.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <div className="group rounded-2xl border border-[#e8e8e6] bg-white overflow-hidden hover:border-[#261cc1]/20 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[4/3] lg:aspect-auto bg-[#e5e5e3]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#261cc1]/0 group-hover:bg-[#261cc1]/5 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <span className="text-[12px] font-semibold text-[#261cc1] tracking-wider uppercase mb-3">
                        {project.category}
                      </span>
                      <h2 className="text-2xl font-bold text-[#111] mb-3 tracking-tight group-hover:text-[#261cc1] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-[15px] text-[#777] leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#f5f5f3] border border-[#e8e8e6] px-3 py-1 text-[11px] font-medium text-[#888]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={project.href}
                        className="group/btn inline-flex items-center gap-2 text-[13px] font-semibold text-[#111] hover:text-[#261cc1] transition-colors w-fit"
                      >
                        Ver proyecto
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </Link>
                    </div>
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
              <ExternalLink
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
