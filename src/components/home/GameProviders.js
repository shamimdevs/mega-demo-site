import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

export default function GameProviders({ providers }) {
  return (
    <section className="py-5" aria-label="Game providers">
      <div className="px-4">
        <SectionTitle>Game Providers</SectionTitle>
      </div>

      <div className="overflow-hidden py-2">
        {/* List is rendered twice so the -50% loop joins seamlessly */}
        <div className="flex w-max animate-marquee-loop hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-3 pr-3">
              {providers.map((p) => (
                <li key={p.id} className="shrink-0">
                  <a
                    href={p.href ?? "#"}
                    aria-label={p.name}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="relative block h-16 w-24 overflow-hidden rounded-md "
                  >
                    <Image src={p.image} alt="" fill sizes="96px" className="object-contain p-2" />
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
