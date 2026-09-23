import { demoImage } from "@/lib/site";

export const banners = [
  {
    id: "b3",
    tag: "Cricket",
    title: "Daily cricket cashback",
    subtitle: "Get 5% back every day",
    image: "https://img.m167cw.com/upload/announcement/image_445667.jpg",
  },
  {
    id: "b1",
    tag: "Limited time",
    title: "Deposit & get 50 free spins",
    subtitle: "VIP exclusive offer",
    image: "https://img.m167cw.com/upload/announcement/image_444855.jpg",
  },
  {
    id: "b2",
    tag: "Welcome bonus",
    title: "100% first deposit bonus",
    subtitle: "Up to ৳10,000",
    image: "https://img.m167cw.com/upload/announcement/image_446664.jpg",
  },

  {
    id: "b4",
    tag: "Refer a friend",
    title: "Invite & earn rewards",
    subtitle: "Unlimited referral bonus",
    image: "https://img.m167cw.com/upload/announcement/image_261526.jpg",
  },
];

// Set `image` to a URL to use it as the category icon; leave empty to use the built-in SVG icon.
export const categories = [
  { id: "hot", label: "HOT", icon: "hot", image: "" },
  { id: "sports", label: "Sports", icon: "sports", image: "" },
  { id: "casino", label: "Casino", icon: "casino", image: "" },
  { id: "slot", label: "Slot", icon: "slot", image: "" },
  { id: "crash", label: "Crash", icon: "crash", image: "" },
  { id: "table", label: "Table", icon: "table", image: "" },
  { id: "fishing", label: "Fishing", icon: "fishing", image: "" },
  { id: "arcade", label: "Arcade", icon: "arcade", image: "" },
  { id: "lottery", label: "Lottery", icon: "lottery", image: "" },
];

// Set `image` to a URL for each game; leave empty to use a demo image.
const games = {
  hot: [
    {
      name: "Cricket Century Kings",
      image:
        "	https://img.m167cw.com/upload/websitecategory/150667/darkIcon.png?v=1789620497192",
    },
    {
      name: "Dragon Gems 500",
      image:
        "	https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "7 Up 7 Down",
      image:
        "https://img.m167cw.com/upload/websitecategory/150667/darkIcon.png?v=1789620497192",
    },
    {
      name: "Fortune Garuda 1000",
      image:
        "	https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "Gates of Olympus",
      image:
        "https://img.m167cw.com/upload/websitecategory/38884/darkIcon.webp?v=1789620497208",
    },
    {
      name: "Super Elements",
      image:
        "https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "FlyX",
      image:
        "https://img.m167cw.com/upload/websitecategory/45919/darkIcon.webp?v=1789620497200",
    },
    {
      name: "Pocket Ace",
      image:
        "https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "Calavera Fiesta",
      image:
        "https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "Live Baccarat",
      image:
        "	https://img.m167cw.com/upload/websitecategory/45919/darkIcon.webp?v=1789620497200",
    },
    {
      name: "Bountiful Birds",
      image:
        "https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "Super Ace Deluxe",
      image:
        "https://img.m167cw.com/upload/websitecategory/150274/darkIcon.png?v=1789620497178",
    },
    {
      name: "Fortune Ace",
      image:
        "https://img.m167cw.com/upload/websitecategory/38884/darkIcon.webp?v=1789620497208",
    },
    {
      name: "Cash Aviator",
      image:
        "https://img.m167cw.com/upload/websitecategory/38884/darkIcon.webp?v=1789620497208",
    },
    {
      name: "Fortune Gems 500",
      image:
        "https://img.m167cw.com/upload/websitecategory/38884/darkIcon.webp?v=1789620497208",
    },
    {
      name: "Super Ace",
      image:
        "https://img.m167cw.com/upload/websitecategory/38884/darkIcon.webp?v=1789620497208",
    },
  ],
  sports: [
    { name: "Cricket Exchange", image: "" },
    { name: "Football", image: "" },
    { name: "Tennis", image: "" },
    { name: "Kabaddi", image: "" },
    { name: "Basketball", image: "" },
    { name: "Horse Racing", image: "" },
    { name: "Esports", image: "" },
    { name: "Virtual Sports", image: "" },
  ],
  casino: [
    { name: "Live Baccarat", image: "" },
    { name: "Roulette", image: "" },
    { name: "Dragon Tiger", image: "" },
    { name: "Andar Bahar", image: "" },
    { name: "Teen Patti", image: "" },
    { name: "Blackjack", image: "" },
    { name: "Sic Bo", image: "" },
    { name: "Crazy Time", image: "" },
  ],
  slot: [
    { name: "Lucky Tamarin", image: "" },
    { name: "Fortune Garuda", image: "" },
    { name: "Super Ace", image: "" },
    { name: "Money Coming", image: "" },
    { name: "Golden Empire", image: "" },
    { name: "Boxing King", image: "" },
    { name: "Wild Ace", image: "" },
    { name: "Charge Buffalo", image: "" },
    { name: "Fortune Gems", image: "" },
    { name: "Crazy 777", image: "" },
    { name: "Mega Ace", image: "" },
    { name: "Jungle King", image: "" },
  ],
  crash: [
    { name: "Aviator", image: "" },
    { name: "FlyX", image: "" },
    { name: "JetX", image: "" },
    { name: "Cash Aviator", image: "" },
    { name: "Rocket Rush", image: "" },
    { name: "Space XY", image: "" },
    { name: "Mines", image: "" },
    { name: "Plinko", image: "" },
  ],
  table: [
    { name: "Teen Patti", image: "" },
    { name: "Rummy", image: "" },
    { name: "Andar Bahar", image: "" },
    { name: "Poker King", image: "" },
    { name: "Callbreak", image: "" },
    { name: "Ludo", image: "" },
    { name: "Blackjack Pro", image: "" },
    { name: "Baccarat Pro", image: "" },
  ],
  fishing: [
    { name: "Royal Fishing", image: "" },
    { name: "Mega Fishing", image: "" },
    { name: "Jackpot Fishing", image: "" },
    { name: "Dinosaur Tycoon", image: "" },
    { name: "Boom Legend", image: "" },
    { name: "Happy Fishing", image: "" },
    { name: "Ocean King", image: "" },
    { name: "All-star Fishing", image: "" },
  ],
  arcade: [
    { name: "Crash Bonus", image: "" },
    { name: "Keno Bonus", image: "" },
    { name: "Go Goal Bingo", image: "" },
    { name: "Wheel", image: "" },
    { name: "Color Game", image: "" },
    { name: "Limbo", image: "" },
    { name: "Tower", image: "" },
    { name: "Hi-Lo", image: "" },
  ],
  lottery: [
    { name: "Keno", image: "" },
    { name: "Lucky Number", image: "" },
    { name: "Bingo 75", image: "" },
    { name: "Dice Lotto", image: "" },
    { name: "Fast Keno", image: "" },
    { name: "Mega 6/45", image: "" },
    { name: "Power Ball", image: "" },
    { name: "Pick 3", image: "" },
  ],
};

export const gamesByCategory = Object.fromEntries(
  Object.entries(games).map(([cat, list]) => [
    cat,
    list.map(({ name, image }, i) => ({
      id: `${cat}-${i}`,
      name,
      image: image || demoImage(`${cat}-${name}`, 160),
      isNew: i % 5 === 1,
    })),
  ]),
);

// Set `image` to a URL for each slide; leave empty to use a demo image.
export const favourites = [
  {
    id: "f1",
    image: "https://img.m167cw.com/upload/announcement/image_447509.jpg",
  },
  {
    id: "f2",
    image: "https://img.m167cw.com/upload/announcement/image_447509.jpg",
  },
  {
    id: "f3",
    image: "https://img.m167cw.com/upload/announcement/image_447509.jpg",
  },
  {
    id: "f4",
    image: "https://img.m167cw.com/upload/announcement/image_447509.jpg",
  },
  {
    id: "f5",
    image: "https://img.m167cw.com/upload/announcement/image_447509.jpg",
  },
].map((f) => ({
  ...f,
  image: f.image || demoImage(`stadium-${f.id}`, 620, 390),
}));

// Set `image` to a URL for each slide; leave empty to use a demo image.
export const popularGames = [
  {
    name: "Lucky Tamarin",
    image: "	https://img.m167cw.com/upload/game/AWCV2_JILI/JILI-SLOT-151.png",
  },
  {
    name: "Fortune Garuda 1000",
    image:
      "https://img.m167cw.com/upload/game/AWCV2_EVOLUTION/EVOLUTION-LIVE-006.webp",
  },
  {
    name: "Super Ace",
    image: "https://img.m167cw.com/upload/game/AWCV2_JILI/JILI-SLOT-151.png",
  },
  {
    name: "Money Coming",
    image: "	https://img.m167cw.com/upload/game/AWCV2_JILI/JILI-SLOT-151.png",
  },
  {
    name: "Boxing King",
    image:
      "https://img.m167cw.com/upload/game/AWCV2_EVOLUTION/EVOLUTION-LIVE-006.webp",
  },
  {
    name: "Golden Empire",
    image:
      "https://img.m167cw.com/upload/game/AWCV2_EVOLUTION/EVOLUTION-LIVE-006.webp",
  },
].map((g, i) => ({
  ...g,
  id: `pop-${i}`,
  image: g.image || demoImage(`popular-${g.name}`, 340, 220),
}));

// Set `image` to a logo URL for each provider; leave empty to use a demo image.
export const providers = [
  {
    id: "p1",
    name: "Provider 1",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmjili.png?v=1790125220324&source=mcdsrc",
  },
  {
    id: "p2",
    name: "Provider 2",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmrt.png?v=1790125220324&source=mcdsrc",
  },
  {
    id: "p3",
    name: "Provider 3",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmjili.png?v=1790125220324&source=mcdsrc",
  },
  {
    id: "p4",
    name: "Provider 4",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmrt.png?v=1790125220324&source=mcdsrc",
  },
  { id: "p5", name: "Provider 5", image: "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmjili.png?v=1790125220324&source=mcdsrc" },
  {
    id: "p6",
    name: "Provider 6",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmjili.png?v=1790125220324&source=mcdsrc",
  },
  {
    id: "p7",
    name: "Provider 7",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/brand/white/provider-awcmjili.png?v=1790125220324&source=mcdsrc",
  },
].map((p) => ({
  ...p,
  image: p.image || demoImage(`provider-${p.id}`, 192, 128),
}));

// Footer: brand ambassadors. Set `signature` to a signature image URL; leave empty for a demo image.
export const ambassadors = [
  { id: "a1", name: "Ambassador One", role: "Brand Ambassador · Cricket", signature: "https://img.m167cw.com/mcw/h5/assets/images/footer/ambassador/anrich-nortje.png?v=1790125220324&source=mcdsrc" },
  { id: "a2", name: "Ambassador Two", role: "Brand Ambassador · Football", signature: "https://img.m167cw.com/mcw/h5/assets/images/footer/ambassador/anrich-nortje.png?v=1790125220324&source=mcdsrc" },
].map((a) => ({ ...a, signature: a.signature || demoImage(`signature-${a.id}`, 72, 56) }));

// Footer: intro text shown above Gaming License, collapsed behind "Read More".
export const footerAbout = {
  title: "Mega Casino World: Cricket Exchange & Casino Sites in Bangladesh",
  paragraphs: [
    "As a novice player, it may be challenging to choose the top betting site in Bangladesh because the majority of these sites only seek to draw people to themselves. You should be wary of casinos that provide you all of these in exchange for very little.",
    "Replace this text with your own content. Add as many paragraphs as you need; everything past the first few lines stays hidden until the visitor taps Read More.",
  ],
};

// Footer: partner columns. Set `image` to a logo URL; leave empty for a demo image.
export const partnerGroups = [
  {
    id: "partners",
    title: "Partners",
    items: [{ id: "pt1", name: "Partner Club", role: "Official Regional Partner", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/partner/bundesliga.png?v=1790125220324&source=mcdsrc" }],
  },
  {
    id: "vip-partners",
    title: "NCVIP Partners",
    items: [{ id: "pt2", name: "Partner League", role: "Regional Betting Partner - Asia - NCVIP", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/ambassador/lukas-podolski.png?v=1790125220324&source=mcdsrc" }],
  },
].map((g) => ({
  ...g,
  items: g.items.map((it) => ({ ...it, image: it.image || demoImage(`partner-${it.id}`, 72) })),
}));

export const sidebarPromoLinks = [
  { label: "Promotions", icon: "gift", href: "#" },
  { label: "VIP", icon: "vip", href: "#" },
  { label: "Download", icon: "download", href: "#" },
  { label: "Affiliates", icon: "affiliates", href: "#" },
  { label: "Partnerships", icon: "handshake", href: "#" },
  { label: "Winner Board", icon: "trophy", href: "#" },
];

export const sidebarContactLinks = [
  { label: "24-7 CS", icon: "phone", href: "#" },
  { label: "Telegram", icon: "telegram", href: "#" },
  { label: "Email", icon: "mail", href: "#" },
];

// Footer "Official Brand Partner" and "APP Download" images.
export const footerImageLinks = [
  {
    id: "brand-partner",
    title: "Official Brand Partner",
    href: "#",
    image:
      "https://img.m167cw.com/mcw/h5/assets/images/footer/partner/new-city-vip.png?v=1790125220324&source=mcdsrc",
  },
  { id: "app-download", title: "APP Download", href: "#", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/app-download/android-download.svg?v=1790125220324&source=mcdsrc" },
].map((l) => ({ ...l, image: l.image || demoImage(`footer-${l.id}`, 360, 96) }));

// Set `image` to a license logo URL; leave empty to use a demo image.
export const licenses = [
  { id: "l1", title: "Gaming License A", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/license1.png?v=1790125220324&source=mcdsrc" },
  { id: "l2", title: "eGaming License B", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/license1.png?v=1790125220324&source=mcdsrc" },
].map((l) => ({ ...l, image: l.image || demoImage(`license-${l.id}`, 224, 80) }));

export const socials = [
  { id: "facebook", label: "Facebook", href: "#", bg: "#1877f2" },
  { id: "telegram", label: "Telegram", href: "#", bg: "#29a9eb" },
  {
    id: "instagram",
    label: "Instagram",
    href: "#",
    bg: "linear-gradient(45deg,#f9ce34,#ee2a7b 50%,#6228d7)",
  },
  { id: "youtube", label: "YouTube", href: "#", bg: "#ff0000" },
];

// Set `image` to a logo URL for each payment method; leave empty to use a demo image.
export const paymentMethods = [
  { id: "bank-deposit", name: "Bank Deposit", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay33.png?v=1790125220324&source=mcdsrc" },
  { id: "bkash", name: "bKash", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay16.png?v=1790125220324&source=mcdsrc" },
  { id: "rocket", name: "Rocket", image: "	https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay33.png?v=1790125220324&source=mcdsrc" },
  { id: "nagad", name: "Nagad", image: "	https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay33.png?v=1790125220324&source=mcdsrc" },
  { id: "crypto", name: "Crypto", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay16.png?v=1790125220324&source=mcdsrc" },
  { id: "upay", name: "Upay", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay45.png?v=1790125220324&source=mcdsrc" },
  { id: "ok-wallet", name: "OK Wallet", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay45.png?v=1790125220324&source=mcdsrc" },
  { id: "surecash", name: "SureCash", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay45.png?v=1790125220324&source=mcdsrc" },
  { id: "tap", name: "Tap", image: "https://img.m167cw.com/mcw/h5/assets/images/footer/white/pay16.png?v=1790125220324&source=mcdsrc" },
].map((m) => ({ ...m, image: m.image || demoImage(`payment-${m.id}`, 160, 64) }));

// Footer bottom-right badges. Set `image` to a URL to replace the built-in icon.
export const footerBadges = [
  { id: "gamcare", label: "GamCare", icon: "gamcare", image: "" },
  { id: "age18", label: "18+ only", icon: "age18", image: "" },
];

export const footerLinks = [
  { label: "Responsible Gaming", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Security", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "FAQ", href: "#" },
];
