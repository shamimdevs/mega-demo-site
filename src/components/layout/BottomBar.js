import { site } from "@/lib/site";

export default function BottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[480px] rounded-t-xl bg-ink-800 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgb(0_0_0/0.35)]">
      <div className="grid grid-cols-[1fr_1.2fr_1.2fr] gap-1.5">
        <button
          type="button"
          className="flex items-center gap-2 rounded-md bg-linear-to-b from-[#e6e6ea] to-[#b9bac4] px-2 py-1.5 text-left text-ink-900"
          aria-label={`Currency ${site.currency}, language ${site.language}`}
        >
          {/* Placeholder flag */}
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#006a4e]" aria-hidden="true">
            <span className="size-3.5 rounded-full bg-[#f42a41]" />
          </span>
          <span className="flex flex-col text-xs leading-tight font-semibold">
            <span>{site.currency}</span>
            <span>{site.language}</span>
          </span>
        </button>

        <a
          href="#"
          className="grid place-items-center rounded-md border border-white/10 bg-linear-to-b from-ink-500 to-ink-600 text-base font-semibold"
        >
          Sign up
        </a>
        <a
          href="#"
          className="grid place-items-center rounded-md bg-linear-to-b from-gold-400 to-gold-600 text-base font-semibold text-white"
        >
          Login
        </a>
      </div>
    </div>
  );
}
