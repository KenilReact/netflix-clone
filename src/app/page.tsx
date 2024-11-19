import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import TrendingSection from "@/components/TrendingSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrendingSection />
      <FeaturesSection />
      <FAQ />
      <Footer />
    </main>
  );
}
