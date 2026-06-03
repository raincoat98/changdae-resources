import SEOHead from "../components/SEOHead";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import { usePricing } from "../contexts/PricingContext";
import PricingPreview from "../components/PricingPreview";

const Home = () => {
  const { isPricingVisible } = usePricing();

  return (
    <div>
      <SEOHead
        title="경기 광주 고철·비철·철거 전문 최고가 매입"
        description="경기 광주시 17년 경력 창대자원. 고철·동·알루미늄·스테인리스 최고가 매입. 건물철거·공장정리·폐기물수거 원스톱 서비스. 무료 방문 견적, 현금 즉시 지급. 010-9121-8579"
        path="/"
      />
      <Hero />
      <HowItWorks />
      <Services />
      {isPricingVisible && <PricingPreview />}
      <Testimonials />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
};

export default Home;
