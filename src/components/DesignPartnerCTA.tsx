"use client";

import { useEffect } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { SectionWrapper } from "./SectionWrapper";

const benefits = [
  "Early product access",
  "Direct roadmap input",
  "Implementation support",
  "Priority onboarding",
];

export function DesignPartnerCTA() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://tally.so/widgets/embed.js"]',
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <SectionWrapper
      id="design-partner"
      className="bg-gradient-to-b from-accent-subtle/30 to-surface"
    >
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            Design Partner Program
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Become a design partner
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            We&apos;re working with a small set of teams building high-stakes
            agent workflows.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <p className="text-sm font-semibold text-text-primary mb-4">
            As a design partner, you get:
          </p>
          <ul className="space-y-3 inline-flex flex-col items-start mb-10">
            {benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-text-secondary text-sm"
              >
                <span className="h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <button
            data-tally-open="D4Veeb"
            data-tally-layout="modal"
            data-tally-hide-title="1"
            className="rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Apply now
          </button>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
