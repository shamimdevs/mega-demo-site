"use client";

import Image from "next/image";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Favourites({ items }) {
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  return (
    <section className="py-5" aria-label="Favourites">
      <div className="px-4">
        <SectionTitle>Favourites</SectionTitle>
      </div>

      <div className="relative px-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          loop={items.length > 1}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActive(s.realIndex)}
          className="overflow-hidden rounded-md"
        >
          {items.map((item, i) => (
            <SwiperSlide key={item.id}>
              <a
                href={item.href ?? "#"}
                aria-label={`${i + 1} of ${items.length}`}
                className="relative block aspect-620/390 w-full overflow-hidden rounded-md bg-ink-700"
              >
                <Image
                  src={item.image}
                  alt={item.title ?? ""}
                  fill
                  sizes="(max-width: 480px) 100vw, 480px"
                  className="object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-x-0 bottom-2.5 z-10 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => swiper?.slideToLoop(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`size-2.5 rounded-full transition-colors ${i === active ? "bg-gold-500" : "bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
