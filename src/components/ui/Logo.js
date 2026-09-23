import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "size-10" }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logo-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5e2a8" />
          <stop offset=".5" stopColor="#d4a445" />
          <stop offset="1" stopColor="#8a6420" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#logo-gold)" strokeWidth="5" strokeLinejoin="round">
        <path d="M24 4 44 24 24 44 4 24Z" />
        <path d="M24 14 34 24 24 34 14 24Z" />
      </g>
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
      <LogoMark className="size-10" />
      <span className="flex flex-col text-[9px] leading-[1.35] font-medium tracking-[0.3em] text-white/90">
        {site.logoLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </span>
    </Link>
  );
}
