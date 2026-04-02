"use client";

import { Globe, Palette, Layout, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    icon: Globe,
    title: "Diseño y desarrollo de páginas web",
    accent: "Diseño web pensado para personas",
    description:
      "Creamos páginas web modernas, rápidas y visualmente atractivas que ayudan a tu negocio a verse profesional y generar confianza.",
    href: "/servicios#sitios-web",
    color: "#261cc1",
  },
  {
    icon: Layout,
    title: "Desarrollo de sistemas web a medida",
    accent: "Experiencias digitales completas",
    description:
      "Construimos herramientas digitales personalizadas para organizar, automatizar y facilitar procesos dentro de tu negocio.",
    href: "/servicios#plataformas",
    color: "#261cc1",
  },
  {
    icon: Palette,
    title: "Mejora de diseño y experiencia de usuario",
    accent: "Interfaces con propósito",
    description:
      "Si ya tienes una página o sistema, podemos mejorar su diseño y hacerlo más fácil de usar.",
    href: "/servicios#diseno",
    color: "#261cc1",
  },
  {
    icon: Rocket,
    title: "Optimización y rendimiento",
    accent: "Rápido, eficiente, preparado",
    description:
      "Hacemos que tu sitio web o sistema funcione mejor, mejorando la velocidad de carga, organización y fluidez para que todo sea eficiente.",
    href: "/servicios#rendimiento",
    color: "#261cc1",
  },
];

export function ServicesHighlight() {
  return (
    <section className="relative py-28 lg:py-40 bg-[#0e0e12]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-16 lg:mb-24">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#261cc1]" />
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#261cc1]">
                Qué hacemos
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.05]"
            >
              Nuestros
              <br />
              servicios.
            </motion.h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[16px] text-white/40 leading-[1.7]"
            >
              Diseñamos y desarrollamos experiencias web modernas donde cada
              elemento — desde la interfaz hasta el rendimiento — contribuye a
              una mejor interacción.
            </motion.p>
          </div>
        </div>

        {/* Service cards — bento-style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                href={service.href}
                className="group relative flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 lg:p-10 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.12]"
              >
                {/* Top row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#261cc1]/[0.08] border border-[#261cc1]/[0.12]">
                    <service.icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-[#261cc1]"
                    />
                  </div>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-white/[0.12]">
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-[1.6rem] font-bold text-white mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[13px] font-semibold tracking-wide uppercase text-[#261cc1]/60 mb-4">
                  {service.accent}
                </p>
                <p className="text-[15px] text-white/35 leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="flex items-center gap-2 text-[13px] font-semibold text-white/[0.15] group-hover:text-[#261cc1] transition-colors">
                  Explorar
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
