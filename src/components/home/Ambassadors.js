import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { demoImage } from "@/lib/site";

export default function Ambassadors({ people }) {
  return (
    <section className="px-4 py-5" aria-label="Brand ambassadors">
      <SectionTitle>Brand Ambassadors</SectionTitle>

      <ul className="grid grid-cols-2 gap-3">
        {people.map((person) => (
          <li key={person.id} className="overflow-hidden rounded-md bg-ink-800">
            <span className="relative block aspect-[4/5]">
              <Image src={demoImage(`ambassador-${person.id}`, 240, 300)} alt="" fill sizes="220px" className="object-cover" />
              <span className="absolute inset-0 bg-linear-to-t from-ink-900 to-transparent" />
              {/* Signature placeholder */}
              <span className="absolute bottom-2 left-3 font-serif text-lg text-white/70 italic">{person.name.split(" ")[0]}</span>
            </span>
            <span className="block px-3 py-2">
              <span className="block truncate font-semibold">{person.name}</span>
              <span className="block truncate text-xs text-white/70">{person.role}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
