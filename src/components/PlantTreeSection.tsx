
import { useState } from "react";
import { TreeDeciduous, Sprout, Check, LeafyGreen, Badge, Shield } from "lucide-react";
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
    <section className="py-20 px-4 bg-gradient-to-br from-eco-mint/40 to-eco-sage/40 relative overflow-hidden">
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[20%] animate-float" style={{ animationDelay: "0.3s" }}>
          <Sprout size={30} className="text-eco-forest/20" />
        </div>
        <div className="absolute top-20 right-[30%] animate-float" style={{ animationDelay: "1.1s" }}>
          <LeafyGreen size={25} className="text-eco-forest/20" />
        </div>
        <div className="absolute bottom-15 right-[15%] animate-float" style={{ animationDelay: "0.7s" }}>
          <Sprout size={35} className="text-eco-forest/20" />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="absolute top-0 left-10 transform -translate-y-1/2 hidden md:block">
          <TreeDeciduous size={80} className="text-eco-forest/20" />
        </div>
        <div className="absolute bottom-0 right-10 transform translate-y-1/2 hidden md:block">
          <Sprout size={60} className="text-eco-forest/20" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-8 border border-eco-sage/30">
          {/* Image Section */}
          <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
            <img 
              src="/lovable-uploads/c23f5268-7898-4bcb-982e-eba19fa309b0.png" 
              alt="Person planting a tree in a forest" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white text-left">
                <p className="text-sm font-medium">Every tree makes a difference</p>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="text-left">
            <div className="inline-block bg-eco-forest text-white p-3 rounded-full shadow-lg mb-4">
              <TreeDeciduous size={24} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3 text-eco-deep-teal">Plant a Tree With Us</h2>
            <div className="h-1 w-24 bg-eco-sage rounded-full mb-6"></div>
            
            <p className="text-lg mb-6">
              For every purchase, we plant a tree. Join our mission to reforest our planet and combat climate change one tree at a time.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex-1 min-w-[140px] text-center p-4 rounded-lg bg-eco-light-beige/80 shadow-sm">
                <h3 className="font-bold text-eco-forest text-2xl mb-1">12,458</h3>
                <p className="text-sm">Trees Planted</p>
              </div>
              <div className="flex-1 min-w-[140px] text-center p-4 rounded-lg bg-eco-light-beige/80 shadow-sm">
                <h3 className="font-bold text-eco-forest text-2xl mb-1">345 tons</h3>
                <p className="text-sm">CO₂ Absorbed</p>
              </div>
              <div className="flex-1 min-w-[140px] text-center p-4 rounded-lg bg-eco-light-beige/80 shadow-sm">
                <h3 className="font-bold text-eco-forest text-2xl mb-1">8</h3>
                <p className="text-sm">Countries Impacted</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <p className="mb-4 text-eco-deep-teal">Donate to plant a tree and receive updates:</p>
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
                  className="bg-eco-forest hover:bg-eco-forest/90 text-white shadow-md"
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
      </div>
      
      {/* Certifications */}
      <div className="max-w-4xl mx-auto mt-16 bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-playfair font-bold mb-6 text-center text-eco-deep-teal">
          Our Sustainability Certifications
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center p-4 bg-eco-light-beige/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-eco-forest/10 p-3 rounded-full mb-3">
              <Badge size={28} className="text-eco-forest" />
            </div>
            <h4 className="font-bold mb-1">GOTS Certified</h4>
            <p className="text-sm text-center text-eco-deep-teal/80">Global Organic Textile Standard ensures environmentally and socially responsible manufacturing.</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-eco-light-beige/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-eco-forest/10 p-3 rounded-full mb-3">
              <Shield size={28} className="text-eco-forest" />
            </div>
            <h4 className="font-bold mb-1">Fair Trade Certified</h4>
            <p className="text-sm text-center text-eco-deep-teal/80">Ensures fair wages and safe working conditions for farmers and workers who grow and craft our materials.</p>
          </div>
          
          <div className="flex flex-col items-center p-4 bg-eco-light-beige/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-eco-forest/10 p-3 rounded-full mb-3">
              <Sprout size={28} className="text-eco-forest" />
            </div>
            <h4 className="font-bold mb-1">Zero Carbon Footprint</h4>
            <p className="text-sm text-center text-eco-deep-teal/80">Our production process is carbon neutral, offsetting emissions through our tree planting initiatives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantTreeSection;
