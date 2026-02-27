"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "/portafolio", label: "TRABAJO" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/metodologia", label: "MÉTODO" },
  { href: "/nosotros", label: "NOSOTROS" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#131212]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-5">
        <Link href="/" className="relative z-[60] flex items-center gap-2">
          <Image
            src="/LogoFullBlanco.svg"
            alt="Sorin Labs"
            width={160}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex items-center">
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="text-[11px] font-medium tracking-[0.15em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="mx-4 text-[11px] text-white/20 select-none">
                  ,
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Right — Contact */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contacto"
            className="text-[11px] font-medium tracking-[0.15em] text-white/50 transition-colors hover:text-white"
          >
            CONTACTO
          </Link>
        </div>

        {/* Mobile Toggle — Animated Lines */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-[60] flex flex-col items-end justify-center gap-[5px] h-10 w-10 lg:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={
              isMobileMenuOpen
                ? { rotate: 45, y: 7, width: 24 }
                : { rotate: 0, y: 0, width: 24 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white rounded-full origin-center"
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { opacity: 0, x: 12 } : { opacity: 1, x: 0 }
            }
            transition={{ duration: 0.2 }}
            className="block h-[2px] w-4 bg-white/60 rounded-full"
          />
          <motion.span
            animate={
              isMobileMenuOpen
                ? { rotate: -45, y: -7, width: 24 }
                : { rotate: 0, y: 0, width: 16 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block h-[2px] bg-white/40 rounded-full origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu — Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-[#0e0e12] lg:hidden"
          >
            {/* Menu content */}
            <div className="flex flex-1 flex-col items-start justify-center px-10">
              <nav className="flex flex-col gap-2 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.06,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-4 border-b border-white/5"
                    >
                      <span className="text-3xl font-light tracking-tight text-white/80 transition-colors group-hover:text-white">
                        {link.label}
                      </span>
                      <span className="text-[11px] tracking-widest text-white/15 font-mono">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + navLinks.length * 0.06,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-4 border-b border-white/5"
                  >
                    <span className="text-3xl font-light tracking-tight text-[#261cc1] transition-colors group-hover:text-white">
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
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-12 text-xs text-white/20 space-y-1"
              >
                <p>hello@sorinlabs.com</p>
                <p>San José, Costa Rica</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
