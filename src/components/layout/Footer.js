import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";
import FooterAbout from "./FooterAbout";
import {
  ambassadors,
  footerAbout,
  footerBadges,
  footerImageLinks,
  footerLinks,
  licenses,
  partnerGroups,
  paymentMethods,
  socials,
} from "@/data/home";

function FooterHeading({ children }) {
  return <h3 className="mb-3 text-base font-medium text-gold-400">{children}</h3>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-4 border-t border-ink-600 pt-6 pb-4">
      <FooterAbout
        title={footerAbout.title}
        paragraphs={footerAbout.paragraphs}
      />

      <div className="mb-7 grid grid-cols-2 gap-4 border-t border-ink-600 pt-5">
        {partnerGroups.map((group) => (
          <section key={group.id}>
            <FooterHeading>{group.title}</FooterHeading>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.id}>
                  <a href={item.href ?? "#"} className="flex items-start gap-2">
                    <span className="relative size-9 shrink-0 overflow-hidden rounded-sm">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-contain"
                      />
                    </span>
                    <span className="text-sm leading-tight">
                      <span className="block font-semibold">{item.name}</span>
                      <span className="text-white/70">{item.role}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mb-7">
        <FooterHeading>Brand Ambassadors</FooterHeading>
        <ul className="grid grid-cols-2 gap-4">
          {ambassadors.map((person) => (
            <li key={person.id} className="flex items-start gap-2">
              {/* Signature image */}
              <span className="relative h-7 w-9 shrink-0">
                <Image
                  src={person.signature}
                  alt=""
                  fill
                  sizes="36px"
                  className="object-contain"
                />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-semibold">{person.name}</span>
                <span className="text-white/70">{person.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-7">
        <FooterHeading>Gaming License</FooterHeading>
        <ul className="flex flex-wrap gap-4">
          {licenses.map((l) => (
            <li key={l.id} className="relative h-10 w-28">
              <Image
                src={l.image}
                alt={l.title ?? ""}
                fill
                sizes="112px"
                className="object-contain object-left"
              />
            </li>
          ))}
        </ul>
      </section>

      <div className="mb-7 grid grid-cols-2 gap-4">
        {footerImageLinks.map((item) => (
          <section key={item.id}>
            <FooterHeading>{item.title}</FooterHeading>
            <a
              href={item.href ?? "#"}
              aria-label={item.title}
              className="relative block h-12 w-full"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 480px) 45vw, 220px"
                className="object-contain object-left"
              />
            </a>
          </section>
        ))}
      </div>

      <section className="mb-6">
        <FooterHeading>Community Websites</FooterHeading>
        <ul className="flex gap-3">
          {socials.map((s) => (
            <li key={s.id}>
              <a
                href={s.href}
                aria-label={s.label}
                className="grid size-8 place-items-center rounded-full text-white"
                style={{ background: s.bg }}
              >
                <Icon
                  name={s.id === "telegram" ? "telegramPlane" : s.id}
                  className="size-6"
                />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-ink-600 py-6">
        <FooterHeading>Payment Methods</FooterHeading>
        <ul className="flex flex-wrap gap-2">
          {paymentMethods.map((m) => (
            <li key={m.id} className="relative h-8 w-20">
              <Image
                src={m.image}
                alt={m.name ?? ""}
                fill
                sizes="80px"
                className="object-contain"
              />
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label="Legal" className="border-t border-ink-600 py-4">
        <ul className="grid grid-cols-3 gap-y-3 text-center text-sm leading-snug text-white/60">
          {footerLinks.map((link) => (
            <li
              key={link.label}
              className="flex items-center justify-center border-ink-600 px-3 py-0.5 not-nth-[3n]:border-r last:border-r-0"
            >
              <a
                href={link.href}
                className="underline underline-offset-2 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center justify-between gap-4 border-t border-ink-600 pt-4">
        <p className="text-sm leading-relaxed text-white/60">
          © {year} {site.shortName} Copyrights. All Rights Reserved
        </p>
        <ul className="flex shrink-0 items-center gap-2 text-white/50">
          {footerBadges.map((b) => (
            <li key={b.id} title={b.label}>
              {b.image ? (
                <span className="relative block size-9">
                  <Image src={b.image} alt={b.label} fill sizes="36px" className="object-contain" />
                </span>
              ) : (
                <Icon name={b.icon} title={b.label} className="size-9" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
