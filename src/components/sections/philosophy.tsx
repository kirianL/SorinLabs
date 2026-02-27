"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const metrics = [
  { value: 99.9, suffix: "%", label: "Uptime", decimals: 1 },
  { value: 50, suffix: "+", label: "Plataformas", decimals: 0, prefix: "+" },
  { value: 24, suffix: "h", label: "Respuesta", decimals: 0 },
  { value: 5, suffix: "★", label: "Rating", decimals: 0 },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  decimals,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  decimals: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => {
    const formatted =
      decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString();
    return `${prefix || ""}${formatted}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(motionVal, value, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [motionVal, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden py-28 lg:py-40 bg-[#fafafa] text-black"
      id="nosotros"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Text Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl leading-[1.1]">
                Tecnología con intención.
                <br />
                <span className="text-black/40">Diseño con estructura.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="mt-8 text-lg text-black/60 leading-relaxed max-w-lg">
                Sorin Labs es un estudio de ingeniería y diseño digital enfocado
                en la creación de sistemas web, plataformas escalables y
                soluciones tecnológicas estratégicas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="mt-4 text-base text-black/50 leading-relaxed max-w-lg">
                Trabajamos con empresas que buscan más que presencia digital:
                buscan estructura, eficiencia y crecimiento sostenible.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div className="mt-10">
                <Link
                  href="/nosotros"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-black/70"
                >
                  Conocer más sobre nosotros
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual: Animated Metrics Grid */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 + i * 0.12,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                    borderColor: "rgba(0,0,0,0.1)",
                  }}
                  className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm cursor-default"
                >
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                      decimals={metric.decimals}
                    />
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                    className="mt-1 text-sm font-medium text-black/40"
                  >
                    {metric.label}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{
                y: -2,
                boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
              }}
              className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm"
            >
              <p className="text-xl font-medium italic text-black/80 leading-relaxed">
                &ldquo;No diseñamos por tendencia. Diseñamos con
                propósito.&rdquo;
              </p>
              <p className="mt-4 text-sm font-medium text-black/30">
                — Equipo Sorin Labs
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
