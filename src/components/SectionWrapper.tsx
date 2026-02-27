export function SectionWrapper({
  children,
  id,
  className = "",
  narrow = false,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
      <div
        className={`mx-auto ${narrow ? "max-w-[800px]" : "max-w-[1200px]"}`}
      >
        {children}
      </div>
    </section>
  );
}
