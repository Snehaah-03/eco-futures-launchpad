
import { ArrowDown, Leaf, Recycle, Sprout, CloudSunRain, Droplets } from "lucide-react";
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
      {/* Enhanced background with lush, post-rain feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-eco-forest/10 via-eco-mint/30 to-eco-sage/20 opacity-90"></div>
      
      {/* Animated water droplets for post-rain effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] animate-float opacity-20" style={{ animationDelay: "0.5s" }}>
          <Droplets size={30} className="text-eco-forest/60" />
        </div>
        <div className="absolute top-40 left-[25%] animate-float opacity-20" style={{ animationDelay: "1.2s" }}>
          <Droplets size={20} className="text-eco-forest/60" />
        </div>
        <div className="absolute top-30 right-[15%] animate-float opacity-20" style={{ animationDelay: "0.8s" }}>
          <CloudSunRain size={35} className="text-eco-forest/40" />
        </div>
      </div>
      
      {/* Floating plant elements */}
      <div className="absolute top-10 left-10 animate-float opacity-30">
        <Leaf size={40} className="text-eco-forest" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float opacity-30" style={{ animationDelay: "1s" }}>
        <Sprout size={50} className="text-eco-forest" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-eco-forest" />
            <span className="text-eco-forest font-medium uppercase tracking-wider text-sm">Revive Nature Through Fashion</span>
            <Leaf className="h-5 w-5 text-eco-forest" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-playfair tracking-tight">
            <span className="block bg-gradient-to-r from-eco-forest to-eco-sage bg-clip-text text-transparent drop-shadow-sm">Earth's Colors,</span> 
            <span className="text-eco-deep-teal relative">
              Nature's Artistry
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-eco-forest/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,0 C25,5 75,5 100,0 L100,10 L0,10 Z" fill="currentColor" />
              </svg>
            </span>
          </h2>
          
          <p className="text-xl mb-8 text-eco-deep-teal/80 max-w-2xl mx-auto">
            Experience the beauty of garments colored with plant-based dyes, crafted sustainably to honor traditional techniques and our planet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-eco-forest hover:bg-eco-forest/90 text-white px-8 py-6 text-lg group shadow-lg shadow-eco-forest/20" 
              onClick={scrollToProduct}
            >
              Explore Our Collection
              <Recycle className="ml-2 opacity-80 group-hover:rotate-180 transition-transform duration-500" size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="border-eco-forest text-eco-deep-teal px-8 py-6 text-lg hover:bg-eco-mint/50 transition-all"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="p-3 rounded-full bg-eco-mint hover:bg-eco-mint/80 transition-colors shadow-md"
            >
              <ArrowDown size={24} className="text-eco-deep-teal" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-eco-sage rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-eco-mint rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
