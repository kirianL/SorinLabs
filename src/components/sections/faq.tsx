"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "¿Qué tipo de proyectos hacen en Sorin Labs?",
    answer:
      "Diseñamos y desarrollamos sitios web modernos para empresas, landing pages de alto impacto, plataformas web, rediseño de sitios existentes y optimización de experiencia de usuario. Cada proyecto se diseña cuidadosamente antes de construirse.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer:
      "Depende del alcance y la complejidad del proyecto. Un sitio web corporativo puede tomar entre 1 y 2 semanas. Plataformas más complejas pueden requerir más tiempo, pero siempre lo definimos claramente desde la fase de descubrimiento.",
  },
  {
    question: "¿Trabajan con empresas fuera de Costa Rica?",
    answer:
      "Sí. Sorin Labs tiene sede en Costa Rica, pero colaboramos de manera remota con clientes en toda Latinoamérica, Norteamérica y Europa. Nuestra forma de trabajo es 100% remota.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Utilizamos herramientas modernas como React, Next.js, TypeScript y tecnologías actuales que nos permiten crear sitios rápidos, eficientes y preparados para evolucionar con tu negocio.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Cada proyecto comienza con una pregunta simple: ¿cómo debería sentirse la experiencia para la persona que va a usar este producto? A partir de ahí, pasamos por tres fases: descubrimiento, diseño y desarrollo, y lanzamiento. Siempre con comunicación transparente.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-28 lg:py-40 bg-[#f7f7f5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-4">

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.08] mb-6"
            >
              Preguntas
              <br />
              frecuentes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[16px] text-[#777] leading-relaxed mb-8"
            >
              Resolvemos tus dudas sobre cómo trabajamos, nuestros tiempos y qué
              puedes esperar de un proyecto con nosotros.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#261cc1] hover:shadow-[0_8px_30px_rgba(38,28,193,0.25)]"
              >
                ¿Otra pregunta? Escríbenos
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <div
                      className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "border-[#261cc1]/20 shadow-[0_4px_20px_rgba(38,28,193,0.06)]"
                          : "border-[#e8e8e6] hover:border-[#ddd]"
                      }`}
                    >
                      <button
                        onClick={() => toggleOpen(i)}
                        className="flex w-full items-center justify-between p-6 lg:p-7 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[13px] font-bold text-[#261cc1]/30 shrink-0">
                            0{i + 1}
                          </span>
                          <span className="font-semibold text-[17px] text-[#1a1a1a]">
                            {faq.question}
                          </span>
                        </div>
                        <span
                          className={`ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-[#261cc1] text-white rotate-0"
                              : "bg-[#f0f0ee] text-[#999] hover:bg-[#e5e5e3]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={14} strokeWidth={2.5} />
                          ) : (
                            <Plus size={14} strokeWidth={2.5} />
                          )}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 lg:px-7 pb-7 pt-0 pl-[calc(1.5rem+3.25rem)] lg:pl-[calc(1.75rem+3.25rem)]">
                              <p className="text-[15px] text-[#666] leading-[1.7]">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
