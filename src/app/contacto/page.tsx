"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "motion/react";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Hero */}
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-[#131212] sm:text-6xl lg:text-7xl leading-[1.05]">
              Iniciemos una conversación.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#131212]/50 leading-relaxed">
              Cuéntanos sobre tu próximo proyecto, plataforma SaaS o desafío
              técnico.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Form + Info */}
      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-8 lg:p-10 shadow-sm">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#131212]/70">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-black/[0.08] bg-[#f2f2f2] px-4 py-3 text-[#131212] placeholder:text-[#131212]/30 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#131212]/70">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-black/[0.08] bg-[#f2f2f2] px-4 py-3 text-[#131212] placeholder:text-[#131212]/30 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#131212]/70">
                        Email profesional
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-black/[0.08] bg-[#f2f2f2] px-4 py-3 text-[#131212] placeholder:text-[#131212]/30 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#131212]/70">
                        Servicio de interés
                      </label>
                      <select className="w-full rounded-xl border border-black/[0.08] bg-[#f2f2f2] px-4 py-3 text-[#131212] focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all">
                        <option value="">Selecciona una opción</option>
                        <option value="ingenieria">
                          Ingeniería Digital / Sistema Web
                        </option>
                        <option value="diseno">Diseño UI/UX Estratégico</option>
                        <option value="automatizacion">
                          Automatizaciones B2B
                        </option>
                        <option value="infraestructura">
                          Infraestructura / AWS / Vercel
                        </option>
                        <option value="otro">
                          Consultoría Técnica General
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#131212]/70">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-xl border border-black/[0.08] bg-[#f2f2f2] px-4 py-3 text-[#131212] placeholder:text-[#131212]/30 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all resize-none"
                      placeholder="Describe brevemente tus objetivos técnicos o el problema que buscas resolver..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#131212] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#131212]/90 md:w-auto"
                  >
                    Enviar Mensaje
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#131212] mb-1">
                    Información Directa
                  </h3>
                  <p className="text-sm text-[#131212]/40">
                    Respondemos en menos de 24 horas laborables.
                  </p>
                </div>

                <div className="space-y-5">
                  <a
                    href="mailto:hello@sorinlabs.com"
                    className="flex items-center gap-4 text-[#131212]/70 hover:text-[#261cc1] transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f2] group-hover:bg-[#261cc1]/10 transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#131212]/30 uppercase tracking-wider mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-medium">hello@sorinlabs.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/50688888888"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-[#131212]/70 hover:text-[#261cc1] transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f2] group-hover:bg-[#261cc1]/10 transition-colors">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#131212]/30 uppercase tracking-wider mb-0.5">
                        WhatsApp Business
                      </p>
                      <p className="text-sm font-medium">Chatear con Ventas</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-[#131212]/70">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2f2f2]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#131212]/30 uppercase tracking-wider mb-0.5">
                        Ubicación
                      </p>
                      <p className="text-sm font-medium">
                        San José, Costa Rica (Remote-First)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-black/[0.06]">
                  <p className="text-xs text-[#131212]/30 leading-relaxed">
                    Sorin Labs opera de forma 100% cloud y remote-first.
                    Aceptamos clientes en todo Norteamérica, Centroamérica y
                    Europa.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
