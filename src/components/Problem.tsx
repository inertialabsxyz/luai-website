import { AnimateOnScroll } from "./AnimateOnScroll";
import { SectionWrapper } from "./SectionWrapper";

const problems = [
  "Actions are hard to govern in real time",
  "Failures are hard to replay and debug",
  "Audit evidence is incomplete or inconsistent",
  "High-risk workflows still require manual fallback",
];

export function Problem() {
  return (
    <SectionWrapper id="problem" narrow className="bg-surface">
      <AnimateOnScroll>
        <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Agent execution is a black box
        </h2>
        <p className="text-text-secondary text-lg mb-10">
          Enterprises can deploy agents, but production trust breaks on
          execution:
        </p>
      </AnimateOnScroll>

      <div className="space-y-4">
        {problems.map((text, i) => (
          <AnimateOnScroll key={i} delay={i * 80}>
            <div className="flex items-start gap-3 p-4 bg-surface-elevated rounded-lg border border-border-subtle">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
              <p className="text-text-secondary">{text}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={400}>
        <p className="mt-10 text-text-secondary text-base italic border-l-2 border-accent pl-4">
          If AI can move money, modify systems, or execute operations, execution
          must be controlled and verifiable.
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
