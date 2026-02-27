"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#131212] py-32 lg:py-44 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            ¿Listo para construir algo{" "}
            <span className="text-white/30">excepcional?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-lg text-white/40 leading-relaxed"
          >
            Transformamos la visión de tu negocio en plataformas digitales de
            alto rendimiento. Empecemos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black tracking-wide uppercase transition-all hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Agendar Consultoría
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="mailto:hello@sorinlabs.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/30 transition-colors hover:text-white"
            >
              o envíanos un email
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
