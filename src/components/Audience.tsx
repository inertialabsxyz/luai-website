import { AnimateOnScroll } from "./AnimateOnScroll";
import { SectionWrapper } from "./SectionWrapper";

const audiences = [
  "AI Platform teams",
  "Security / Governance teams",
  "Finance & Operations leaders",
  "Compliance and audit stakeholders",
];

export function Audience() {
  return (
    <SectionWrapper id="audience" className="bg-surface" narrow>
      <AnimateOnScroll>
        <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
          Who It&apos;s For
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
          Built for teams running real agent workflows
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {audiences.map((audience, i) => (
          <AnimateOnScroll key={i} delay={i * 80}>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-white border border-border-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-text-secondary font-medium text-sm">
                {audience}
              </span>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={400}>
        <div className="bg-accent-subtle rounded-xl p-6 text-center">
          <p className="text-text-secondary text-sm">
            <span className="font-semibold text-text-primary">Use cases:</span>{" "}
            payment approvals, IT runbooks, reconciliation workflows, and other
            risk-sensitive automations.
          </p>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
