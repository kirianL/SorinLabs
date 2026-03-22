"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

const project = {
  title: "Brisas del Río",
  subtitle:
    "Diseño y desarrollo integral de un sitio web para un proyecto de hospedaje y restaurante ubicado en Jiménez de Pococi, Costa Rica. La propuesta digital fue pensada para transmitir la esencia del lugar: naturaleza, tranquilidad y una experiencia gastronómica criolla de autor, todo reflejado en una interfaz moderna, inmersiva y optimizada para conversión.",
  category: "Sitio Web · Hospedaje",
  location: "Jiménez, Pococi · Costa Rica",
  year: "2025",
  role: "Diseño Full Stack · Desarrollo Web",
  heroImage: "/works/BrisasDelRio/HeroBrisasDelRio.png",
  pageImage: "/works/BrisasDelRio/PageBrisas.png",
  liveUrl: "https://landind-page-brisas-del-rio.vercel.app/",
  stack: ["React / Next.js", "TailwindCSS", "Framer Motion"],
};

const conceptItems = [
  "Estética moderna y minimalista que refleja la tranquilidad del entorno natural",
  "Paleta de colores orgánica inspirada en la vegetación y el río del lugar",
  "Navegación intuitiva que guía al usuario desde el descubrimiento hasta la reserva",
  "Jerarquía visual clara que prioriza la fotografía y los llamados a la acción",
];

const uxItems = [
  "Diseño mobile-first con adaptación fluida a tablets y escritorio",
  "Carga progresiva de imágenes con lazy loading y formatos optimizados",
  "Layout espacioso con uso estratégico del espacio negativo",
  "Micro-animaciones de scroll que enriquecen la navegación sin distraer",
  "Flujo de reserva simplificado en máximo 3 pasos",
];

const sections = [
  "Hero inmersivo con clima en tiempo real y accesos directos a reserva",
  "Galería fotográfica de alta calidad con vistas del proyecto y las cabañas",
  "Sección de hospedaje con tipos de cabaña, amenidades y precios",
  "Restaurante con menú de gastronomía criolla de autor",
  "Mapa interactivo con ubicación estratégica del proyecto",
  "Formulario de contacto directo integrado con WhatsApp",
];

const techItems = [
  "Componentes React reutilizables y optimizados para rendimiento",
  "Arquitectura modular que permite escalar el sitio con nuevas secciones",
  "SEO técnico con meta tags dinámicos, Open Graph y Schema markup",
  "Optimización de imágenes con Next.js Image y formatos WebP automáticos",
  "Despliegue continuo con Vercel y CDN global para tiempos de carga mínimos",
];

export default function BrisasDelRioCaseStudy() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-32 pb-12">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-white/30 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft size={14} />
              Volver al portafolio
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[12px] font-semibold text-white/25 tracking-wider uppercase mb-3"
              >
                {project.category} · {project.year}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.08] mb-4"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[15px] text-white/35 leading-relaxed"
              >
                {project.subtitle}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-start lg:items-end gap-3 shrink-0"
            >
              <p className="text-[13px] text-white/25">{project.role}</p>
              <Link
                href={project.liveUrl}
                target="_blank"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#0a0a0f] transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:scale-[1.02]"
              >
                Ver sitio en vivo
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Screenshot */}
      <section className="pb-4 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/[0.06]"
          >
            <Image
              src={project.heroImage}
              alt={`${project.title} hero`}
              width={1400}
              height={788}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Objetivo + Reto + Página en un solo bloque compacto */}
      <section className="py-20 lg:py-24 bg-[#f5f5f3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-[#111] tracking-tight mb-4">
                Objetivo del Proyecto
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed">
                Crear una presencia digital sólida y profesional para Brisas del
                Río que permitiera conectar con potenciales huéspedes y
                comensales de forma directa. El sitio debía funcionar como una
                vitrina digital del lugar, transmitiendo la experiencia de estar
                ahí: el sonido del río, la vegetación tropical, la calidez de
                las cabañas y el sabor de la gastronomía local. Además, debía
                facilitar el proceso de reserva y consulta de disponibilidad de
                forma intuitiva y rápida.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-[#111] tracking-tight mb-4">
                Retos Abordados
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed">
                El principal desafío fue capturar digitalmente la atmósfera
                única de Brisas del Río sin perder rendimiento web. Las
                fotografías de alta calidad del entorno natural, las cabañas y
                el restaurante eran esenciales para la propuesta visual, pero
                debían cargarse de forma eficiente en conexiones móviles.
                También fue necesario diseñar un flujo de navegación que guiara
                a diferentes tipos de visitantes, desde personas buscando
                hospedaje hasta quienes solo querían conocer el restaurante, sin
                saturar la interfaz con información innecesaria.
              </p>
            </motion.div>
          </div>

          {/* Page screenshot (image has its own browser wrapper and shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center mt-8 lg:-mt-10"
          >
            <Image
              src={project.pageImage}
              alt={`${project.title} hospedaje`}
              width={1600}
              height={1200}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Detalles compactos: 3 columnas */}
      <section className="py-20 lg:py-24 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Secciones Clave */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
            >
              <h3 className="text-base font-bold text-white mb-4 tracking-tight">
                Secciones Clave
              </h3>
              <div className="space-y-2.5">
                {sections.map((s) => (
                  <div key={s} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.06] mt-0.5">
                      <Check
                        size={9}
                        strokeWidth={3}
                        className="text-white/50"
                      />
                    </span>
                    <span className="text-[13px] text-white/40 leading-snug">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enfoque Conceptual */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
            >
              <h3 className="text-base font-bold text-white mb-4 tracking-tight">
                Enfoque Conceptual
              </h3>
              <div className="space-y-2.5">
                {conceptItems.map((c) => (
                  <div key={c} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.06] mt-0.5">
                      <Check
                        size={9}
                        strokeWidth={3}
                        className="text-white/50"
                      />
                    </span>
                    <span className="text-[13px] text-white/40 leading-snug">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UX */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6"
            >
              <h3 className="text-base font-bold text-white mb-4 tracking-tight">
                Experiencia de Usuario
              </h3>
              <div className="space-y-2.5">
                {uxItems.map((u) => (
                  <div key={u} className="flex items-start gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/[0.06] mt-0.5">
                      <Check
                        size={9}
                        strokeWidth={3}
                        className="text-white/50"
                      />
                    </span>
                    <span className="text-[13px] text-white/40 leading-snug">
                      {u}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech + Implementation inline */}
      <section className="py-20 lg:py-24 bg-[#f5f5f3]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Stack */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-[#111] tracking-tight mb-5">
                Tecnologías
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white border border-[#e8e8e6] px-4 py-2 text-[14px] font-medium text-[#555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Implementation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-[#111] tracking-tight mb-5">
                Implementación Técnica
              </h2>
              <div className="space-y-2.5">
                {techItems.map((t) => (
                  <div key={t} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#111] mt-0.5">
                      <Check
                        size={11}
                        strokeWidth={2.5}
                        className="text-white"
                      />
                    </span>
                    <span className="text-[14px] text-[#555] leading-relaxed">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            ¿Tienes un proyecto similar?
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
              Hablemos de tu proyecto
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
