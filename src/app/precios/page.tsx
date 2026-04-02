"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Server, HelpCircle } from "lucide-react";
import Link from "next/link";
import { FinalCta } from "@/components/sections/cta-final";

const plans = [
  {
    name: "Starter",
    price: "$200",
    description: "Para tener presencia online de forma simple y directa.",
    features: [
      "1 página",
      "Información esencial del negocio",
      "Sección de contacto",
      "Publicación lista para uso",
    ],
    result: "Tu negocio ya está online y accesible para tus clientes.",
    cta: "Comenzar",
    highlighted: false,
  },
  {
    name: "Launch",
    price: "$300",
    description: "Para presentar tu negocio en una sola página bien estructurada.",
    features: [
      "1 página tipo landing",
      "Secciones organizadas (servicios, información, contacto)",
      "Contenido distribuido de forma clara",
      "Estructura pensada para comunicar tu propuesta",
    ],
    result: "Tu negocio se presenta de forma clara y profesional.",
    cta: "Iniciar proyecto",
    highlighted: false,
  },
  {
    name: "Growth",
    badge: "Más popular",
    price: "$650",
    description: "Para distribuir tu contenido en diferentes secciones independientes.",
    features: [
      "Hasta 3 páginas",
      "Separación de servicios o información",
      "Organización por secciones",
      "Estructura multipágina",
    ],
    result: "Tu información está organizada y fácil de explorar.",
    cta: "Escalar mi presencia",
    highlighted: true,
  },
  {
    name: "Authority",
    price: "$1,200",
    description: "Para proyectos que requieren una estructura más amplia.",
    features: [
      "Hasta 5 páginas",
      "Distribución completa del contenido",
      "Secciones independientes para cada área",
      "Base preparada para futuras integraciones",
    ],
    result: "Una estructura completa para tu presencia digital.",
    cta: "Posicionar mi marca",
    highlighted: false,
  },
];

const infraItems = [
  "Dominio y hosting a tu nombre",
  "Escalable según tráfico",
  "Posibilidad de integrar bases de datos y sistemas",
];

const selector = [
  { condition: "Presupuesto limitado", plan: "Starter" },
  { condition: "Quieres verte profesional", plan: "Launch" },
  { condition: "Quieres clientes constantes", plan: "Growth" },
  { condition: "Quieres posicionarte fuerte", plan: "Authority" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-[100svh] bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 lg:pb-28">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
              >
                Diseño web moderno que eleva la percepción de tu{" "}
                <span className="text-white/30">negocio.</span>
              </motion.h1>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-base text-white/40 leading-relaxed mb-8"
              >
                Creamos sitios limpios, atractivos y de alto impacto visual que captan atención,
                transmiten profesionalismo y hacen que tu marca destaque.
                Soluciones desde $200 USD hasta proyectos avanzados.
              </motion.p>

            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#f5f5f3] pt-16 pb-12 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[13px] text-[#888] font-medium text-center mb-10">
            Todos los planes incluyen diseño moderno, responsive y optimizado. La diferencia es la estructura.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
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
                    <span className="inline-flex items-center rounded-full bg-[#111] px-4 py-1.5 text-[10px] font-bold tracking-[0.1em] text-white uppercase shadow-lg whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 lg:p-8 flex flex-col flex-1">
                  {/* Plan name */}
                  <h3
                    className={`text-[12px] font-bold tracking-[0.14em] uppercase mb-5 ${
                      plan.highlighted ? "text-white/60" : "text-[#bbb]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className={`text-3xl sm:text-4xl font-bold tracking-tight ${
                        plan.highlighted ? "text-white" : "text-[#111]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        plan.highlighted ? "text-white/50" : "text-[#aaa]"
                      }`}
                    >
                      USD
                    </span>
                  </div>
                  <p
                    className={`text-[12px] mb-6 ${
                      plan.highlighted ? "text-white/40" : "text-[#bbb]"
                    }`}
                  >
                    Pago único
                  </p>

                  {/* Description */}
                  <p
                    className={`text-[14px] leading-relaxed mb-7 ${
                      plan.highlighted ? "text-white/65" : "text-[#666]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-7 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span
                          className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full mt-0.5 ${
                            plan.highlighted
                              ? "bg-white/20"
                              : "bg-[#261cc1]/[0.07] border border-[#261cc1]/10"
                          }`}
                        >
                          <Check
                            size={10}
                            strokeWidth={2.5}
                            className={plan.highlighted ? "text-white" : "text-[#261cc1]"}
                          />
                        </span>
                        <span
                          className={`text-[13px] leading-relaxed ${
                            plan.highlighted ? "text-white/75" : "text-[#555]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Result */}
                  <p
                    className={`text-[12px] leading-relaxed mb-7 pb-6 border-b ${
                      plan.highlighted
                        ? "text-white/40 border-white/10"
                        : "text-[#aaa] border-[#ebebeb]"
                    }`}
                  >
                    <span className={`font-semibold ${plan.highlighted ? "text-white/55" : "text-[#888]"}`}>
                      Resultado:
                    </span>{" "}
                    {plan.result}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/contacto"
                    className={`group flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold transition-all duration-200 w-full ${
                      plan.highlighted
                        ? "bg-white text-[#261cc1] hover:opacity-90 active:scale-[0.98]"
                        : "bg-[#111] text-white hover:bg-[#261cc1] active:scale-[0.98]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Infrastructure + Selector */}
      <section className="bg-[#f5f5f3] pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="bg-white rounded-[2.5rem] border border-[#e8e8e6] overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-md transition-shadow">
            {/* Plan Selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#e8e8e6]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                  <HelpCircle size={18} strokeWidth={1.5} className="text-[#261cc1]" />
                </div>
                <h3 className="text-[14px] font-bold tracking-[0.15em] text-[#111] uppercase">
                  ¿Qué plan elegir?
                </h3>
              </div>
              <div className="space-y-4">
                {selector.map((s) => (
                  <div key={s.plan} className="group flex items-center justify-between gap-4 py-4 px-5 rounded-2xl border border-transparent hover:border-[#261cc1]/10 hover:bg-[#261cc1]/[0.02] transition-all">
                    <span className="text-[15px] text-[#666] font-medium leading-none">{s.condition}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold tracking-[0.1em] text-[#261cc1] bg-white border border-[#261cc1]/20 rounded-full px-4 py-1.5 shadow-sm uppercase">
                        {s.plan}
                      </span>
                      <ArrowRight size={14} className="text-[#261cc1]/40 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Infrastructure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 p-8 sm:p-12 bg-[#fafaf9]/30"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                  <Server size={18} strokeWidth={1.5} className="text-[#261cc1]" />
                </div>
                <h3 className="text-[14px] font-bold tracking-[0.15em] text-[#111] uppercase">
                  Infraestructura
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 mb-10">
                {infraItems.map((item) => (
                  <div key={item} className="flex items-start gap-4 p-4 rounded-xl border border-dashed border-[#e8e8e6] bg-white/50">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#261cc1]/10 mt-0.5">
                      <Check size={11} strokeWidth={2.5} className="text-[#261cc1]" />
                    </div>
                    <span className="text-[14px] text-[#555] font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-2xl bg-[#261cc1] text-white shadow-lg shadow-[#261cc1]/20">
                <p className="text-[14px] font-bold tracking-tight mb-1">
                  Tu sitio es tuyo. Sin dependencias.
                </p>
                <p className="text-[11px] text-white/50 uppercase tracking-widest font-bold">
                  Propiedad garantizada
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
