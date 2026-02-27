"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function FinalCta() {
  return (
    <section className="relative py-40 lg:py-56 bg-[#09090b] overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[0.95]"
          >
            ¿Listo?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-6 text-base sm:text-lg text-white/25 leading-relaxed max-w-md mx-auto"
          >
            Transformamos tu visión en plataformas digitales de alto
            rendimiento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Empezar proyecto
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="mailto:hello@sorinlabs.com"
              className="text-sm font-medium text-white/20 transition-colors hover:text-white/50"
            >
              hello@sorinlabs.com
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
