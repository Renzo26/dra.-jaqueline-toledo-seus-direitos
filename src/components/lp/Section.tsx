import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("px-5 py-16 sm:px-8 md:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
      <span className="h-px w-6 bg-gold" />
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]", className)}>
      {children}
    </h2>
  );
}
