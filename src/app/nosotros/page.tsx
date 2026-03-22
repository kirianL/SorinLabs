"use client";

import { motion } from "motion/react";
import { Sparkles, Target, Lightbulb } from "lucide-react";
import Image from "next/image";

const principles = [
  {
    icon: Sparkles,
    num: "01",
    title: "Experiencia primero",
    description:
      "Diseñamos pensando en cómo las personas interactúan con el producto. Cada decisión parte de la experiencia del usuario.",
  },
  {
    icon: Target,
    num: "02",
    title: "Diseño con intención",
    description:
      "Cada espacio, cada interacción y cada transición tiene un propósito claro. Nada es accidental.",
  },
  {
    icon: Lightbulb,
    num: "03",
    title: "Tecnología moderna",
    description:
      "Utilizamos herramientas actuales para crear sitios rápidos, eficientes y preparados para evolucionar con tu negocio.",
  },
];

const values = [
  { value: "2024", label: "Fundado en" },
  { value: "100%", label: "Trabajo remoto" },
  { value: "CR", label: "Desde Costa Rica" },
  { value: "5★", label: "Satisfacción" },
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

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0f]">
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
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl"
          >
            Donde el diseño y la tecnología{" "}
            <span className="text-white">se encuentran.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 max-w-xl text-base text-white/35 leading-relaxed"
          >
            Sorin Labs nace en Costa Rica con la idea de crear experiencias web
            donde el diseño y la tecnología trabajen juntos de forma
            intencional.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f5f5f3] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.label}
                variants={itemVariants}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
                  {v.value}
                </p>
                <p className="text-sm text-[#888] mt-1">{v.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 lg:py-32 bg-[#f5f5f3] border-t border-[#e8e8e6]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                {/* Duotone overlay */}
                <div className="absolute inset-0 z-10 bg-[#261cc1] mix-blend-color opacity-60 pointer-events-none" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#261cc1]/30 to-transparent pointer-events-none" />
                <Image
                  src="/images/KirianProfile.png"
                  alt="Kirian Luna — Fundador de Sorin Labs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-[#261cc1] mb-3">
                Historia del fundador
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111] leading-[1.08] mb-8">
                Kirian Luna
              </h2>
              <div className="space-y-5 text-[15px] text-[#666] leading-relaxed">
                <p>
                  Kirian fundó Sorin Labs con una visión clara: crear experiencias
                  digitales donde el diseño y la tecnología se integren de forma
                  natural para generar resultados reales.
                </p>
                <p>
                  Ingeniero en Sistemas Computacionales con más de 2 años de
                  experiencia diseñando y desarrollando sitios web, desde landing
                  pages de alto impacto hasta plataformas completas, con un
                  enfoque especial en la experiencia de usuario, la interfaz visual
                  y la seguridad.
                </p>
                <p>
                  Su filosofía es simple: cada proyecto merece atención al
                  detalle, un diseño intencional y tecnología moderna que
                  funcione para las personas que lo van a usar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-[#f5f5f3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111] leading-[1.1] mb-8">
                Nuestra Historia
              </h2>
              <div className="space-y-5 text-[15px] text-[#666] leading-relaxed">
                <p>
                  En muchos proyectos digitales el diseño y el desarrollo se
                  tratan como procesos separados, lo que termina generando
                  productos poco coherentes o difíciles de usar.
                </p>
                <p className="text-[#111] font-semibold text-lg">
                  Sorin Labs surge para hacer las cosas de manera diferente.
                </p>
                <p>
                  Cada proyecto comienza con una pregunta simple: ¿cómo debería
                  sentirse la experiencia para la persona que va a usar este
                  producto?
                </p>
                <p>
                  A partir de esa idea se construyen sitios web y plataformas
                  donde la estética, la estructura y la tecnología trabajan en
                  conjunto para crear experiencias digitales claras, modernas y
                  funcionales.
                </p>
                <p>
                  Desde Costa Rica, Sorin Labs busca colaborar con empresas y
                  proyectos que valoran el diseño bien pensado y la importancia
                  de ofrecer una buena experiencia digital.
                </p>
              </div>
            </motion.div>

            {/* Principles */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {principles.map((p) => (
                <motion.div
                  key={p.num}
                  variants={itemVariants}
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(38,28,193,0.2)",
                    transition: { duration: 0.25 },
                  }}
                  className="rounded-2xl border border-[#e8e8e6] bg-white p-6 lg:p-8 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                      <p.icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-[#261cc1]"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111] mb-1.5">
                        {p.title}
                      </h3>
                      <p className="text-[14px] text-[#777] leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
