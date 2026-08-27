import { dashboardStats, LIVE_DATA_ENABLED } from "@/lib/data";
import { DemoBadge } from "./ui/DemoBadge";

function formatUsd(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

const cards = [
  {
    label: "Gold Distributed",
    value: formatUsd(dashboardStats.goldDistributedUsd),
  },
  {
    label: "Treasury",
    value: formatUsd(dashboardStats.treasuryUsd),
  },
  {
    label: "Total Volume",
    value: formatUsd(dashboardStats.totalVolumeUsd),
  },
  {
    label: "GOLDR Holders",
    value: dashboardStats.holders.toLocaleString("en-US"),
  },
];

/**
 * Pre-launch stat placeholder: an animated "loading" bar instead of a
 * numeric value. This is intentional — we don't have real data yet, and we
 * don't fabricate any (see product principle in README / lib/data.ts).
 * Showing "awaiting launch" reads as a live product waiting on real data,
 * without ever claiming a number that isn't true.
 */
function PendingStat() {
  return (
    <div className="mt-3">
      <div className="h-8 w-28 animate-shimmer rounded-md bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_25%,rgba(212,175,55,0.16)_50%,rgba(255,255,255,0.04)_75%)] bg-[length:200%_100%]" />
      <p className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold-500/70">
        <span className="h-1 w-1 rounded-full bg-gold-500/70 animate-pulse" />
        Awaiting launch
      </p>
    </div>
  );
}

export function StatsDashboard() {
  return (
    <section id="treasury" className="mx-auto max-w-6xl px-5 pb-6 sm:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-serif text-2xl text-warm-white">
          Live Dashboard
        </h2>
        {!LIVE_DATA_ENABLED && (
          <DemoBadge label="Not yet live — awaiting chain data" />
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-line bg-ink-soft/60 p-6"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-warm-white/50">
              {card.label}
            </p>
            {LIVE_DATA_ENABLED ? (
              <p className="mt-3 font-mono text-3xl text-gold-300">
                {card.value}
              </p>
            ) : (
              <PendingStat />
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-warm-white/40">
        This dashboard goes live with real, independently verifiable onchain
        data the moment {"$GOLDR"} launches and the treasury mechanism is
        active — nothing here is invented in the meantime.
      </p>
    </section>
  );
}
