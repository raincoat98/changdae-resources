import Hero from "../components/Hero";
import Services from "../components/Services";
import PricingPreview from "../components/PricingPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";
import { usePricing } from "../contexts/PricingContext";

const Home = () => {
  const { isPricingVisible } = usePricing();

  return (
    <div>
      <Hero />
      <Services />
      {isPricingVisible && <PricingPreview />}
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
};

export default Home;
