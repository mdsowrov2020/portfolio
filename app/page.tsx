import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
import ClientHero from "@/components/sections/ClientHero";
import VelocityScrollSection from "@/components/sections/VelocityScroll";

export default function Home() {
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
