"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Wrench, AlertCircle } from "lucide-react";
import Link from "next/link";
import { FinalCta } from "@/components/sections/cta-final";

const plans = [
  {
    name: "Inicio",
    price: "$180",
    description: "Para validar tu presencia online de forma rápida y profesional.",
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
    description: "Para negocios que buscan diferenciarse y generar confianza.",
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
    description: "Para negocios que quieren destacar y posicionarse fuerte.",
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

export default function PricingPage() {
  return (
    <div className="min-h-[100svh] bg-[#0a0a0f]">
      {/* Hero — mismo patrón que /servicios y /metodologia */}
      <section className="relative pt-36 pb-20 lg:pb-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Planes diseñados para{" "}
              <span className="text-white/30">tu crecimiento.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base text-white/35 leading-relaxed lg:mt-4"
            >
              Soluciones web profesionales con precios claros. Pago único,
              sin suscripciones. Tu sitio, para siempre.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards — fondo claro, igual que la sección de servicios */}
      <section className="bg-[#f5f5f3] pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch"
          >
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative rounded-2xl border flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#261cc1] border-[#261cc1]"
                    : "bg-white border-[#e8e8e6] hover:border-[#261cc1]/20 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)]"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#111] px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Plan name */}
                  <h3
                    className={`text-[13px] font-semibold tracking-[0.12em] uppercase mb-6 ${
                      plan.highlighted ? "text-white/60" : "text-[#bbb]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className={`text-[13px] font-medium ${
                        plan.highlighted ? "text-white/50" : "text-[#aaa]"
                      }`}
                    >
                      Desde
                    </span>
                    <span
                      className={`text-4xl sm:text-5xl font-bold tracking-tight ${
                        plan.highlighted ? "text-white" : "text-[#111]"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-[13px] mb-8 ${
                      plan.highlighted ? "text-white/40" : "text-[#aaa]"
                    }`}
                  >
                    Pago único
                  </p>

                  {/* Description */}
                  <p
                    className={`text-[15px] leading-relaxed mb-8 ${
                      plan.highlighted ? "text-white/70" : "text-[#777]"
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
                              ? "bg-white/20"
                              : "bg-[#261cc1]/[0.08] border border-[#261cc1]/10"
                          }`}
                        >
                          <Check
                            size={11}
                            strokeWidth={2.5}
                            className={
                              plan.highlighted ? "text-white" : "text-[#261cc1]"
                            }
                          />
                        </span>
                        <span
                          className={`text-sm leading-relaxed ${
                            plan.highlighted ? "text-white/75" : "text-[#555]"
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
                      plan.highlighted ? "text-white/35" : "text-[#aaa]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href="/contacto"
                    className={`group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-all duration-200 w-full ${
                      plan.highlighted
                        ? "bg-white text-[#261cc1] hover:opacity-90 active:scale-[0.98]"
                        : "bg-[#261cc1] text-white hover:opacity-90 active:scale-[0.98]"
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

          {/* External Costs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-2xl border border-[#e8e8e6] bg-white p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle size={18} className="text-[#aaa]" />
              <h3 className="text-[13px] font-semibold tracking-[0.1em] text-[#999] uppercase">
                Costos adicionales
              </h3>
            </div>
            <p className="text-sm text-[#777] leading-relaxed mb-5 max-w-xl">
              Algunos servicios necesarios no están incluidos y son gestionados
              directamente por el cliente.
            </p>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {externalCosts.map((cost) => (
                <li key={cost} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#261cc1]/[0.06] border border-[#261cc1]/10 mt-0.5">
                    <Check size={11} strokeWidth={2.5} className="text-[#261cc1]" />
                  </span>
                  <span className="text-sm text-[#555] leading-relaxed">{cost}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-[#f5f5f3] pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <p className="text-[13px] font-medium tracking-[0.2em] text-[#261cc1] uppercase mb-3">
              Servicios adicionales
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight mb-3">
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
                className="rounded-2xl border border-[#e8e8e6] bg-white p-6 sm:p-8 flex items-center justify-between gap-4 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] hover:border-[#261cc1]/20"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                    <Wrench size={18} strokeWidth={1.5} className="text-[#261cc1]" />
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
