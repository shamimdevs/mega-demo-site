"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";

// Intro copy clamped to a few lines with a fade until "Read More" is tapped.
export default function FooterAbout({ title, paragraphs }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="mb-6">
      <Logo />
      <h2 className="mt-4 text-lg leading-snug font-semibold text-gold-400">{title}</h2>

      <div id="footer-about-text" className={`relative mt-3 overflow-hidden ${open ? "" : "max-h-24"}`}>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 text-sm leading-relaxed text-white/60">
            {p}
          </p>
        ))}
        {!open && <span className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-ink-900 to-transparent" />}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="footer-about-text"
        className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-linear-to-b from-[#3d4a8a] to-[#2a3368] px-8 py-2.5 text-sm shadow-md"
      >
        {open ? "Read Less" : "Read More"}
        <Icon name="chevronUp" className={`size-4 transition-transform ${open ? "" : "rotate-180"}`} />
      </button>
    </section>
  );
}
