import Image from "next/image";

export default function GameCard({ game }) {
  return (
    <a
      href="#"
      className="relative flex flex-col items-center overflow-hidden rounded-md bg-ink-700 px-1 pt-2 pb-1.5 shadow-md transition active:scale-95"
    >
      <span className="corner-flag absolute top-0 right-0 size-4 bg-gold-500" aria-hidden="true" />
      {game.isNew ? (
        <span className="absolute top-1 left-1 rounded-sm bg-red-600 px-1 text-[8px] leading-3 font-bold">NEW</span>
      ) : null}
      <span className="relative aspect-square w-[72%] overflow-hidden rounded-md">
        <Image src={game.image} alt="" fill sizes="64px" className="object-cover" />
      </span>
      <span className="mt-1.5 w-full truncate text-center text-xs text-white">{game.name}</span>
    </a>
  );
}
