import { launchConfig, pons } from "@/lib/site-config";

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string | null;
}) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4 last:border-none sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs font-medium uppercase tracking-wider text-warm-white/50">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-gold-300 underline decoration-gold-500/30 underline-offset-4 hover:text-gold-200"
        >
          {value}
        </a>
      ) : (
        <span className="font-mono text-sm text-warm-white/70">{value}</span>
      )}
    </div>
  );
}

const COMING_AT_LAUNCH = "Coming at launch";

export function Transparency() {
  return (
    <section
      id="transparency"
      className="mx-auto max-w-4xl px-5 py-24 sm:px-8"
    >
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          Transparency
        </p>
        <h2 className="mt-3 font-serif text-3xl text-warm-white sm:text-4xl">
          Verify it yourself
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-warm-white/55">
          Every claim GOLDR makes should be checkable onchain. Anything not
          live yet is labeled plainly &mdash; we don&rsquo;t invent numbers to
          fill the gap.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-ink-soft/60 px-6">
        <Row
          label="Token contract"
          value={launchConfig.tokenAddress ?? COMING_AT_LAUNCH}
        />
        <Row
          label="Treasury / vault address"
          value={launchConfig.treasuryAddress ?? COMING_AT_LAUNCH}
        />
        <Row
          label="PONS launch"
          value={launchConfig.ponsLaunchUrl ? "View on PONS" : COMING_AT_LAUNCH}
          href={launchConfig.ponsLaunchUrl}
        />
        <Row
          label="Gold asset used"
          value={launchConfig.goldAssetDescription ?? COMING_AT_LAUNCH}
        />
        <Row label="Transactions" value={COMING_AT_LAUNCH} />
        <Row label="Total gold acquired" value={COMING_AT_LAUNCH} />
        <Row label="Total rewards distributed" value={COMING_AT_LAUNCH} />
      </div>

      <p className="mt-6 text-center text-xs text-warm-white/35">
        Launched via{" "}
        <a
          href={pons.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gold-500/30 underline-offset-4 hover:text-gold-300"
        >
          PONS
        </a>{" "}
        on Robinhood Chain. Contract and treasury addresses will be published
        here the moment they exist &mdash; verify them independently before
        trusting any link claiming to be GOLDR.
      </p>
    </section>
  );
}
