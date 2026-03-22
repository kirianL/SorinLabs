"use client";

import { motion } from "motion/react";
import {
  Globe,
  Palette,
  Layout,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "sitios-web",
    icon: Globe,
    num: "01",
    title: "Diseño y desarrollo de páginas web",
    description:
      "Creamos páginas web modernas, rápidas y visualmente atractivas que ayudan a tu negocio a verse profesional y generar confianza.",
    detailsLabel: "Nos enfocamos en que:",
    details: [
      "Se vean bien en cualquier dispositivo",
      "Sean fáciles de usar",
      "Carguen rápido",
      "Representen correctamente tu marca"
    ],
  },
  {
    id: "plataformas",
    icon: Layout,
    num: "02",
    title: "Desarrollo de sistemas web a medida",
    description:
      "Construimos herramientas digitales personalizadas para organizar, automatizar y facilitar procesos dentro de tu negocio.",
    detailsLabel: "Por ejemplo:",
    details: [
      "Paneles para administrar información",
      "Sistemas internos para tu equipo",
      "Plataformas para clientes o usuarios"
    ],
  },
  {
    id: "diseno",
    icon: Palette,
    num: "03",
    title: "Mejora de diseño y experiencia de usuario",
    description:
      "Si ya tienes una página o sistema, podemos mejorar su diseño y hacerlo más fácil de usar.",
    detailsLabel: "Esto ayuda a que:",
    details: [
      "Las personas entiendan mejor tu producto",
      "Naveguen sin confusión",
      "Tengan una mejor experiencia"
    ],
  },
  {
    id: "rendimiento",
    icon: Rocket,
    num: "04",
    title: "Optimización y rendimiento",
    description:
      "Hacemos que tu sitio web o sistema funcione mejor, para que todo sea más rápido y eficiente.",
    detailsLabel: "Mejoramos:",
    details: [
      "Velocidad de carga",
      "Organización del contenido",
      "Fluidez de la navegación"
    ],
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

export default function ServicesPage() {
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
              Nuestros Servicios.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base text-white/35 leading-relaxed lg:mt-4"
            >
              Diseñamos y desarrollamos experiencias web modernas que combinan
              diseño cuidado, experiencia de usuario y tecnología eficiente.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                  borderColor: "rgba(38,28,193,0.2)",
                  transition: { duration: 0.25 },
                }}
                className="scroll-mt-32 rounded-2xl border border-[#e8e8e6] bg-white p-8 lg:p-10 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                        <service.icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-[#261cc1]"
                        />
                      </div>
                      <span className="text-[13px] font-bold text-[#bbb] tracking-wider">
                        {service.num}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#111] mb-3 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-[15px] text-[#777] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: checklist */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    {service.detailsLabel && (
                      <p className="text-[14px] font-semibold text-[#111] mb-4">
                        {service.detailsLabel}
                      </p>
                    )}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 opacity-90">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#261cc1]/[0.06] mt-0.5">
                            <Check
                              size={11}
                              strokeWidth={2.5}
                              className="text-[#261cc1]"
                            />
                          </span>
                          <span className="text-sm text-[#555] leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
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
            className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            ¿Listo para empezar?
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
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
