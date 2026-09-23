"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-24 right-[max(1rem,calc(50%-240px+1rem))] z-30 grid size-12 place-items-center rounded-full border-2 border-gold-700 bg-linear-to-b from-gold-400 to-gold-600 text-white shadow-lg transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <Icon name="chevronUp" className="size-6" />
    </button>
  );
}
