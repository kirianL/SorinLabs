import Link from "next/link";
import { HeroTextRotate } from "./hero-text-rotate";

const stack = ["Next.js", "React", "TypeScript", "AWS", "Vercel", "Figma"];

export function HeroSection() {
  return (
    <section 
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
      className="relative bg-[#0a0a0f] flex flex-col pt-24 pb-8 px-4 sm:px-6 lg:px-10 overflow-hidden"
    >
      {/* Framed container */}
      <div
        className="relative w-full flex-1 flex flex-col rounded-[2.5rem] border border-white/[0.08] overflow-hidden"
      >
        {/* Background image — static files, no /_next/image processing */}
        <picture>
          <source media="(max-width: 640px)" srcSet="/hero-640.webp" />
          <source media="(max-width: 1080px)" srcSet="/hero-1080.webp" />
          <img
            src="/HeroSection.webp"
            alt="Sorin Labs — Estudio digital de diseño web y desarrollo desde Costa Rica"
            fetchPriority="high"
            decoding="sync"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </picture>

        {/* Base dark wash */}
        <div className="absolute inset-0 bg-[#0a0a0f]/35 z-[1]" />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/20 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/30 via-transparent to-[#0a0a0f]/30 z-[2]" />

        {/* Noise */}
        <div
          className="absolute inset-0 z-[3] opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-[20%] right-[15%] z-10 text-white/10 text-4xl font-extralight select-none hidden md:block">
          +
        </div>
        <div className="absolute bottom-[30%] left-[10%] z-10 text-white/5 text-6xl font-extralight select-none hidden md:block">
          -
        </div>

        {/* Content — centered */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-12 text-center pb-8 md:pb-4">
          {/* Small cross detail */}
          <span
            className="text-white text-lg md:text-xl font-extralight mb-4 md:mb-6 select-none hero-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            +
          </span>

          {/* Headline with rotating verb */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.12] hero-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="block mb-1 sm:mb-2">Ingeniería</span>
            <span className="flex flex-col sm:flex-row items-center justify-center sm:items-baseline gap-2 sm:gap-4 mt-2 sm:mt-4">
              <span className="text-white/30 font-bold whitespace-nowrap">
                para el
              </span>
              <HeroTextRotate />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-5 md:mt-8 max-w-md text-[14px] sm:text-base text-white/40 leading-relaxed font-light hero-fade-in"
            style={{ animationDelay: "0.65s" }}
          >
            Construimos plataformas y sistemas digitales con precisión técnica y
            diseño intencional.
          </p>

          {/* CTA */}
          <div
            className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 hero-fade-in"
            style={{ animationDelay: "0.85s" }}
          >
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.1] backdrop-blur-sm border border-white/[0.15] px-7 py-3 md:px-8 md:py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.18] hover:border-white/25"
            >
              Empezar proyecto
            </Link>
            <Link
              href="/portafolio"
              className="text-[13px] md:text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
            >
              Ver portafolio →
            </Link>
          </div>
        </div>

        {/* Corner labels */}
        <span
          className="absolute top-6 left-7 z-10 text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium hidden sm:block hero-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          Sorin Labs ©
        </span>
        <span
          className="absolute top-6 right-7 z-10 text-[10px] tracking-[0.2em] uppercase text-white/15 font-medium hidden sm:block hero-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          Costa Rica
        </span>

        {/* Bottom scrolling marquee */}
        <div
          className="absolute bottom-4 left-0 right-0 z-10 overflow-hidden hero-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex gap-10 sm:gap-14 whitespace-nowrap w-max px-7 hero-marquee">
            {[...stack, ...stack, ...stack, ...stack].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-white/15 uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
