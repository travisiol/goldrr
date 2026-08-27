"use client";

import { motion } from "framer-motion";
import { GoldBar } from "./GoldBar";
import { BuyButton } from "./BuyButton";
import { siteConfig } from "@/lib/site-config";

const tickerItems = [
  "TRADE MEMES",
  "STACK GOLD",
  `${siteConfig.ticker} ON ROBINHOOD CHAIN`,
  "LAUNCHED VIA PONS",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-noise opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-line-strong px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-300"
        >
          Built for Robinhood Chain &middot; Launching via PONS
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-7 font-serif text-5xl leading-[1.05] text-warm-white text-balance sm:text-6xl md:text-7xl"
        >
          GOLDR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold-400 sm:text-base"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-warm-white/60 sm:text-lg"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <BuyButton />
          <a
            href="#treasury"
            className="inline-flex items-center justify-center rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-warm-white transition hover:border-gold-500/60 hover:text-gold-300"
          >
            View Treasury
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16 w-full sm:mt-20"
        >
          <GoldBar />
        </motion.div>
      </div>

      <div className="relative border-y border-line bg-ink-soft/60 py-3">
        <div className="flex w-max animate-ticker gap-10 whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-xs tracking-widest text-warm-white/40"
            >
              {item}
              <span className="mx-10 text-gold-500/40">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
