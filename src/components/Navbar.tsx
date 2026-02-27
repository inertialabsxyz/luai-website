"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
          ? "bg-surface-elevated/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/logo-small.png"
            alt="Inertia labs"
            className="h-8 dark:invert"
          />
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#design-partner"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </nav>
  );
}
