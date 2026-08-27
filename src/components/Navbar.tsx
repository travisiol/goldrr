import Link from "next/link";
import { WalletConnect } from "./WalletConnect";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#treasury", label: "Treasury" },
  { href: "#transparency", label: "Transparency" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="h-2 w-2 rounded-full bg-gold-500 shadow-[0_0_12px_rgba(201,162,39,0.8)]"
          />
          <span className="font-serif text-xl tracking-wide text-warm-white">
            GOLDR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-warm-white/60 transition hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WalletConnect />
      </div>
    </header>
  );
}
