import { AnimateOnScroll } from "./AnimateOnScroll";
import { SectionWrapper } from "./SectionWrapper";

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const features = [
  {
    title: "Policy-gated execution",
    description: "Enforce controls before sensitive actions run.",
    icon: ShieldIcon,
  },
  {
    title: "Deterministic transcripts",
    description: "Full replay and root-cause analysis of every action.",
    icon: DocumentIcon,
  },
  {
    title: "Reliability controls",
    description: "Retries, recovery, and safe failure handling built in.",
    icon: RefreshIcon,
  },
  {
    title: "Audit-ready evidence",
    description: "Complete compliance and governance trails from day one.",
    icon: CheckIcon,
  },
];

export function Solution() {
  return (
    <SectionWrapper id="solution">
      <AnimateOnScroll>
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Meet Luai
          </h2>
          <p className="text-text-secondary text-lg max-w-[600px] mx-auto mb-2">
            An execution assurance layer for agent actions.
          </p>
          <p className="text-text-tertiary text-sm">Currently in development</p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="p-6 rounded-xl border border-border hover:border-accent/30 bg-white hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center mb-4 text-accent group-hover:bg-accent-light transition-colors">
                  <Icon />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>

      <AnimateOnScroll delay={500}>
        <p className="mt-12 text-text-tertiary text-sm text-center">
          Built for high-stakes workflows where trust matters more than demo
          speed.
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}
