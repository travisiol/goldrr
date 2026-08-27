/**
 * ALL values in this file are placeholders for layout/demo purposes only.
 *
 * Per product requirement: never present fabricated numbers as live
 * blockchain statistics. Real stats stay at 0 / null and are clearly
 * badged "DEMO" in the UI until wired to a real indexer or contract reads.
 * Flip `LIVE_DATA_ENABLED` (or wire real data fetching in) once GOLDR has
 * an on-chain presence.
 */
export const LIVE_DATA_ENABLED = false;

export interface DashboardStats {
  goldDistributedUsd: number;
  treasuryUsd: number;
  totalVolumeUsd: number;
  holders: number;
}

export const dashboardStats: DashboardStats = {
  goldDistributedUsd: 0,
  treasuryUsd: 0,
  totalVolumeUsd: 0,
  holders: 0,
};

export interface RewardEvent {
  id: string;
  amountUsd: number;
  asset: "GOLD";
}

/**
 * Sample reward events used ONLY to preview the notification component
 * (see components/RewardToast.tsx). These are explicitly labeled
 * "DEMO / PREVIEW" in the UI itself and are not derived from any real
 * transaction. Do not remove the demo badge when reusing this component.
 */
export const demoRewardEvents: RewardEvent[] = [
  { id: "demo-1", amountUsd: 24.18, asset: "GOLD" },
  { id: "demo-2", amountUsd: 8.42, asset: "GOLD" },
  { id: "demo-3", amountUsd: 112.5, asset: "GOLD" },
];
