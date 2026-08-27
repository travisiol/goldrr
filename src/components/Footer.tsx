import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-xs text-warm-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Not
          affiliated with Robinhood Markets, Inc. or PONS.
        </p>
        <p className="max-w-md text-balance sm:text-right">
          {siteConfig.ticker} is an experimental token. Nothing here is
          financial advice. Data labeled &ldquo;DEMO&rdquo; or
          &ldquo;PREVIEW&rdquo; is illustrative only, not live blockchain
          data.
        </p>
      </div>
    </footer>
  );
}
