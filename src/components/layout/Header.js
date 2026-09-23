"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import Sidebar from "./Sidebar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-14 items-center justify-between bg-ink-800 px-4 shadow-[0_2px_8px_rgb(0_0_0/0.3)]">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="-m-1 p-1 text-gold-400"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="side-menu"
          >
            <Icon name="menu" className="size-7" />
          </button>
          <Logo />
        </div>

        <a href="#" className="flex flex-col items-center text-gold-400">
          <Icon name="headset" className="size-6" />
          <span className="text-sm leading-none font-bold">24-7 CS</span>
        </a>
      </header>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
