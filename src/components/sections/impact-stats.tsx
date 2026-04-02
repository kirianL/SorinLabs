"use client";

import { motion, useInView, animate } from "motion/react";
import { useRef, useEffect } from "react";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Proyectos completados",
    description: "con éxito",
  },
  {
    value: 2,
    suffix: "+",
    label: "Años de experiencia",
    description: "en diseño digital",
  },
  {
    value: 100,
    suffix: "%",
    label: "Satisfacción",
    description: "de clientes",
  },
  {
    value: 5,
    suffix: "★",
    label: "Calificación",
    description: "promedio",
  },
];

function AnimatedNumber({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;
    
    // Dynamic duration so small numbers like 2 or 5 don't get stuck for seconds
    const dynamicDuration = Math.max(0.5, Math.min(2, value * 0.05));
    
    const controls = animate(0, value, {
      duration: dynamicDuration,
      ease: "easeOut",
      delay: 0.2, // espera a que el CSS/layout se dibuje primero
      onUpdate(v) {
        if (nodeRef.current) {
          nodeRef.current.textContent = `${Math.round(v)}${suffix}`;
        }
      }
    });

    return () => controls.stop();
  }, [isInView, value, suffix]);

  return (
    <span ref={nodeRef}>
      0{suffix}
    </span>
  );
}

export function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-28 lg:py-36 bg-[#f5f5f3]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111] leading-[1.1]"
          >
            Resultados que importan.
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl bg-white border border-[#e8e8e6] p-6 lg:p-8 text-center hover:border-[#261cc1]/20 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-[background-color,border-color,box-shadow] duration-500"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] tracking-tight mb-2">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="text-sm font-semibold text-[#111] mb-1">
                {stat.label}
              </p>
              <p className="text-[13px] text-[#999]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
