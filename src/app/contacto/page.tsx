"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "motion/react";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#131212]">
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Iniciemos una conversación.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 leading-relaxed">
              Cuéntanos sobre tu próximo proyecto, plataforma SaaS o desafío
              técnico.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 lg:p-10">
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60">
                        Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60">
                        Email profesional
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all"
                        placeholder="email@empresa.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60">
                        Servicio de interés
                      </label>
                      <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all">
                        <option value="" className="bg-[#131212]">
                          Selecciona una opción
                        </option>
                        <option value="ingenieria" className="bg-[#131212]">
                          Ingeniería Digital / Sistema Web
                        </option>
                        <option value="diseno" className="bg-[#131212]">
                          Diseño UI/UX Estratégico
                        </option>
                        <option value="automatizacion" className="bg-[#131212]">
                          Automatizaciones B2B
                        </option>
                        <option
                          value="infraestructura"
                          className="bg-[#131212]"
                        >
                          Infraestructura / AWS / Vercel
                        </option>
                        <option value="otro" className="bg-[#131212]">
                          Consultoría Técnica General
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#261cc1] focus:outline-none focus:ring-2 focus:ring-[#261cc1]/20 transition-all resize-none"
                      placeholder="Describe brevemente tus objetivos técnicos..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90 md:w-auto"
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

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Información Directa
                  </h3>
                  <p className="text-sm text-white/30">
                    Respondemos en menos de 24 horas laborables.
                  </p>
                </div>
                <div className="space-y-5">
                  <a
                    href="mailto:hello@sorinlabs.com"
                    className="flex items-center gap-4 text-white/50 hover:text-[#261cc1] transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 group-hover:bg-[#261cc1]/15 transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/20 uppercase tracking-wider mb-0.5">
                        Email
                      </p>
                      <p className="text-sm font-medium">hello@sorinlabs.com</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/50688888888"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 text-white/50 hover:text-[#261cc1] transition-colors group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 group-hover:bg-[#261cc1]/15 transition-colors">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/20 uppercase tracking-wider mb-0.5">
                        WhatsApp Business
                      </p>
                      <p className="text-sm font-medium">Chatear con Ventas</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-white/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white/20 uppercase tracking-wider mb-0.5">
                        Ubicación
                      </p>
                      <p className="text-sm font-medium">
                        San José, Costa Rica (Remote-First)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-white/20 leading-relaxed">
                    Sorin Labs opera 100% cloud y remote-first. Aceptamos
                    clientes en Norteamérica, Centroamérica y Europa.
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
