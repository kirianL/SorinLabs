"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Diseño web estratégico",
    description:
      "Sitios web que no solo se ven bien, sino que están diseñados para comunicar, convertir y representar tu marca de forma auténtica.",
  },
  {
    num: "02",
    title: "Desarrollo web moderno",
    description:
      "Código limpio con React y Next.js. Sitios rápidos, seguros y preparados para escalar con tu negocio.",
  },
  {
    num: "03",
    title: "Optimización de experiencia digital",
    description:
      "Mejoras de rendimiento, accesibilidad y UX que hacen que tu producto digital funcione mejor para las personas que lo usan.",
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

export function ServicesSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0a0a0f] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#261cc1]/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5"
          >
            Lo que hacemos mejor.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base text-white/30 leading-relaxed max-w-md mx-auto"
          >
            Tres áreas donde combinamos diseño y tecnología para crear
            resultados excepcionales.
          </motion.p>
        </div>

        {/* Service cards — 3 large cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.num} variants={cardVariants}>
              <Link
                href="/servicios"
                className="group relative flex flex-col h-full rounded-3xl bg-white/[0.03] border border-white/[0.06] p-8 lg:p-10 transition-all duration-300 hover:bg-white/[0.05] hover:border-[#261cc1]/25 hover:shadow-[0_8px_40px_rgba(38,28,193,0.08)]"
              >
                {/* Large number */}
                <span className="text-[5rem] lg:text-[6rem] font-bold text-white/[0.04] leading-none tracking-tighter -mb-4 select-none group-hover:text-[#261cc1]/10 transition-colors duration-500">
                  {service.num}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-white/30 leading-relaxed flex-1 mb-8">
                  {service.description}
                </p>

                {/* CTA: footer arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-semibold text-white/15 group-hover:text-[#261cc1] transition-colors">
                    Explorar servicio
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.06] text-white/20 group-hover:bg-[#261cc1] group-hover:border-[#261cc1] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
