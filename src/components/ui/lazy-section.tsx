"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
}

export function LazySection({ children, rootMargin = "200px", className }: LazyLoadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? children : null}
    </div>
  );
}
