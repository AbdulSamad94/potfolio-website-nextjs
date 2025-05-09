import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <section>
        <HeroSection />
      </section>
      <section className="mt-32">
        <About />
      </section>
      <section className="mt-24">
        <Services />
      </section>
      <section className="mt-32">
        <Work />
      </section>
      <section className="20">
        <Reviews />
      </section>
      <section>
        <Cta />
      </section>
    </main>
  );
}
