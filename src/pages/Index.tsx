import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";
import SEOHead from "@/components/SEOHead";

const Index = () => (
  <>
    <SEOHead
      path="/"
      description="Maiitreyaa Integrated Solutions LLP (LLPIN: ACW-8159) is a registered manpower supply company in Allahabad, UP. We provide skilled, semi-skilled, and unskilled workers for construction, manufacturing, and industrial projects across India. Get workforce deployed within 48 hours."
    />
    <HeroSection />
    <ServicesSection />
    <WhyChooseUs />
    {/* <StatsSection /> */}
    {/* <TestimonialsSection /> */}
    <CTABanner />
  </>
);

export default Index;
