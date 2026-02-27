import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Logo size={24} />
          <span className="font-semibold text-sm">Inertia labs</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-text-tertiary">
          <a
            href="mailto:hello@inertialabs.xyz"
            className="hover:text-accent transition-colors"
          >
            hello@inertialabs.xyz
          </a>
          <span>inertialabs.xyz</span>
        </div>

        <p className="text-sm text-text-tertiary">
          &copy; 2026 Inertia labs
        </p>
      </div>
    </footer>
  );
}
