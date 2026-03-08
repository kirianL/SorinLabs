"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    image: "/blog-1.png",
    title: "Tendencias de diseño web que definirán el 2026",
    description:
      "Las tendencias visuales y de interacción que están transformando la web moderna, desde micro-animaciones hasta experiencias inmersivas.",
    tag: "Diseño Web",
    href: "#",
  },
  {
    image: "/blog-2.png",
    title: "Por qué la experiencia de usuario es tu mejor inversión",
    description:
      "Una buena UX no es un lujo — es lo que separa un sitio que convierte de uno que solo existe. Así impacta en tus resultados.",
    tag: "UX",
    href: "#",
  },
  {
    image: "/blog-3.png",
    title: "Next.js y React: la base del desarrollo web moderno",
    description:
      "Por qué elegimos Next.js y React para construir sitios web rápidos, escalables y preparados para el futuro.",
    tag: "Desarrollo",
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ArticlesSection() {
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
              Ideas y perspectivas.
            </motion.h2>
          </div>
        </div>

        {/* Articles grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {articles.map((article) => (
            <motion.div key={article.title} variants={cardVariants}>
              <Link href={article.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#e5e5e3] mb-5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Tag */}
                <span className="inline-flex rounded-full bg-[#261cc1]/8 border border-[#261cc1]/12 px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-[#261cc1] mb-3">
                  {article.tag}
                </span>
                {/* Title */}
                <h3 className="text-lg font-bold text-[#111] mb-2 tracking-tight group-hover:text-[#261cc1] transition-colors leading-snug">
                  {article.title}
                </h3>
                {/* Description */}
                <p className="text-[14px] text-[#888] leading-relaxed mb-4">
                  {article.description}
                </p>
                {/* Read more */}
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#261cc1] group-hover:gap-2.5 transition-all">
                  Leer más
                  <ArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
