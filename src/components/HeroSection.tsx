
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById("product");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 eco-gradient opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Sustainable Living <span className="text-eco-forest">Made Simple</span>
          </h2>
          
          <p className="text-xl mb-8 text-eco-deep-teal/80">
            Join the movement with our zero-waste reusable bottle and eco-friendly essentials for everyday life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-eco-forest hover:bg-eco-forest/90 text-white px-8 py-6 text-lg" 
              onClick={scrollToProduct}
            >
              Explore Our Eco Bottle
            </Button>
            <Button 
              variant="outline" 
              className="border-eco-forest text-eco-deep-teal px-8 py-6 text-lg"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="p-3 rounded-full bg-eco-mint hover:bg-eco-mint/80 transition-colors"
            >
              <ArrowDown size={24} className="text-eco-deep-teal" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-eco-sage rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-eco-mint rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
