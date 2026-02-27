import { AnimateOnScroll } from "./AnimateOnScroll";
import { SectionWrapper } from "./SectionWrapper";

export function WhyNow() {
  return (
    <SectionWrapper id="why-now" narrow>
      <AnimateOnScroll>
        <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
          Why Now
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 max-w-[600px]">
          Agent adoption is accelerating, but execution assurance is fragmented.
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed max-w-[600px]">
          The next wave of agent products will be won on{" "}
          <span className="font-semibold text-text-primary">
            control, reliability, and provability
          </span>{" "}
          — not orchestration alone.
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
