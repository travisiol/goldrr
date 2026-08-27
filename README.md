# GOLDR

**TRADE MEMES. STACK GOLD.**

A Robinhood Chain memecoin site: trading activity is designed to help fund
transparent gold rewards/reserves through a mechanism that will be disclosed
and made independently verifiable once it's live. Built as a fast, premium,
mobile-first MVP — no complex DeFi mechanics, no fabricated numbers.

## Status: pre-launch

`$GOLDR` has **not launched yet**. The Buy button shows "GOLDR Not Live Yet"
and every dashboard/transparency figure is either `0` or "Coming at launch"
until real values exist. See `.env.example` for the switches that turn this
on once the token, treasury, and gold mechanism are real:

- `NEXT_PUBLIC_GOLDR_LIVE` — flips the Buy button to a real link once true
- `NEXT_PUBLIC_GOLDR_TOKEN_ADDRESS` / `..._TREASURY_ADDRESS` — shown in the
  Transparency section once set
- `NEXT_PUBLIC_GOLDR_PONS_URL` / `..._BUY_URL` — where Buy/PONS links route
- `NEXT_PUBLIC_GOLDR_GOLD_ASSET` — one-line description of the gold
  mechanism, shown once decided

Live on-chain stats (gold distributed, treasury, volume, holders) are wired
through `src/lib/data.ts` and intentionally return `0`/demo values with a
visible badge — swap in real reads (an indexer, subgraph, or direct contract
calls) when the treasury/reward mechanism exists. **Never replace the demo
badge with real-looking numbers that aren't backed by verifiable on-chain
data.**

## Important: verify before trusting any address in this repo

- **Robinhood Chain** network details (chain ID `4663`, RPC, explorer) in
  `src/lib/chain.ts` were gathered from public third-party sources
  (chainlist.org, trustswap.com) on 2026-08-27, not from
  `docs.robinhood.com/chain` directly (unreachable from the build
  environment). Re-confirm against the official docs before mainnet use.
- **PONS** contract/factory addresses are deliberately **not hardcoded**
  anywhere in this codebase. Research surfaced candidate addresses that
  could not be independently verified — do not trust them from any AI
  output, including this one. Confirm current addresses directly from
  PONS's own docs/app, then set `NEXT_PUBLIC_PONS_FACTORY_ADDRESS`.
- Robinhood Chain reportedly has **no native gas token** — gas is paid in
  ETH, and there is no official Robinhood Chain airdrop token. Treat any
  token claiming otherwise as suspicious.

## Stack

Next.js 16 (App Router, TypeScript) + Tailwind CSS v4 + Framer Motion +
wagmi v3 / viem for wallet connect and Robinhood Chain network handling.
No backend — this is a static-first marketing/product site with a small
client-side wallet layer.

## Structure

```
src/
  app/            routes, metadata, OG image, icon, robots/sitemap
  components/     Hero, GoldBar (CSS "3D" bar), StatsDashboard,
                  HowItWorks, RewardToast (+ showcase), Transparency,
                  Navbar, Footer, WalletConnect, BuyButton
  lib/
    chain.ts        Robinhood Chain viem chain definition
    wagmiConfig.ts   wagmi config (injected connector only)
    site-config.ts   site copy + launch/PONS config (env-driven)
    data.ts          demo dashboard stats + demo reward events
```

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build & deploy

```bash
npm run build   # verified passing
npm run start   # production server, for local smoke-testing
```

Deploys as a standard Next.js app on Vercel — connect the repo, set the
env vars from `.env.example` in the Vercel project settings, deploy.

## Wallet connect

Uses `wagmi`'s `injected()` connector (MetaMask, Rabby, Coinbase Wallet
extension, etc. — no WalletConnect/project ID required, keeping deps
minimal for the MVP). Detects whether the connected wallet is on Robinhood
Chain and prompts "Switch to Robinhood Chain" if not. No private keys are
ever requested or stored.
