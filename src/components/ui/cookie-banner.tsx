"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("sorin-cookie-consent");
    if (!hasConsented) {
      // Small delay so it doesn't pop up INSTANTLY on load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("sorin-cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg md:bottom-8 lg:left-8 lg:right-auto"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-2xl">
            {/* Subtle glow */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand/20 blur-[40px]" />

            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 text-white/40 transition-colors hover:text-white"
              aria-label="Cerrar banner de cookies"
            >
              <X size={16} />
            </button>

            <div className="relative z-10">
              <h3 className="mb-2 text-sm font-bold text-white">
                Privacidad y Cookies
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-white/60">
                Utilizamos cookies esenciales para mejorar tu experiencia y
                analizar el tráfico de forma anónima. Al continuar navegando,
                aceptas nuestra{" "}
                <Link href="/privacidad" className="text-brand hover:underline">
                  política de privacidad
                </Link>
                .
              </p>

              <div className="flex gap-3">
                <button
                  onClick={acceptCookies}
                  className="rounded-lg bg-brand px-5 py-2 text-xs font-semibold text-black transition-colors hover:bg-brand-dim"
                >
                  Entendido
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="rounded-lg border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10"
                >
                  Solo necesarias
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
