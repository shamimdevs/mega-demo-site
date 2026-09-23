"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 4000;

export default function BannerCarousel({ banners }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => goTo((active + 1) % banners.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, banners.length, goTo]);

  const onScroll = (e) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    setActive(Math.round(scrollLeft / clientWidth));
  };

  return (
    <section aria-roledescription="carousel" aria-label="Promotions" className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerCancel={() => setPaused(false)}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
      >
        {banners.map((banner, i) => (
          <a
            key={banner.id}
            href="#"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${banners.length}`}
            className="relative aspect-720/305 w-full shrink-0 snap-center overflow-hidden"
          >
            <Image
              src={banner.image}
              alt={banner.title ?? `Banner ${i + 1}`}
              fill
              sizes="(max-width: 480px) 100vw, 480px"
              preload={i === 0}
              className="object-cover"
            />
          </a>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-2.5 flex justify-center gap-2">
        {banners?.map((banner, i) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`size-2.5 rounded-full transition-colors ${i === active ? "bg-gold-500" : "bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
