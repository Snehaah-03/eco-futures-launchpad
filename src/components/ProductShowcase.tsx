
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Info, MoveRight, MoveDown, TreeDeciduous, Sprout } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductShowcase = () => {
  const [activeColor, setActiveColor] = useState<string | null>(null);
  
  const naturalDyes = [
    { 
      name: "Indigo", 
      color: "#3f5a9c", 
      source: "Indigofera tinctoria plant", 
      description: "Creates our signature blue tones, used for centuries in traditional textile dyeing" 
    },
    { 
      name: "Madder Root", 
      color: "#c75f5f", 
      source: "Rubia plant roots", 
      description: "Produces the warm coral and reddish hues in our floral patterns" 
    },
    { 
      name: "Chlorophyll", 
      color: "#5e8c31", 
      source: "Leafy plants", 
      description: "Extracted from plants to create our natural green tones for stems and leaves" 
    },
    { 
      name: "Turmeric", 
      color: "#daa520", 
      source: "Curcuma longa root", 
      description: "Creates golden hues and serves as our natural border color" 
    }
  ];

  return (
    <section id="product" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 natural-texture opacity-10"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 animate-fade-in">
          <span className="text-eco-forest font-medium inline-flex items-center gap-2">
            <Leaf className="h-4 w-4" /> NATURAL COLLECTION
          </span>
          <h2 className="text-4xl font-playfair font-semibold mb-4 mt-2">Flower-Dyed Textiles</h2>
          <div className="bg-eco-sage h-1 w-16 mb-6 rounded"></div>
          
          <p className="mb-4 text-lg">Our signature textiles feature intricate floral patterns, hand-printed using only natural dyes extracted from plants, flowers, and roots.</p>
          
          <ul className="space-y-3 mb-8">
            {[
              "100% organic cotton and linen fabrics",
              "Zero synthetic dyes or chemicals",
              "Traditional block-printing techniques",
              "Supporting artisan communities and ancient crafts"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-eco-forest mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <Info className="h-4 w-4 text-eco-forest" /> 
              Natural Dyes Used
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {naturalDyes.map((dye) => (
                <div 
                  key={dye.name}
                  className={`relative cursor-pointer rounded-full p-1 transition-all duration-300 hover:scale-110 ${activeColor === dye.name ? 'ring-2 ring-eco-forest ring-offset-2' : ''}`}
                  onMouseEnter={() => setActiveColor(dye.name)}
                  onMouseLeave={() => setActiveColor(null)}
                >
                  <div 
                    className="h-8 w-8 rounded-full" 
                    style={{ backgroundColor: dye.color }}
                  />
                  
                  {activeColor === dye.name && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-white/90 backdrop-blur-sm rounded shadow-md text-xs animate-fade-in z-20">
                      <p className="font-semibold">{dye.name}</p>
                      <p className="text-xs text-eco-deep-teal/80 mt-1">Source: {dye.source}</p>
                      <p className="text-xs mt-1">{dye.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-eco-forest hover:bg-eco-forest/90 text-white group transition-all">
              Shop Collection
              <MoveRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-eco-forest text-eco-deep-teal group">
              Learn Our Process
              <MoveDown className="ml-1 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md transition-all duration-500 hover:scale-[1.02] animate-float">
            <div className="absolute inset-0 bg-gradient-to-b from-eco-mint/30 to-eco-sage/30 rounded-2xl blur-2xl opacity-50 -z-10 transform scale-105"></div>
            <div className="bg-eco-cream/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-eco-mint/20">
              <AspectRatio ratio={3/4} className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/a0888540-3e61-45b8-8a7b-afbef9d05f1b.png" 
                  alt="Hand-dyed cotton saree with natural floral patterns" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </AspectRatio>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="bg-eco-light-beige/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center text-xs">
                  <Leaf className="h-3.5 w-3.5 text-eco-forest mr-1.5" />
                  <span>Natural-dyed flowers</span>
                </div>
                <div className="bg-eco-light-beige/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center text-xs">
                  <Recycle className="h-3.5 w-3.5 text-eco-forest mr-1.5" />
                  <span>Traditional craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
