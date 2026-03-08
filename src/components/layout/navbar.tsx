"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";

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

  // iOS-safe scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-5">
          <Link href="/" className="flex items-center gap-2">
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
                {i < navLinks.length - 1 && (
                  <span className="mx-4 text-[11px] text-white/20 select-none">
                    ,
                  </span>
                )}
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

          {/* Mobile: hamburger / close */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-[70] flex items-center justify-center h-10 w-10 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay — outside header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100dvh",
              backgroundColor: "#0a0a0f",
              zIndex: 60,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Top bar with logo */}
            <div className="flex items-center justify-between px-6 py-5">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/LogoFullBlanco.svg"
                  alt="Sorin Labs"
                  width={160}
                  height={36}
                  className="h-8 w-auto"
                />
              </Link>
              {/* Spacer for the close button which sits in the header z-70 */}
              <div className="h-10 w-10" />
            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col justify-center px-8 -mt-16">
              <nav className="flex flex-col gap-0 w-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-white/[0.06]"
                    >
                      <span className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#4d45d4]">
                        {link.label}
                      </span>
                      <span className="text-[11px] tracking-widest text-white/15 font-mono">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + navLinks.length * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href="/contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-5 border-b border-white/[0.06]"
                  >
                    <span className="text-2xl font-semibold tracking-tight text-[#4d45d4] transition-colors group-hover:text-white">
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
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-10 text-xs text-white/20 space-y-1"
              >
                <p>hello@sorinlabs.com</p>
                <p>San José, Costa Rica</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
