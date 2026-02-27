"use client";

import { useState } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { SectionWrapper } from "./SectionWrapper";

const faqs = [
  {
    question: "Do I need to change my existing agent framework?",
    answer:
      "No. Luai is being designed to sit between orchestration and action execution.",
  },
  {
    question: "Is Luai open source?",
    answer:
      "Core runtime components are planned to be open, with commercial infrastructure for enterprise controls and governance.",
  },
  {
    question: "Is this available now?",
    answer:
      "Currently in implementation. Join the design partner list for early access.",
  },
  {
    question: "What workflows are best suited first?",
    answer:
      "High-consequence operations: financial actions, system changes, and compliance-sensitive tasks.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text-primary group-hover:text-accent transition-colors pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 text-text-tertiary transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="8" y1="2" x2="8" y2="14" />
            <line x1="2" y1="8" x2="14" y2="8" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-text-secondary text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" narrow>
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10 text-center">
          Frequently asked questions
        </h2>
      </AnimateOnScroll>
      <AnimateOnScroll delay={100}>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
