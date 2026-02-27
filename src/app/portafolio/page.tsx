"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const allProjects = [
  {
    title: "Plataforma SaaS Fintech",
    category: "Ingeniería Web",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    context:
      "El cliente necesitaba modernizar su software legado de contabilidad hacia una plataforma SaaS real-time.",
    solution:
      "Arquitectura serverless en Vercel con una API robusta y un pipeline de CI/CD automatizado.",
    impact: "+200% retención de usuarios, -40% costos operativos.",
    href: "#",
  },
  {
    title: "Panel Administrativo de Salud",
    category: "Sistemas Complejos",
    tech: ["React", "Go", "AWS", "Docker"],
    context:
      "Una red de clínicas requería un panel para administrar citas, expedientes y facturación en un solo lugar.",
    solution:
      "Sistema unificado con permisos por rol, auditorías de seguridad HIPAA compliance y UI altamente accesible.",
    impact: "Reducción de errores administrativos en un 85%.",
    href: "#",
  },
  {
    title: "Marketplace B2B Inmobiliario",
    category: "Desarrollo E-commerce",
    tech: ["Next.js", "Supabase", "Stripe", "Framer Motion"],
    context:
      "Conectar fondos de inversión con propiedades comerciales de alto valor en tiempo real.",
    solution:
      "Desarrollo de un marketplace con onboarding automatizado, KYC integrado y transacciones vía Stripe Connect.",
    impact: "Volumen transaccional de $5M en el primer trimestre.",
    href: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Hero */}
      <div className="pt-36 pb-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-5xl font-bold tracking-tight text-[#131212] sm:text-6xl lg:text-7xl leading-[1.05]">
              Casos de Estudio.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#131212]/50 leading-relaxed">
              No solo hacemos pantallas que se ven bien — construimos sistemas
              que resuelven problemas reales y generan valor tangible.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Projects */}
      <div className="px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-7xl flex flex-col gap-8">
          {allProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-black/[0.06] bg-white p-8 lg:p-10 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#261cc1]">
                    {project.category}
                  </span>
                  <Link
                    href={project.href}
                    className="group inline-flex items-center gap-1 text-xs font-medium text-[#131212]/40 hover:text-[#131212] transition-colors"
                  >
                    Ver sitio
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-[#131212] mb-4">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-xs font-medium text-[#131212]/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#131212]/30 mb-2">
                      Contexto
                    </h4>
                    <p className="text-sm text-[#131212]/60 leading-relaxed">
                      {project.context}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#131212]/30 mb-2">
                      Solución
                    </h4>
                    <p className="text-sm text-[#131212]/60 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#261cc1]/5 border border-[#261cc1]/10 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#261cc1] mb-2">
                      Impacto Real
                    </h4>
                    <p className="text-sm font-medium text-[#131212]/80 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
