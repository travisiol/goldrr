export const siteConfig = {
  name: "GOLDR",
  ticker: "$GOLDR",
  tagline: "TRADE MEMES. STACK GOLD.",
  altTagline: "The memecoin that rewards in gold.",
  description:
    "A Robinhood Chain memecoin designed around a simple idea: trading activity helps fund transparent gold rewards and reserves.",
  seoDescription:
    "A gold-focused memecoin experiment built for Robinhood Chain.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://goldr.example",
  x: "https://x.com/goldr_onchain",
} as const;

/**
 * Launch / integration surface. None of these are confirmed live values —
 * everything here is either "not yet configured" or sourced from public
 * research that still needs to be reconfirmed against official docs before
 * go-live. See README for details. Do not treat any address below as
 * verified — they are wired through env vars precisely so nothing here
 * ends up hardcoded and shipped by accident.
 */
/** Treats both "unset" and "" the same way: not configured yet. */
function envOrNull(value: string | undefined): string | null {
  return value && value.trim().length > 0 ? value : null;
}

export const launchConfig = {
  isLive: process.env.NEXT_PUBLIC_GOLDR_LIVE === "true",
  tokenAddress: envOrNull(process.env.NEXT_PUBLIC_GOLDR_TOKEN_ADDRESS),
  treasuryAddress: envOrNull(process.env.NEXT_PUBLIC_GOLDR_TREASURY_ADDRESS),
  ponsLaunchUrl: envOrNull(process.env.NEXT_PUBLIC_GOLDR_PONS_URL),
  buyUrl: envOrNull(process.env.NEXT_PUBLIC_GOLDR_BUY_URL),
  goldAssetDescription: envOrNull(process.env.NEXT_PUBLIC_GOLDR_GOLD_ASSET),
} as const;

export const pons = {
  name: "PONS",
  homepage: "https://ponslaunchpad.com/",
  // Contract addresses for the PONS factory/router are intentionally NOT
  // hardcoded here. Automated research surfaced candidate addresses whose
  // provenance could not be independently verified in this session — do not
  // trust them. Confirm current, audited addresses directly from PONS's own
  // documentation/app before wiring any live launch logic, then set them
  // via env vars.
  factoryAddress: envOrNull(process.env.NEXT_PUBLIC_PONS_FACTORY_ADDRESS),
} as const;
