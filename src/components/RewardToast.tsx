"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { demoRewardEvents, type RewardEvent } from "@/lib/data";
import { DemoBadge } from "./ui/DemoBadge";

function RewardCard({ event }: { event: RewardEvent }) {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gold-500/25 bg-ink-elevated/95 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 font-serif text-sm text-gold-300"
          >
            G
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-warm-white/70">
              GOLDR
            </p>
            <p className="text-[11px] text-warm-white/45">
              Gold reward received
            </p>
          </div>
        </div>
        <DemoBadge label="Preview" />
      </div>
      <p className="mt-3 font-mono text-2xl text-gold-300">
        +${event.amountUsd.toFixed(2)}{" "}
        <span className="text-base text-gold-500/70">GOLD</span>
      </p>
    </div>
  );
}

/**
 * Reusable reward-notification component, styled like a modern brokerage
 * push notification. Intended to (a) later bind to real reward events once
 * the gold mechanism is live, and (b) work well as a standalone screenshot
 * for social. Always carries a visible "Preview" badge while running on
 * demo data — never remove the badge to make demo output look real.
 */
export function RewardToast({ event }: { event: RewardEvent }) {
  return <RewardCard event={event} />;
}

export function RewardToastShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % demoRewardEvents.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  const event = demoRewardEvents[index];

  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <RewardCard event={event} />
        </motion.div>
      </AnimatePresence>
      <p className="max-w-sm text-center text-xs text-warm-white/40">
        Illustrative preview only — no reward mechanism is live yet. This
        will connect to real reward events once {"$GOLDR"} launches and the
        gold mechanism goes live.
      </p>
    </div>
  );
}
