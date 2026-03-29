"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Wrench, AlertCircle } from "lucide-react";
import Link from "next/link";
import { FinalCta } from "@/components/sections/cta-final";

const plans = [
  {
    name: "Inicio",
    price: "$180",
    description:
      "Para validar tu presencia online de forma rápida y profesional.",
    features: [
      "1 página (landing)",
      "Estructura clara y directa",
      "Secciones esenciales (hero, servicios, contacto)",
      "Diseño moderno adaptado a tu marca",
    ],
    cta: "Solicitar cotización",
    tagline: "Ideal para comenzar y tener presencia digital sólida.",
    highlighted: false,
  },
  {
    name: "Impulso",
    badge: "Más popular",
    price: "$320",
    description:
      "Para negocios que buscan diferenciarse y generar confianza.",
    features: [
      "Estructura expandida (hasta 3 secciones o páginas)",
      "Estructura orientada a conversión",
      "Sección de testimonios",
      "Organización estratégica del contenido",
      "Diseño más alineado a tu identidad",
    ],
    cta: "Solicitar cotización",
    tagline: "Perfecto para atraer y convencer clientes.",
    highlighted: true,
  },
  {
    name: "Dominio",
    price: "$550",
    description:
      "Para negocios que quieren destacar y posicionarse fuerte.",
    features: [
      "Hasta 5 páginas o estructura más completa",
      "Diseño avanzado con mejor experiencia visual",
      "Animaciones modernas y fluidas",
      "Arquitectura pensada para escalar",
      "Integración de herramientas externas",
    ],
    cta: "Solicitar cotización",
    tagline: "Pensado para competir en serio en tu mercado.",
    highlighted: false,
  },
];

const addons = [
  { name: "Página adicional", price: "desde $50" },
  { name: "Mantenimiento mensual", price: "desde $30" },
  { name: "Funcionalidades especiales", price: "cotización" },
  { name: "SEO avanzado", price: "cotización" },
];

const externalCosts = [
  "Dominio",
  "Hosting",
  "Servicios externos (base de datos, correos profesionales, integraciones especiales)",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PricingPage() {
  return (
    <div className="bg-[#0a0a0f] overflow-x-hidden pt-12">
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        {/* Gradient orb */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#261cc1]/[0.12] blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6"
            >
              Planes diseñados para{" "}
              <span className="text-white/30">tu crecimiento.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="text-base text-white/35 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Soluciones web profesionales con precios claros. Pago único,
              sin suscripciones. Tu sitio, para siempre.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-24 lg:pb-32 overflow-x-clip">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative rounded-2xl border transition-all duration-300 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#261cc1] via-[#1e16a8] to-[#150f7a] border-[#261cc1]/40"
                    : "bg-[#111113] border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-[#0a0a0f] uppercase shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Plan name */}
                  <h3
                    className={`text-[13px] font-semibold tracking-[0.12em] uppercase mb-6 ${
                      plan.highlighted ? "text-white/60" : "text-white/35"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-[13px] text-white/30 font-medium">
                      Desde
                    </span>
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-[13px] mb-8 ${
                      plan.highlighted ? "text-white/30" : "text-white/20"
                    }`}
                  >
                    Pago único
                  </p>

                  {/* Description */}
                  <p
                    className={`text-[15px] leading-relaxed mb-8 ${
                      plan.highlighted ? "text-white/60" : "text-white/40"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-10 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                            plan.highlighted
                              ? "bg-white/15"
                              : "bg-white/10"
                          }`}
                        >
                          <Check
                            size={11}
                            strokeWidth={2.5}
                            className={
                              plan.highlighted
                                ? "text-white"
                                : "text-white"
                            }
                          />
                        </span>
                        <span
                          className={`text-sm leading-relaxed ${
                            plan.highlighted
                              ? "text-white/75"
                              : "text-white/50"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tagline */}
                  <p
                    className={`text-[13px] italic mb-8 ${
                      plan.highlighted ? "text-white/35" : "text-white/20"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href="/contacto"
                    className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-all duration-200 w-full ${
                      plan.highlighted
                        ? "bg-white text-[#0a0a0f] hover:opacity-90 active:scale-[0.98]"
                        : "bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] active:scale-[0.98]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* External Costs */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.06] bg-[#111113] p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <AlertCircle size={18} className="text-white/40" />
              <h3 className="text-[13px] font-semibold tracking-[0.1em] text-white/50 uppercase">
                Costos adicionales
              </h3>
            </div>
            <p className="text-sm text-white/35 leading-relaxed mb-6 max-w-xl">
              Algunos servicios necesarios no están incluidos y son
              gestionados directamente por el cliente.
            </p>
            <ul className="space-y-3">
              {externalCosts.map((cost) => (
                <li key={cost} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 mt-0.5">
                    <Check size={11} strokeWidth={2.5} className="text-white" />
                  </span>
                  <span className="text-sm text-white/50 leading-relaxed">
                    {cost}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-white/30 mt-6">
              Te guiamos en todo el proceso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-[#f5f5f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-[13px] font-medium tracking-[0.2em] text-[#261cc1] uppercase mb-4">
              Servicios adicionales
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight mb-4">
              Todo lo que necesitas, después del lanzamiento.
            </h2>
            <p className="text-[15px] text-[#777] leading-relaxed">
              Más allá del desarrollo inicial, ofrecemos servicios
              complementarios para mantener y escalar tu presencia digital.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {addons.map((addon) => (
              <motion.div
                key={addon.name}
                variants={itemVariants}
                className="rounded-2xl border border-[#e8e8e6] bg-white p-6 sm:p-8 flex items-center justify-between gap-4 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                    <Wrench
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#261cc1]"
                    />
                  </div>
                  <span className="text-[15px] font-semibold text-[#111]">
                    {addon.name}
                  </span>
                </div>
                <span className="text-sm text-[#777] font-medium whitespace-nowrap">
                  {addon.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
