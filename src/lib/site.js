// Brand placeholders. Swap these for the real brand values.
export const site = {
  name: "Mega Casino World",
  shortName: "MCW",
  logoLines: ["MEGA", "CASINO", "WORLD"],
  currency: "BDT",
  language: "English",
  announcement:
    "MCW Advisory: Having problems accessing the site? Please use our official mirror links or contact 24/7 customer service for help.",
};

// Seeded demo image; replace with real assets later.
export function demoImage(seed, width, height = width) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
