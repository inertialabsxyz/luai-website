import { AnimateOnScroll } from "./AnimateOnScroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-subtle/50 to-transparent pointer-events-none" />

      <div className="relative max-w-[800px] mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-6">
            Inertia Labs
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Building trust infrastructure for AI agent execution.
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="text-lg md:text-xl text-text-secondary max-w-[600px] mx-auto mb-4">
            Agents can act. But can you prove what they did?
          </p>
          <p className="text-base text-text-tertiary max-w-[560px] mx-auto mb-10">
            We&apos;re building{" "}
            <span className="font-semibold text-text-primary">Luai</span> — a
            deterministic execution layer for AI-generated workflows, with
            policy controls and audit-ready traces.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#design-partner"
              className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              Join Design Partner Program
            </a>
            <a
              href="#updates"
              className="px-6 py-3 border border-border rounded-lg font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors"
            >
              Get Updates
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
