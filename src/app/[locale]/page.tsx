import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import TrophyRoom from "@/components/TrophyRoom";
import GoatStats from "@/components/GoatStats";
import Footer from "@/components/Footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Timeline />
        <TrophyRoom />
        <GoatStats />
      </main>
      <Footer />
    </>
  );
}
