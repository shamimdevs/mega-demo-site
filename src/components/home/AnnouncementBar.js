import Icon from "@/components/ui/Icon";

export default function AnnouncementBar({ message }) {
  return (
    <div className="flex h-10 items-center gap-3 bg-linear-to-r from-gold-300 to-gold-400 px-3 text-ink-900">
      <Icon name="megaphone" className="size-5 shrink-0 -rotate-12" />
      <div className="flex min-w-0 flex-1 overflow-hidden" role="marquee" aria-label={message}>
        {/* Two copies so the loop is seamless */}
        {[0, 1].map((copy) => (
          <p
            key={copy}
            aria-hidden="true"
            className="shrink-0 animate-marquee pr-12 text-sm font-medium whitespace-nowrap motion-reduce:animate-none"
          >
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}
