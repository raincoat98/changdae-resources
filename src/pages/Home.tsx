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
