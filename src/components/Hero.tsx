import { AnimateOnScroll } from "./AnimateOnScroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-subtle/50 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-text-tertiary) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[800px] mx-auto text-center">
        <AnimateOnScroll>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
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

      <AnimateOnScroll delay={400}>
        <div
          className="relative w-full max-w-[700px] mx-auto"
          style={{ perspective: "1000px" }}
        >
          <div
            className="rounded-xl border border-border bg-surface-elevated overflow-hidden shadow-2xl shadow-accent/5"
            style={{
              transform: "rotateX(4deg)",
              transformOrigin: "center bottom",
            }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
              <span className="h-3 w-3 rounded-full bg-red-500/20" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/20" />
              <span className="h-3 w-3 rounded-full bg-green-500/20" />
              <span className="ml-2 text-xs text-text-tertiary font-mono">
                luai trace — payment-approval-workflow
              </span>
            </div>
            <div className="p-5 font-mono text-xs leading-6 text-text-secondary overflow-x-auto">
              <div>
                <span className="text-text-tertiary">10:42:01</span>{" "}
                <span className="text-accent">▶ workflow.start</span>{" "}
                <span className="text-text-tertiary">
                  payment-approval-workflow
                </span>
              </div>
              <div>
                <span className="text-text-tertiary">10:42:01</span>{" "}
                <span className="text-accent">● policy.check</span>{" "}
                <span className="text-green-600 dark:text-green-400">
                  PASS
                </span>{" "}
                <span className="text-text-tertiary">
                  amount ≤ $10,000 threshold
                </span>
              </div>
              <div>
                <span className="text-text-tertiary">10:42:02</span>{" "}
                <span className="text-accent">▶ action.execute</span>{" "}
                <span className="text-text-tertiary">
                  initiate_bank_transfer
                </span>
              </div>
              <div>
                <span className="text-text-tertiary">10:42:03</span>{" "}
                <span className="text-accent">● policy.check</span>{" "}
                <span className="text-green-600 dark:text-green-400">
                  PASS
                </span>{" "}
                <span className="text-text-tertiary">
                  recipient in approved-vendors list
                </span>
              </div>
              <div>
                <span className="text-text-tertiary">10:42:04</span>{" "}
                <span className="text-accent">✓ action.complete</span>{" "}
                <span className="text-text-tertiary">
                  transfer $4,200 → Acme Corp
                </span>
              </div>
              <div>
                <span className="text-text-tertiary">10:42:04</span>{" "}
                <span className="text-accent">■ transcript.sealed</span>{" "}
                <span className="text-text-tertiary">
                  hash:{" "}
                  <span className="text-text-primary">a3f8c2…e91d</span> —
                  audit-ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
