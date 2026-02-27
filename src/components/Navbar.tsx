"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={28} />
          <span className="font-semibold text-sm tracking-tight">
            Inertia labs
          </span>
        </a>
        <a
          href="#design-partner"
          className="text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
        >
          Become a Partner
        </a>
      </div>
    </nav>
  );
}
