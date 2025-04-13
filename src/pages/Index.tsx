
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductShowcase from "@/components/ProductShowcase";
import ReviewsSection from "@/components/ReviewsSection";
import EthicalBrands from "@/components/EthicalBrands";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PlantTreeSection from "@/components/PlantTreeSection";
import LetterDescriptionSection from "@/components/LetterDescriptionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-eco-light-beige text-eco-deep-teal font-sans">
      <Navigation />
      <HeroSection />
      <LetterDescriptionSection />
      <AboutSection />
      <ProductShowcase />
      <PlantTreeSection />
      <ReviewsSection />
      <EthicalBrands />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

