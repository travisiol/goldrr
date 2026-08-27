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
            <p className="mt-3 font-mono text-3xl text-gold-300">
              {card.value}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-warm-white/40">
        These figures reflect the current build and are intentionally zero —
        they will switch to live, independently verifiable onchain data once
        {" "}
        {"$GOLDR"} launches and the treasury mechanism goes live.
      </p>
    </section>
  );
}
