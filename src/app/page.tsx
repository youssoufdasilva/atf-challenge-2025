import CTA from "@/components/sections/cta";
// import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
// import Logos, { Logos2 } from "@/components/sections/logos";
import { Logos2 } from "@/components/sections/logos";
import CodeOfConduct from "@/components/sections/code-of-conduct";
import AboutChallenge from "@/components/sections/about-challenge";
import Participation from "@/components/sections/participation";
// import Testimonials from "@/components/sections/testimonials";
// import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import AboutUs from "@/components/sections/about-us";
import { SocialProof } from "@/components/social-proof";
import { SocialProofPartner } from "@/components/social-proof-partner";
import { SocialProofSupporters } from "@/components/social-proof-supporters";
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
      <SocialProofPartner />
      <SocialProofSupporters />
      <CTA />
      <SocialProof />
      <Footer />
    </main>
  );
}
