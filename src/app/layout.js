import { Jost } from "next/font/google";
import BottomBar from "@/components/layout/BottomBar";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { site } from "@/lib/site";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: site.name,
  description: `${site.name} – casino, slots, sports and live games.`,
};

export const viewport = {
  themeColor: "#20264a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} antialiased`}>
      <body className="font-sans">
        {/* Mobile-first shell; centered column on larger screens */}
        <div className="relative mx-auto min-h-dvh max-w-[480px] bg-ink-900 shadow-2xl">
          <Header />
          <main className="pb-24">{children}</main>
        </div>
        <ScrollToTop />
        <BottomBar />
      </body>
    </html>
  );
}
