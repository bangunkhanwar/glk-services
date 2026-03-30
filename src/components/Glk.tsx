import { MainNavigationSection } from "./MainNavigationSection";
import { HeroBannerSection } from "./HeroBannerSection";
import { ClientTrustSection } from "./ClientTrustSection";
import { ServiceOverviewSection } from "./ServiceOverviewSection";
import { ContactFormOverlaySection } from "./ContactFormOverlaySection";
import { PricingEstimationSection } from "./PricingEstimationSection";
import { FaqSection } from "./FaqSection";
import { ContactFormBorderSection } from "./ContactFormBorderSection";

export const Glk = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      <MainNavigationSection />
      <HeroBannerSection />
      <ClientTrustSection />
      <ServiceOverviewSection />
      <ContactFormOverlaySection />
      <PricingEstimationSection />
      <FaqSection />
      <ContactFormBorderSection />
    </div>
  );
};