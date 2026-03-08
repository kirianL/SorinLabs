"use client";

import { motion } from "motion/react";
import { Sparkles, Globe, Code2, Zap } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Diseño centrado en el usuario",
    description:
      "Cada decisión de diseño parte de una pregunta: ¿cómo mejora esto la experiencia de la persona que lo va a usar?",
  },
  {
    icon: Globe,
    title: "Experiencias web modernas",
    description:
      "Sitios que se sienten actuales, con animaciones sutiles, navegación clara y un diseño visual que comunica profesionalismo.",
  },
  {
    icon: Code2,
    title: "Arquitectura técnica sólida",
    description:
      "Código limpio, tecnologías modernas y una base preparada para crecer con tu negocio sin compromisos técnicos.",
  },
  {
    icon: Zap,
    title: "Rendimiento y optimización",
    description:
      "Tiempos de carga rápidos, SEO técnico y buenas prácticas que aseguran que tu sitio funcione tan bien como se ve.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function BenefitsSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0a0a0f]">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5"
          >
            Diseño web pensado para{" "}
            <span className="text-[#261cc1]">personas.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base text-white/35 leading-relaxed"
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
                borderColor: "rgba(38,28,193,0.25)",
                transition: { duration: 0.25 },
              }}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-7 lg:p-8 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(38,28,193,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#261cc1]/10 border border-[#261cc1]/15 mb-6 group-hover:bg-[#261cc1]/15 transition-colors">
                <b.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#261cc1]"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">
                {b.title}
              </h3>
              <p className="text-[14px] text-white/30 leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
