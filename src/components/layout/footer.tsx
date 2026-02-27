import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Facebook } from "lucide-react";

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

const socialLinks = [
  {
    href: "https://instagram.com/sorinlabs",
    label: "Instagram",
    icon: <Instagram size={18} />,
  },
  {
    href: "https://facebook.com/sorinlabs",
    label: "Facebook",
    icon: <Facebook size={18} />,
  },
  {
    href: "https://x.com/sorinlabs",
    label: "X",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://threads.net/sorinlabs",
    label: "Threads",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.083.717 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.264 1.33-3.03.88-.733 2.14-1.165 3.55-1.217 1.04-.038 2.004.065 2.877.31-.03-1.166-.482-2.07-1.362-2.646-.652-.425-1.487-.646-2.482-.66l-.007-.002c-1.36.013-2.413.397-3.132 1.14l-1.46-1.372C8.644 5.63 10.2 5.07 12.1 5.048h.018c1.397.016 2.595.342 3.562.968 1.205.78 1.93 1.958 2.157 3.5.533.14 1.027.326 1.474.558 1.158.602 2.035 1.467 2.536 2.508.76 1.58.82 4.236-1.194 6.205-1.768 1.728-3.927 2.533-6.99 2.556-.004-.001-.01-.001-.014-.001zM12 13.06c-1.732.063-2.845.735-2.797 1.688.027.537.334.96.863 1.19.577.25 1.259.334 1.912.295 1.078-.06 1.895-.44 2.43-1.131.354-.457.6-1.058.732-1.806-.718-.2-1.502-.288-2.312-.257-.283.01-.56.026-.828.021z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Image
              src="/LogoFullBlanco.svg"
              alt="Sorin Labs"
              width={140}
              height={35}
              className="mb-6 h-8 w-auto"
            />
            <p className="text-sm font-medium text-white/60 mb-6">
              El futuro de la ingeniería digital.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
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

          {/* Contact CTA */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 text-sm font-bold text-white">Hablemos</h4>
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
            © {new Date().getFullYear()} Sorin Labs. Todos los derechos
            reservados.
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
