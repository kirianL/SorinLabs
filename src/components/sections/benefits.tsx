"use client";

import { motion } from "motion/react";

const benefits = [
  {
    num: "01",
    title: "Diseño centrado en el usuario",
    description:
      "Cada decisión de diseño parte de una pregunta: ¿cómo mejora esto la experiencia de la persona que lo va a usar?",
  },
  {
    num: "02",
    title: "Experiencias web modernas",
    description:
      "Sitios que se sienten actuales, con animaciones sutiles, navegación clara y un diseño visual que comunica profesionalismo.",
  },
  {
    num: "03",
    title: "Arquitectura técnica sólida",
    description:
      "Código limpio, tecnologías modernas y una base preparada para crecer con tu negocio sin compromisos técnicos.",
  },
  {
    num: "04",
    title: "Rendimiento y optimización",
    description:
      "Tiempos de carga rápidos, SEO técnico y buenas prácticas que aseguran que tu sitio funcione tan bien como se ve.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function BenefitsSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#f5f5f3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111] leading-[1.1] mb-5"
          >
            Diseño web pensado para{" "}
            <span className="text-[#111]/25">personas.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base text-[#888] leading-relaxed"
          >
            Creamos experiencias digitales donde cada detalle está construido
            con propósito.
          </motion.p>
        </div>

        {/* 4-cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="group relative rounded-2xl bg-white border border-[#e8e8e6] p-7 lg:p-8 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-[#ccc]"
            >
              {/* Large number */}
              <span className="text-[3rem] font-bold text-[#111]/[0.04] leading-none tracking-tighter select-none group-hover:text-[#111]/[0.08] transition-colors duration-500">
                {b.num}
              </span>

              <h3 className="text-lg font-bold text-[#111] mb-2.5 mt-3 tracking-tight">
                {b.title}
              </h3>
              <p className="text-[14px] text-[#888] leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
