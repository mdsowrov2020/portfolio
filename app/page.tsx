import About from "@/components/sections/About";
import ClientHero from "@/components/sections/ClientHero";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Great from "@/components/sections/Great";
import VelocityScrollSection from "@/components/sections/VelocityScroll";
import Work from "@/components/sections/Work";
import React from "react";

const Home = () => {
  return (
    <div>
      <ClientHero />

      <div id="about">
        <About />
      </div>

      <div className="my-7">
        <VelocityScrollSection />
      </div>

      <Work />
      <Education />
      <div className="my-7" id="contact">
        <Contact />
      </div>
      {/* <Great /> */}
    </div>
  );
};

export default Home;
