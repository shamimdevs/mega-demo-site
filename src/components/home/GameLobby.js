"use client";

import { useEffect, useRef, useState } from "react";
import CategoryIcon from "@/components/ui/CategoryIcon";
import GameCard from "./GameCard";

const HASH_PREFIX = "#game-";

export default function GameLobby({ categories, gamesByCategory, children }) {
  const [active, setActive] = useState(categories[0].id);
  const [stuck, setStuck] = useState(false);
  const [progress, setProgress] = useState({ left: 0, width: 100 });
  const sectionRef = useRef(null);
  const sentinelRef = useRef(null);
  const tabsRef = useRef(null);

  // Sidebar links use #game-<id>; select that tab and bring the lobby into view.
  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.slice(HASH_PREFIX.length);
      if (!window.location.hash.startsWith(HASH_PREFIX) || !gamesByCategory[id]) return;
      setActive(id);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [gamesByCategory]);

  // Compact (text-only) tabs once the bar is pinned under the header.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      rootMargin: "-56px 0px 0px 0px",
    });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  // Keep the active tab visible when it changes.
  useEffect(() => {
    tabsRef.current
      ?.querySelector(`[data-tab="${active}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const measureTabs = () => {
    const el = tabsRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setProgress({ width: (clientWidth / scrollWidth) * 100, left: (scrollLeft / scrollWidth) * 100 });
  };

  useEffect(() => {
    const observer = new ResizeObserver(measureTabs);
    observer.observe(tabsRef.current);
    return () => observer.disconnect();
  }, []);

  const selectTab = (id) => {
    setActive(id);
    if (stuck) sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const games = gamesByCategory[active] ?? [];
  const activeLabel = categories.find((c) => c.id === active)?.label;

  return (
    // Wraps the rest of the page (children) so the sticky tab bar stays pinned to the footer.
    <div ref={sectionRef} className="scroll-mt-14">
      <div ref={sentinelRef} aria-hidden="true" />

      <div className="sticky top-14 z-20 bg-ink-800 shadow-[0_2px_8px_rgb(0_0_0/0.25)]">
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Game categories"
          onScroll={measureTabs}
          className="no-scrollbar flex gap-1 overflow-x-auto px-3 pt-2"
        >
          {categories.map((cat) => {
            const selected = cat.id === active;
            return (
              <button
                key={cat.id}
                data-tab={cat.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="game-panel"
                onClick={() => selectTab(cat.id)}
                className={`flex w-19 shrink-0 flex-col items-center gap-1 rounded-t-md transition-all ${stuck ? "py-2" : "py-2.5"} ${
                  selected ? "bg-ink-600 text-white" : "text-gold-400"
                }`}
              >
                <CategoryIcon
                  category={cat}
                  className={`transition-all ${stuck ? "size-0 opacity-0" : "size-8"} ${selected ? "text-white" : "text-gold-400"}`}
                />
                <span className={`text-base ${selected ? "font-medium" : ""}`}>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal scroll indicator */}
        <div className="relative h-1 bg-ink-800">
          <span
            className="absolute inset-y-0 rounded-full bg-white/35"
            style={{ left: `${progress.left}%`, width: `${progress.width}%` }}
          />
        </div>
      </div>

      <div id="game-panel" role="tabpanel" aria-label={activeLabel} className="px-4 pt-5 pb-2">
        <ul className="grid grid-cols-4 gap-2">
          {games.map((game) => (
            <li key={game.id}>
              <GameCard game={game} />
            </li>
          ))}
        </ul>
      </div>

      {children}
    </div>
  );
}
