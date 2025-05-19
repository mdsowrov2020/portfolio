import LocomotiveScrollWrapper from "@/components/common/LocomotiveScrollWrapper";
import About from "@/components/sections/About";
import ClientHero from "@/components/sections/ClientHero";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Great from "@/components/sections/Great";
import VelocityScrollSection from "@/components/sections/VelocityScroll";
import Work from "@/components/sections/Work";

export function Home() {
  return (
    <>
      <section data-scroll-section>
        <ClientHero />
      </section>

      <section id="about" data-scroll-section>
        <About />
      </section>

      <section className="my-7" data-scroll-section>
        <VelocityScrollSection />
      </section>

      <section data-scroll-section>
        <Work />
      </section>

      <section className="my-7" id="contact" data-scroll-section>
        <Contact />
      </section>
    </>
  );
}

export default Home;
