import { RewardToastShowcase } from "./RewardToast";

export function RewardSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          Reward UX
        </p>
        <h2 className="mt-3 font-serif text-3xl text-warm-white sm:text-4xl">
          Built to screenshot
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm text-warm-white/55">
          A reusable reward notification, styled like a modern brokerage app.
          Once the gold mechanism is live, this connects to real reward
          events &mdash; for now it&rsquo;s a labeled preview.
        </p>
      </div>

      <RewardToastShowcase />
    </section>
  );
}
