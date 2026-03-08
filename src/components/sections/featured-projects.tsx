"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#0a0a0f]">
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 lg:mb-18">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Trabajo reciente.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/portafolio"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-white/40 hover:text-white transition-colors"
            >
              Ver todo el portafolio
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Single featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Link href="/portafolio" className="group block">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-300">
              {/* Image */}
              <div className="relative aspect-[16/9] bg-[#111]">
                <Image
                  src="/works/BrisasDelRio/HeroBrisasDelRio.png"
                  alt="Brisas del Río"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    Brisas del Río
                  </h3>
                  <p className="text-[14px] text-white/35">
                    Sitio Web · Hospedaje — Jiménez, Costa Rica
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/40">
                    Next.js
                  </span>
                  <span className="rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1 text-[11px] font-medium text-white/40">
                    UI/UX
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white/30 group-hover:bg-white group-hover:text-[#0a0a0f] transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
