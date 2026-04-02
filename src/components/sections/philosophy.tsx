"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    num: "01",
    title: "Experiencia primero",
    description:
      "Diseñamos pensando en cómo las personas interactúan con el producto.",
  },
  {
    num: "02",
    title: "Diseño con intención",
    description:
      "Cada espacio, cada interacción y cada transición tiene un propósito claro.",
  },
  {
    num: "03",
    title: "Tecnología moderna",
    description: "Sitios rápidos, eficientes y preparados para evolucionar.",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#f7f7f5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2.5 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#261cc1]" />
          <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#261cc1]">
            Nuestra filosofía
          </span>
        </motion.div>

        {/* Main statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#1a1a1a] leading-[1.08]">
              Una buena experiencia{" "}
              <span className="text-[#261cc1]">digital no ocurre </span>
              por accidente.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="flex flex-col justify-end"
          >
            <p className="text-[17px] text-[#555] leading-[1.7] mb-8">
              En Sorin Labs creemos que una buena página web no se trata solo de
              verse bien. Se trata de una experiencia clara, un diseño visual
              bien pensado, una estructura intuitiva y un rendimiento moderno.
            </p>
            <Link
              href="/nosotros"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#261cc1] transition-colors hover:text-[#1a1099]"
            >
              Conocer nuestra historia
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl bg-white p-8 lg:p-10 border border-[#e8e8e6] hover:border-[#261cc1]/20 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)]"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#261cc1]/[0.06] text-sm font-bold text-[#261cc1]">
                  {pillar.num}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[#ccc] group-hover:text-[#261cc1] transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[15px] text-[#777] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
