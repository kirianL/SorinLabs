"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/portafolio", label: "TRABAJO" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/precios", label: "PRECIOS" },
  { href: "/metodologia", label: "MÉTODO" },
  { href: "/nosotros", label: "NOSOTROS" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Simple scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
          mounted && isScrolled && !isMobileMenuOpen
            ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-5">
          <Link href="/" onClick={closeMenu} className="relative z-[60] flex items-center gap-2">
            <Image
              src="/LogoFullBlanco.svg"
              alt="Sorin Labs"
              width={160}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-[11px] font-medium tracking-[0.15em] text-white/50 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && <span className="mx-4" />}
              </span>
            ))}
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contacto"
              className="text-[11px] font-medium tracking-[0.15em] text-white/50 transition-colors hover:text-white"
            >
              CONTACTO
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative z-[60] flex items-center justify-center h-10 w-10 lg:hidden overflow-hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu — Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] bg-[#0a0a0f] flex flex-col lg:hidden"
          >
            {/* Spacer for top bar */}
            <div className="h-[72px] shrink-0" />

            {/* Links */}
            <div className="flex flex-1 flex-col justify-center px-8 -mt-10">
              <nav className="flex flex-col w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between py-5 border-b border-white/[0.06]"
                    >
                      <span
                        className={`text-2xl font-semibold tracking-tight transition-colors group-hover:text-[#4d45d4] ${
                          pathname === link.href ? "text-[#261cc1]" : "text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                      <span className="text-[11px] tracking-widest text-white/15 font-mono">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                  transition={{ delay: 0.1 + navLinks.length * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href="/contacto"
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-5 border-b border-white/[0.06]"
                  >
                    <span
                      className={`text-2xl font-semibold tracking-tight transition-colors group-hover:text-[#4d45d4] ${
                        pathname === "/contacto" ? "text-[#261cc1]" : "text-white"
                      }`}
                    >
                      CONTACTO
                    </span>
                    <span className="text-[11px] tracking-widest text-white/15 font-mono">
                      0{navLinks.length + 1}
                    </span>
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-10 text-xs text-white/20 space-y-1"
              >
                <p>hello@sorinlabs.com</p>
                <p>Costa Rica</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
