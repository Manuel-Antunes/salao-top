import * as React from "react";
import ContactSection from "../components/sections/ContactSection";
import CTA1Section from "../components/sections/CTA1Section";
import CTA2Section from "../components/sections/CTA2Section";
import FAQSection from "../components/sections/FAQSection";
import FeatureSection from "../components/sections/FeatureSection";
import FooterSection from "../components/sections/FooterSection";
import HeroSection from "../components/sections/HeroSection";
import PricingSection from "../components/sections/PricingSection";
import SocialProofSection from "../components/sections/SocialProofSection";
import TeamSection from "../components/sections/TeamSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TeamSection />
      <CTA1Section />
      <TestimonialsSection />
      <PricingSection />
      <CTA2Section />
      <SocialProofSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
