"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceOptions = [
  "Sitio Web Corporativo",
  "Landing Page",
  "Plataforma Web",
  "Rediseño Web",
  "Diseño UI/UX",
  "Otro",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sorinlabs.com",
    href: "mailto:hello@sorinlabs.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Costa Rica · Remoto",
    href: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pb-20">
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
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-2xl"
          >
            Hablemos de tu <span className="text-white/20">proyecto.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 max-w-lg text-base text-white/35 leading-relaxed"
          >
            Cuéntanos tu idea y diseñemos juntos una experiencia digital que
            haga la diferencia.
          </motion.p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="bg-[#f5f5f3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#555] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-[#e0e0de] bg-white px-4 py-3.5 text-[15px] text-[#111] placeholder:text-[#bbb] transition-colors focus:border-[#261cc1]/30 focus:outline-none focus:ring-2 focus:ring-[#261cc1]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#555] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full rounded-xl border border-[#e0e0de] bg-white px-4 py-3.5 text-[15px] text-[#111] placeholder:text-[#bbb] transition-colors focus:border-[#261cc1]/30 focus:outline-none focus:ring-2 focus:ring-[#261cc1]/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#555] mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa (opcional)"
                      className="w-full rounded-xl border border-[#e0e0de] bg-white px-4 py-3.5 text-[15px] text-[#111] placeholder:text-[#bbb] transition-colors focus:border-[#261cc1]/30 focus:outline-none focus:ring-2 focus:ring-[#261cc1]/10"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#555] mb-2">
                      Servicio
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#e0e0de] bg-white px-4 py-3.5 text-[15px] text-[#111] transition-colors focus:border-[#261cc1]/30 focus:outline-none focus:ring-2 focus:ring-[#261cc1]/10 appearance-none"
                    >
                      <option value="">Selecciona un servicio</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#555] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y plazos..."
                    rows={5}
                    className="w-full rounded-xl border border-[#e0e0de] bg-white px-4 py-3.5 text-[15px] text-[#111] placeholder:text-[#bbb] transition-colors focus:border-[#261cc1]/30 focus:outline-none focus:ring-2 focus:ring-[#261cc1]/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#111] px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-[#261cc1] hover:shadow-[0_8px_30px_rgba(38,28,193,0.25)] active:scale-[0.98]"
                >
                  Enviar mensaje
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-[#e8e8e6] bg-white p-8 lg:p-10 mb-5">
                <h3 className="text-lg font-bold text-[#111] mb-6 tracking-tight">
                  Información de contacto
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#261cc1]/[0.06] border border-[#261cc1]/10">
                        <info.icon
                          size={18}
                          strokeWidth={1.5}
                          className="text-[#261cc1]"
                        />
                      </div>
                      <div>
                        <p className="text-[13px] text-[#999] mb-0.5">
                          {info.label}
                        </p>
                        {info.href ? (
                          <Link
                            href={info.href}
                            className="text-[15px] font-semibold text-[#111] hover:text-[#261cc1] transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-[15px] font-semibold text-[#111]">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#e8e8e6] bg-white p-8 lg:p-10">
                <h3 className="text-lg font-bold text-[#111] mb-3 tracking-tight">
                  Respuesta rápida
                </h3>
                <p className="text-[14px] text-[#777] leading-relaxed">
                  Respondemos en menos de 24 horas. Si tienes un proyecto
                  urgente, escríbenos directamente a{" "}
                  <Link
                    href="mailto:hello@sorinlabs.com"
                    className="text-[#261cc1] font-semibold hover:underline"
                  >
                    hello@sorinlabs.com
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
