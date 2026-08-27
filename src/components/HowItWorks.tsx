const steps = [
  {
    index: "01",
    title: "Trade",
    body: `Buy or sell ${"$GOLDR"} like any onchain token.`,
  },
  {
    index: "02",
    title: "Fees",
    body: "Eligible trading / creator revenue accumulates according to the launch configuration.",
  },
  {
    index: "03",
    title: "Gold",
    body: "The disclosed portion is used for the project's gold mechanism.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="mb-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          How it works
        </p>
        <h2 className="mt-3 font-serif text-3xl text-warm-white sm:text-4xl">
          Trade <span className="text-gold-400">→</span> Fees{" "}
          <span className="text-gold-400">→</span> Gold
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-warm-white/55">
          That&rsquo;s the entire mechanism. No staking, no rebasing, no
          governance votes required to understand it.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.index} className="relative">
            <div className="h-full rounded-2xl border border-line bg-ink-soft/60 p-6 transition hover:border-line-strong">
              <span className="font-mono text-xs text-gold-500">
                {step.index}
              </span>
              <h3 className="mt-3 font-serif text-2xl text-warm-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-white/60">
                {step.body}
              </p>
            </div>
            {i < steps.length - 1 && (
              <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-gold-500/50 sm:block">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
