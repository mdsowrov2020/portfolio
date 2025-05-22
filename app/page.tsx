import About from "@/components/sections/About";
import ClientHero from "@/components/sections/ClientHero";
import Contact from "@/components/sections/Contact";

import VelocityScrollSection from "@/components/sections/VelocityScroll";
import Work from "@/components/sections/Work";

export function Home() {
  return (
    <>
      <section>
        <ClientHero />
      </section>

      <section id="about">
        <About />
      </section>

      <section className="my-7">
        <VelocityScrollSection />
      </section>

      <section>
        <Work />
      </section>

      <section className="my-7" id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
