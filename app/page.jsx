import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
