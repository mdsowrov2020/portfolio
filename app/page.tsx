import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

import VelocityScrollSection from "@/components/sections/VelocityScroll";
import HeroSection from "@/components/sections/HeroNew";

export default function Home() {
  return (
    <>
      <section>
        {/* <ClientHero /> */}
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section className="my-7">
        <VelocityScrollSection />
      </section>

      <section id="work">
        <Work />
      </section>

      <section className="my-7" id="contact">
        <Contact />
      </section>
    </>
  );
}
