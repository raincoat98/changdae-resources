import Hero from "../components/Hero";
import Services from "../components/Services";
import PricingPreview from "../components/PricingPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <PricingPreview />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
};

export default Home;
