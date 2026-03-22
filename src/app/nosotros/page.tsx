"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { 
  Rocket, 
  Diamond, 
  Brain, 
  Code2, 
  Palette, 
  MousePointer2, 
  Zap, 
  ShieldCheck,
  Eye,
  Settings
} from "lucide-react";

const values = [
  { value: "2026", label: "Fundado en" },
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
    <div className="min-h-[100svh] bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pb-32">
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
            className="mt-6 max-w-xl text-lg text-white/50 leading-relaxed font-medium"
          >
            Sorin Labs es un laboratorio digital enfocado en crear páginas web y sistemas donde la calidad técnica y el diseño bien cuidado trabajan juntos.
          </motion.p>
        </div>
      </section>

      {/* Esencia */}
      <section className="bg-[#f5f5f3] pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center text-[#111]">
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.2] mb-8"
          >
            Nacemos en Costa Rica con la idea de hacer las cosas diferente: no solo desarrollar por desarrollar, sino construir productos digitales que se vean bien, funcionen correctamente y ofrezcan una experiencia clara para las personas.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg sm:text-xl text-[#666] leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Creemos que una buena página web no se trata solo de diseño ni solo de programación. <span className="font-semibold text-[#111]">Se trata de cómo ambas cosas se combinan.</span>
            <br/><br/>
            Por eso, en cada proyecto cuidamos:
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={itemVariants} className="p-8 bg-white rounded-3xl border border-[#e8e8e6] flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <Eye className="text-[#261cc1] mb-5" size={32} strokeWidth={1.5} />
              <p className="font-bold text-lg">cómo se ve</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-white rounded-3xl border border-[#e8e8e6] flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <MousePointer2 className="text-[#261cc1] mb-5" size={32} strokeWidth={1.5} />
              <p className="font-bold text-lg">cómo se usa</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-white rounded-3xl border border-[#e8e8e6] flex flex-col items-center text-center transition-shadow hover:shadow-lg">
              <Settings className="text-[#261cc1] mb-5" size={32} strokeWidth={1.5} />
              <p className="font-bold text-lg">y cómo funciona</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-[17px] text-[#555] leading-relaxed max-w-2xl mx-auto mb-6">
              Trabajamos con un enfoque donde cada detalle importa, desde la estructura interna hasta la experiencia final del usuario.
            </p>
            <p className="text-xl font-semibold text-[#261cc1] leading-relaxed max-w-2xl mx-auto">
              Nuestro objetivo es crear soluciones digitales que no solo cumplan, sino que realmente aporten valor a quienes las utilizan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#f5f5f3] pb-16">
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

      {/* Misión y Visión */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 lg:p-10 bg-[#f5f5f3] rounded-3xl border border-[#e8e8e6]"
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111] leading-[1.1] mb-6">
                Misión
              </h2>
              <p className="text-[16px] text-[#666] leading-relaxed">
                Desarrollar sitios web y sistemas digitales con altos estándares de calidad técnica, cuidando cada detalle del diseño y la experiencia del usuario, utilizando tecnologías modernas que permitan crear productos eficientes, claros y preparados para evolucionar.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-8 lg:p-10 bg-[#111] rounded-3xl border border-[#222]"
            >
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="text-white" size={28} strokeWidth={1.5} />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-[1.1]">
                  Visión
                </h2>
              </div>
              <p className="text-[16px] text-white/70 leading-relaxed">
                Ser un estudio digital reconocido por la calidad de sus desarrollos y el cuidado en el diseño, creando productos donde la ingeniería y la experiencia del usuario se integran de forma natural.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor & Filosofía */}
      <section className="py-24 lg:py-32 bg-[#0a0a0f] text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Propuesta de valor */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Diamond className="text-white" size={32} strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                  Propuesta de valor
                </h2>
              </div>
              
              <div className="space-y-6 text-[16px] text-white/70 leading-relaxed">
                <p>
                  En <span className="text-white font-semibold">Sorin Labs</span> creemos que un buen producto digital no es solo código ni solo diseño.
                </p>
                <p className="text-xl font-medium text-white">
                  Es la combinación de ambos.
                </p>
                <p>Por eso cada proyecto se construye con:</p>
                
                <ul className="space-y-4 mt-8">
                  {[
                    { icon: Code2, text: "Código limpio, estructurado y mantenible" },
                    { icon: Palette, text: "Diseño cuidado en cada detalle" },
                    { icon: Brain, text: "Experiencia de usuario clara e intuitiva" },
                    { icon: Zap, text: "Tecnologías modernas y eficientes" },
                    { icon: ShieldCheck, text: "Enfoque en calidad y rendimiento" }
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                      className="flex items-center gap-4"
                    >
                      <item.icon className="text-[#261cc1] shrink-0" size={20} strokeWidth={2} />
                      <span className="text-white/90 font-medium">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/10 mt-8">
                  <p className="text-white font-semibold">No desarrollamos rápido por desarrollar.</p>
                  <p className="text-[#261cc1] font-bold text-lg mt-1">Desarrollamos bien, desde la base.</p>
                </div>
              </div>
            </motion.div>

            {/* Filosofía */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:pt-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <Brain className="text-white" size={32} strokeWidth={1.5} />
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
                  Filosofía
                </h2>
              </div>

              <div className="space-y-6 text-[16px] text-white/70 leading-relaxed p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08]">
                <p className="text-lg text-white font-medium">
                  La programación no debe estar separada del diseño.
                </p>
                <p className="text-2xl font-bold text-[#261cc1]">
                  Deben trabajar juntas.
                </p>
                <p className="pt-4">
                  Porque cuando el código y el diseño están alineados:
                </p>
                <ul className="space-y-4 pt-2">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#261cc1]" />
                    <span className="text-white">la experiencia mejora</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#261cc1]" />
                    <span className="text-white">el producto se siente sólido</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#261cc1]" />
                    <span className="text-white font-semibold">y el resultado final es superior</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
