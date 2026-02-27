"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const metrics = [
  { value: 99.9, suffix: "%", label: "Uptime garantizado", decimals: 1 },
  { value: 50, suffix: "+", label: "Plataformas entregadas", decimals: 0 },
  { value: 24, suffix: "h", label: "Tiempo de respuesta", decimals: 0 },
  { value: 5, suffix: "★", label: "Rating de clientes", decimals: 0 },
];

function Counter({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => {
    const num = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
    return `${num}${suffix}`;
  });
  useEffect(() => {
    const ctrl = animate(mv, value, { duration: 2.5, ease: "easeOut" });
    return () => ctrl.stop();
  }, [mv, value]);
  return <motion.span>{display}</motion.span>;
}

export function PhilosophySection() {
  return (
    <section className="relative py-32 lg:py-44 bg-[#09090b] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Large statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-8"
            >
              <span className="h-px w-8 bg-[#261cc1]" />
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/25">
                Filosofía
              </span>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-8"
            >
              No diseñamos por tendencia.
              <br />
              <span className="text-white/20">Diseñamos con propósito.</span>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-lg text-base text-white/30 leading-relaxed mb-10"
            >
              Sorin Labs es un estudio de ingeniería y diseño digital.
              Trabajamos con empresas que buscan estructura, eficiencia y
              crecimiento sostenible — no solo presencia digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/nosotros"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white/20 transition-colors hover:text-white/60"
              >
                Conocer el equipo
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Metrics — right col, stacked */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                className="flex items-baseline justify-between py-5 border-b border-white/[0.04] last:border-0"
              >
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  <Counter
                    value={m.value}
                    suffix={m.suffix}
                    decimals={m.decimals}
                  />
                </span>
                <span className="text-xs font-medium text-white/20 tracking-wide text-right max-w-[140px]">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
