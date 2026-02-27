"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            ¿Listo para construir algo{" "}
            <span className="text-black/30">excepcional?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl text-lg text-black/50 leading-relaxed"
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
              className="group inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white tracking-wide uppercase transition-all hover:bg-neutral-800 hover:shadow-lg"
            >
              Agendar Consultoría
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="mailto:hello@sorinlabs.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-black/40 transition-colors hover:text-black"
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
