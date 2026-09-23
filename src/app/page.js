import Ambassadors from "@/components/home/Ambassadors";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import BannerCarousel from "@/components/home/BannerCarousel";
import Favourites from "@/components/home/Favourites";
import GameLobby from "@/components/home/GameLobby";
import GameProviders from "@/components/home/GameProviders";
import PopularGames from "@/components/home/PopularGames";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import {
  ambassadors,
  banners,
  categories,
  favourites,
  gamesByCategory,
  popularGames,
  providers,
} from "@/data/home";

export default function HomePage() {
  return (
    <>
      <BannerCarousel banners={banners} />
      <AnnouncementBar message={site.announcement} />
      <GameLobby categories={categories} gamesByCategory={gamesByCategory}>
        <Favourites items={favourites} />
        <PopularGames games={popularGames} />
        <GameProviders providers={providers} />
        {/* <Ambassadors people={ambassadors} /> */}
        <Footer />
      </GameLobby>
    </>
  );
}
