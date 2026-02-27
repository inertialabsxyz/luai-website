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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
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
            <ul className="space-y-3">
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
        </div>

        <AnimateOnScroll delay={200}>
          <div className="bg-surface-elevated rounded-xl border border-border p-1">
            {/* Replace FORM_ID with your Tally form ID */}
            <iframe
              data-tally-src="https://tally.so/embed/https://tally.so/r/D4Veeb?alignLeft=1&hideTitle=1&transparentBackground=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder={0}
              title="Design Partner Application"
              className="rounded-lg"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}
