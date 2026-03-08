"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Sitios optimizados",
    description: "para rendimiento",
  },
  {
    value: 30,
    suffix: "+",
    label: "Experiencias diseñadas",
    description: "con intención",
  },
  {
    value: 100,
    suffix: "%",
    label: "Proyectos entregados",
    description: "a tiempo",
  },
  {
    value: 5,
    suffix: "★",
    label: "Satisfacción de clientes",
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl bg-white border border-[#e8e8e6] p-6 lg:p-8 text-center hover:border-[#261cc1]/20 hover:shadow-[0_8px_40px_rgba(38,28,193,0.06)] transition-all duration-300"
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
