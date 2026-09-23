"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "@/components/ui/SectionTitle";

export default function PopularGames({ games }) {
  return (
    <section className="py-5" aria-label="Popular games">
      <div className="px-4">
        <SectionTitle>Popular Games</SectionTitle>
      </div>

      <div className="px-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={10}
          loop={games.length >= 4}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <a
                href={game.href ?? "#"}
                aria-label={game.name}
                className="relative block aspect-34/22 overflow-hidden  bg-ink-700 shadow-md"
              >
                <Image src={game.image} alt={game.name ?? ""} fill sizes="220px" className="object-cover" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
