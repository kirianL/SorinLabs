import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  servicios: [
    { href: "/servicios#ingenieria", label: "Ingeniería" },
    { href: "/servicios#diseno", label: "Diseño" },
    { href: "/servicios#automatizacion", label: "Data & IA" },
    { href: "/servicios#infraestructura", label: "Cloud" },
  ],
  empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/metodologia", label: "Metodología" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/contacto", label: "Contacto" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand - Left */}
          <div className="lg:col-span-4">
            <Image
              src="/LogoFullBlanco.svg"
              alt="Sorin Labs"
              width={140}
              height={35}
              className="mb-6 h-8 w-auto"
            />
            <p className="text-sm font-medium text-white/60">
              The future of Digital Engineering.
            </p>
          </div>

          {/* Links - Center */}
          <div className="lg:col-span-4 flex gap-16 sm:gap-24">
            <div>
              <h4 className="mb-6 text-sm font-bold text-white">Servicios</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.servicios.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold text-white">Empresa</h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.empresa.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Right */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-sm font-bold text-white">Stay updated</h4>
            <p className="mb-6 text-sm font-medium text-white/60 leading-relaxed">
              Agendemos una consultoría y definamos el alcance técnico de tu
              próximo proyecto.
            </p>
            <div className="flex w-full items-center">
              <Link
                href="/contacto"
                className="flex w-full items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/50 transition-colors hover:border-white/20"
              >
                <span>hello@sorinlabs.com</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black transition-transform hover:scale-105">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs font-medium text-white/40">
            © {new Date().getFullYear()} Sorin Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium text-white/40">
            <Link href="/terminos" className="hover:text-white">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-white">
              Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
