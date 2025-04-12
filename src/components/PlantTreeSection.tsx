
import { useState } from "react";
import { TreeDeciduous, Sprout, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PlantTreeSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically submit to a backend
      console.log("Tree planting donation with email:", email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };
  
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-eco-mint/30 to-eco-sage/30">
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="absolute top-0 left-10 transform -translate-y-1/2 hidden md:block">
          <TreeDeciduous size={80} className="text-eco-forest/20" />
        </div>
        <div className="absolute bottom-0 right-10 transform translate-y-1/2 hidden md:block">
          <Sprout size={60} className="text-eco-forest/20" />
        </div>
        
        <div className="relative bg-white/70 backdrop-blur-sm shadow-xl rounded-xl p-8 md:p-12 border border-eco-sage/30 max-w-3xl mx-auto">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-eco-forest text-white p-3 rounded-full shadow-lg">
            <TreeDeciduous size={24} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-4 mb-3">Plant a Tree With Us</h2>
          <div className="h-1 w-24 bg-eco-sage rounded-full mx-auto mb-6"></div>
          
          <p className="text-lg mb-6 max-w-xl mx-auto">
            For every purchase, we plant a tree. Join our mission to reforest our planet and combat climate change one tree at a time.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            <div className="flex-1 min-w-[200px] text-center p-4 rounded-lg bg-eco-light-beige/50">
              <h3 className="font-bold text-eco-forest text-2xl mb-1">12,458</h3>
              <p className="text-sm">Trees Planted</p>
            </div>
            <div className="flex-1 min-w-[200px] text-center p-4 rounded-lg bg-eco-light-beige/50">
              <h3 className="font-bold text-eco-forest text-2xl mb-1">345 tons</h3>
              <p className="text-sm">CO₂ Absorbed</p>
            </div>
            <div className="flex-1 min-w-[200px] text-center p-4 rounded-lg bg-eco-light-beige/50">
              <h3 className="font-bold text-eco-forest text-2xl mb-1">8</h3>
              <p className="text-sm">Countries Impacted</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <p className="mb-4">Donate to plant a tree and receive updates:</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                className="bg-eco-forest hover:bg-eco-forest/90 text-white"
              >
                {submitted ? (
                  <span className="flex items-center">
                    <Check size={16} className="mr-1" /> Thank you!
                  </span>
                ) : (
                  "Plant a Tree"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PlantTreeSection;
