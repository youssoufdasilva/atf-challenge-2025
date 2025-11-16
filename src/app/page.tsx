import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import CodeOfConduct from "@/components/sections/code-of-conduct";
import { Logos2 } from "@/components/sections/logos";
import AboutChallenge from "@/components/sections/about-challenge";
import Participation from "@/components/sections/participation";
import AboutUs from "@/components/sections/about-us";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutChallenge />
      <CodeOfConduct />
      <Participation />

      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
      {/* <Blog /> */}

      {/* <TestimonialsCarousel /> */}
      <AboutUs />
      <Logos2 />
      <CTA />
      <Footer />
    </main>
  );
}
