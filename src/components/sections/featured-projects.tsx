"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NovaTech Solutions",
    category: "Sitio Web Corporativo",
    image: "/project-1.png",
    href: "/portafolio",
  },
  {
    title: "Clarity Landing",
    category: "Landing Page",
    image: "/project-2.png",
    href: "/portafolio",
  },
  {
    title: "FinBoard Platform",
    category: "Plataforma Web",
    image: "/project-3.png",
    href: "/portafolio",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeaturedProjects() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#f5f5f3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-18">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111] leading-[1.1]"
            >
              Trabajo que habla por sí solo.
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
              className="group inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#261cc1]"
            >
              Ver todos
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Link href={project.href} className="group block">
                {/* Image container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#e5e5e3] mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#261cc1]/0 group-hover:bg-[#261cc1]/10 transition-colors duration-300 flex items-center justify-center">
                    <motion.div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#111] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </motion.div>
                  </div>
                </div>
                {/* Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#111] group-hover:text-[#261cc1] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-[#888] mt-1 font-medium">
                      {project.category}
                    </p>
                  </div>
                  <span className="text-[13px] font-medium text-[#bbb] group-hover:text-[#261cc1] transition-colors mt-1">
                    Ver proyecto
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
