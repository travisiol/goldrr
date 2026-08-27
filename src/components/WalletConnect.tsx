"use client";

import { useConnect, useConnection, useDisconnect, useSwitchChain } from "wagmi";
import { robinhoodChain } from "@/lib/chain";
import { clsx } from "clsx";

function short(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function WalletConnect({ className }: { className?: string }) {
  // wagmi's `ssr: true` config keeps the server-rendered state and the
  // first client render in sync (both start "disconnected"), so there's no
  // hydration-mismatch gate needed here — wagmi reconciles any persisted
  // connection asynchronously after mount.
  const { address, isConnected, chainId } = useConnection();
  const { connect, connectors, isPending: isConnecting, error: connectError } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { mutate: switchChain, isPending: isSwitching } = useSwitchChain();

  const wrongNetwork = isConnected && chainId !== robinhoodChain.id;

  if (isConnected && address) {
    if (wrongNetwork) {
      return (
        <button
          type="button"
          onClick={() => switchChain({ chainId: robinhoodChain.id })}
          disabled={isSwitching}
          className={clsx(
            "rounded-full border border-gold-500/50 bg-gold-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gold-300 transition hover:bg-gold-500/20 disabled:opacity-60",
            className,
          )}
        >
          {isSwitching ? "Switching…" : "Switch to Robinhood Chain"}
        </button>
      );
    }

    return (
      <button
        type="button"
        onClick={() => disconnect()}
        className={clsx(
          "group flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 py-2 text-xs font-medium text-warm-white transition hover:border-gold-500/50",
          className,
        )}
        title="Disconnect wallet"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green" />
        {short(address)}
      </button>
    );
  }

  const injectedConnector = connectors[0];

  return (
    <div className={clsx("flex flex-col items-end gap-1", className)}>
      <button
        type="button"
        disabled={!injectedConnector || isConnecting}
        onClick={() =>
          injectedConnector && connect({ connector: injectedConnector })
        }
        className="rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isConnecting
          ? "Connecting…"
          : injectedConnector
            ? "Connect Wallet"
            : "No Wallet Found"}
      </button>
      {connectError && (
        <span className="max-w-[220px] text-right text-[10px] text-red-400">
          {connectError.message}
        </span>
      )}
    </div>
  );
}
