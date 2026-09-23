"use client";

import Link from "next/link";
import { useEffect } from "react";
import CategoryIcon from "@/components/ui/CategoryIcon";
import Icon from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";
import { categories, sidebarContactLinks, sidebarPromoLinks } from "@/data/home";

const panel = "rounded-md border border-white/5 bg-linear-to-b from-ink-700 to-ink-800 shadow-md";

export default function Sidebar({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="side-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" onClick={onClose} />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-1 text-white"
        aria-label="Close menu"
      >
        <Icon name="close" className="size-7" />
      </button>

      <nav
        className={`no-scrollbar relative flex h-full w-[68%] max-w-[300px] flex-col gap-2.5 overflow-y-auto px-3 py-5 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Welcome + auth */}
        <div className={`${panel} overflow-hidden`}>
          <div className="relative flex h-16 items-center justify-center">
            <LogoMark className="absolute -top-2 left-2 size-16 drop-shadow-lg" />
            <span className="pl-12 text-base font-semibold">Hi Welcome</span>
          </div>
          <div className="grid grid-cols-2 bg-gold-500 text-ink-900">
            <a href="#" className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-wide">
              <Icon name="login" className="size-5" /> LOGIN
            </a>
            <a href="#" className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold tracking-wide">
              <Icon name="userPlus" className="size-5" /> SIGN UP
            </a>
          </div>
        </div>

        {/* Search */}
        <form role="search" className={`${panel} flex items-center px-3`} onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Search Games"
            aria-label="Search games"
            className="h-11 min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
          />
          <Icon name="search" className="size-5 text-white/50" />
        </form>

        {/* Game categories */}
        <ul className="grid grid-cols-3 gap-1.5">
          {categories.map((cat) => (
            <li key={cat.id}>
              <a
                href={`#game-${cat.id}`}
                onClick={onClose}
                className={`${panel} flex aspect-square flex-col items-center justify-center gap-1.5 text-xs active:bg-ink-600`}
              >
                <CategoryIcon category={cat} className="size-7 text-gold-400" />
                {cat.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Promotions & programs */}
        <ul className={`${panel} grid grid-cols-3 gap-y-4 py-4`}>
          {sidebarPromoLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex flex-col items-center gap-1.5 px-1 text-xs">
                <Icon name={item.icon} className="size-7 text-gold-400" />
                <span className="w-full truncate text-center">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <ul className={`${panel} grid grid-cols-3 py-4`}>
          {sidebarContactLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex flex-col items-center gap-1.5 text-xs">
                <Icon name={item.icon} className="size-7 text-gold-400" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className={`${panel} grid grid-cols-2 py-3`}>
          <li>
            <Link href="/" onClick={onClose} className="flex items-center justify-center gap-3 text-sm">
              <Icon name="home" className="size-7 text-gold-400" /> Home
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center gap-3 text-sm">
              <Icon name="login" className="size-7 text-gold-400" /> Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
