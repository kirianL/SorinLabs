"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { RocketIcon as Rocket } from "@/components/ui/rocket";
import { SparklesIcon as Diamond } from "@/components/ui/sparkles";
import { BrainIcon as Brain } from "@/components/ui/brain";
import { ZapIcon as Zap } from "@/components/ui/zap";
import { EyeIcon as Eye } from "@/components/ui/eye";
import { SettingsIcon as Settings } from "@/components/ui/settings";
import { CursorClickIcon as MousePointer2 } from "@/components/ui/cursor-click";
import { TerminalIcon as Code2 } from "@/components/ui/terminal";
import { PenToolIcon as Palette } from "@/components/ui/pen-tool";
import { ShieldCheckIcon as ShieldCheck } from "@/components/ui/shield-check";
import { Rocket as StaticRocket, Eye as StaticEye, Brain as StaticBrain } from "lucide-react";

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

      {/* Esencia - Minimalist Layout */}
      <section className="bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#111] leading-[1.1] mb-8">
              Nacemos en Costa Rica con una idea clara: no desarrollamos por desarrollar. Construimos productos que se ven bien, funcionan perfecto y ofrecen una experiencia real.
            </h2>
            <p className="text-lg sm:text-xl text-[#666] leading-relaxed max-w-2xl">
              Creemos que una buena página web no es solo código ni solo diseño. <strong className="text-[#111] font-semibold">Es cómo ambas cosas trabajan de la mano.</strong>
            </p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              { icon: Eye, title: "Cómo se ve", desc: "Diseño intencional, estético y muy profesional." },
              { icon: MousePointer2, title: "Cómo se usa", desc: "Experiencia de usuario clara y sin fricciones." },
              { icon: Settings, title: "Cómo funciona", desc: "Código limpio con un rendimiento estelar." }
            ].map((p, i) => (
              <motion.div key={i} variants={itemVariants} className="p-8 rounded-3xl bg-[#f5f5f3] border border-[#e8e8e6] hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <p.icon className="text-[#261cc1]" size={24} />
                </div>
                <h3 className="font-bold text-[#111] text-xl mb-3">{p.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 bg-[#f5f5f3] rounded-3xl border border-[#e8e8e6]"
          >
            {values.map((v) => (
              <motion.div key={v.label} variants={itemVariants} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">{v.value}</p>
                <p className="text-sm font-medium text-[#888] mt-2 uppercase tracking-wider">{v.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Propuesta de Valor - New Dedicated Section */}
      <section className="bg-white py-24 lg:py-32 border-b border-[#e8e8e6]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111] mb-5">
              Nuestra propuesta de valor
            </h2>
            <p className="text-[#666] text-lg lg:text-xl max-w-2xl mx-auto">
              No hacemos plantillas ni atajos. Construimos bases sólidas.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Code2, title: "Código estructurado", desc: "Arquitectura limpia y mantenible a largo plazo." },
              { icon: Palette, title: "Diseño cuidado", desc: "Atención meticulosa a cada detalle visual." },
              { icon: Brain, title: "UX intuitiva", desc: "Experiencias de usuario sin fricciones." },
              { icon: Zap, title: "Tecnologías modernas", desc: "Rendimiento y eficiencia estelares." },
              { icon: ShieldCheck, title: "Calidad obsesiva", desc: "Enfoque implacable en librar de errores." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 rounded-3xl bg-[#f5f5f3] border border-[#e8e8e6] hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#261cc1]/10 flex items-center justify-center mb-6">
                  <item.icon className="text-[#261cc1]" size={24} />
                </div>
                <h3 className="font-bold text-[#111] text-xl mb-3">{item.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid: Misión, Visión, Filosofía */}
      <section className="py-24 lg:py-32 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          
          <div className="mb-16 max-w-2xl text-center mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">El ADN de Sorin Labs</h2>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              Los principios innegociables que guían cada línea de código y cada píxel que diseñamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-[minmax(240px,auto)] max-w-5xl mx-auto">
            
            {/* Misión (Full width top) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="md:col-span-2 p-8 lg:p-12 rounded-3xl bg-[#261cc1] relative overflow-hidden group flex flex-col justify-center min-h-[280px]"
            >
              <div className="relative z-10 max-w-2xl">
                <Rocket className="text-white mb-6" size={36} />
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Misión</h3>
                <p className="text-[17px] lg:text-lg text-white/90 font-medium leading-relaxed">
                  Desarrollar sistemas web con altos estándares de calidad técnica, cuidando el diseño visual y la UX, para crear productos eficientes preparados para evolucionar.
                </p>
              </div>
              <div className="absolute right-[-20px] bottom-[-40px] opacity-[0.08] group-hover:scale-110 transition-transform duration-700">
                <StaticRocket size={320} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Visión (Bottom Left split) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="p-8 lg:p-10 rounded-3xl bg-[#261cc1] relative overflow-hidden group min-h-[260px]"
            >
              <div className="relative z-10">
                <Eye className="text-white mb-5" size={28} />
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Visión</h3>
                <p className="text-[15px] lg:text-[16px] text-white/90 font-medium leading-relaxed">
                  Ser un estudio digital de referencia donde la ingeniería estricta y el diseño hermoso convergen.
                </p>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.08] group-hover:scale-110 transition-transform duration-700">
                <StaticEye size={220} strokeWidth={1} />
              </div>
            </motion.div>

            {/* Filosofía (Bottom Right split) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="p-8 lg:p-10 rounded-3xl bg-[#261cc1] relative overflow-hidden group min-h-[260px]"
            >
              <div className="relative z-10">
                <Zap className="text-white mb-5" size={28} />
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Filosofía</h3>
                <p className="text-[15px] lg:text-[16px] text-white/90 font-medium leading-relaxed">
                  Programación y diseño no operan separados. <br/>Cuando trabajan juntos, la experiencia mejora y el producto resulta inquebrantable.
                </p>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-[0.08] group-hover:scale-110 transition-transform duration-700">
                <StaticBrain size={220} strokeWidth={1} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Founder - Streamlined */}
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
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/5">
                {/* Duotone overlay */}
                <div className="absolute inset-0 z-10 bg-[#261cc1] mix-blend-color opacity-[0.45] pointer-events-none" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#261cc1]/40 to-transparent pointer-events-none" />
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
              <p className="text-sm font-bold tracking-widest uppercase text-[#261cc1] mb-4">
                Historia del fundador
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111] leading-[1.08] mb-8">
                Kirian Luna
              </h2>
              <div className="space-y-6 text-[16px] text-[#666] leading-relaxed">
                <p className="text-[22px] md:text-2xl text-[#111] font-bold tracking-tight border-l-[4px] border-[#261cc1] pl-5 py-2">
                  "Fundé Sorin Labs para demostrar que el código robusto y el diseño excepcional no tienen por qué estar separados."
                </p>
                <p className="pt-2">
                  Ingeniero en Sistemas Computacionales enfocado en crear plataformas eficientes, seguras y altamente optimizadas, respaldado por más de 2 años de experiencia directa.
                </p>
                <p>
                  Mi meta es simple: <strong className="text-[#111] font-bold">cada proyecto merece una atención obsesiva al detalle</strong>. Desde landing pages de alto nivel hasta sistemas complejos, construimos tecnología moderna que realmente impacta y funciona para las personas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
