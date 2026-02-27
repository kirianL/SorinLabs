"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import SlideTextButton from "@/components/kokonutui/slide-text-button";

const faqs = [
  {
    question: "¿En qué tipo de proyectos se especializan?",
    answer:
      "Nos especializamos en plataformas SaaS, paneles administrativos, e-commerce avanzado y aplicaciones web de alto rendimiento. Construimos soluciones complejas que requieren integraciones, alta seguridad y escalabilidad.",
  },
  {
    question: "¿Cuánto dura el desarrollo de una plataforma típica?",
    answer:
      "Depende de la complejidad y alcance. Una MVP funcional suele tomar entre 8 y 12 semanas. Proyectos empresariales con arquitecturas avanzadas pueden requerir estimaciones más largas, las cuales definimos claramente en la Fase 1.",
  },
  {
    question: "¿Trabajan con empresas fuera de Costa Rica?",
    answer:
      "Totalmente. Nuestro estudio tiene sede en Costa Rica, pero colaboramos de manera remota con clientes en toda Latinoamérica, Norteamérica y Europa.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Principalmente React, Next.js, Node.js, TypeScript y Tailwind CSS en el front-end; y diversas arquitecturas Cloud (AWS, Vercel, Supabase) en el back-end para garantizar robustez.",
  },
  {
    question: "¿Ofrecen soporte técnico después del lanzamiento?",
    answer:
      "Sí, todos nuestros proyectos incluyen una fase de soporte post-lanzamiento. También ofrecemos planes de mantenimiento y evolución continua (retainers) adaptados a cada negocio.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[#f2f2f2] text-black">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
              FAQ.
            </h2>
            <p className="text-lg text-black/50">
              ¿Tienes preguntas? Te ayudamos a resolverlas.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-black/5 bg-white overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleOpen(i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-black/50 transition-colors hover:bg-black/10 hover:text-black">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-0 text-black/60 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-20 flex flex-col items-center text-center">
            <p className="mb-6 font-medium text-black">
              ¿No encuentras lo que buscas? Escríbenos.
            </p>
            <SlideTextButton
              href="/contacto"
              text="hello@sorinlabs.com"
              hoverText="Agendar Llamada"
              className="min-w-64"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
