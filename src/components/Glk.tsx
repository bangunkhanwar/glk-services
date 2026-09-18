import { MainNavigationSection } from "./MainNavigationSection";
import { HeroBannerSection } from "./HeroBannerSection";
import { ClientTrustSection } from "./ClientTrustSection";
import { ServiceOverviewSection } from "./ServiceOverviewSection";
import { WebAppServiceSection } from "./WebAppServiceSection";
import { ContactFormOverlaySection } from "./ContactFormOverlaySection";
import { PricingEstimationSection } from "./PricingEstimationSection";
import { FaqSection } from "./FaqSection";
import { ContactFormBorderSection } from "./ContactFormBorderSection";
import { FooterSection } from "./FooterSection";

export const Glk = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-primary)",
        minHeight: "100vh",
      }}
    >
      <MainNavigationSection />

      <main>
        <HeroBannerSection />
        <ClientTrustSection />
        <ServiceOverviewSection />
        <WebAppServiceSection />
        <ContactFormOverlaySection />
        <PricingEstimationSection />
        <FaqSection />
        <ContactFormBorderSection />
      </main>

      <FooterSection />
    </div>
  );
};