import { clsx } from "clsx";

export function DemoBadge({
  label = "DEMO",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-300",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
      {label}
    </span>
  );
}
