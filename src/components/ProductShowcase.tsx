
import { Button } from "@/components/ui/button";
import { Leaf, Recycle } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section id="product" className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="text-eco-forest font-medium">NEW COLLECTION</span>
          <h2 className="text-4xl font-semibold mb-4 mt-2">Natural Dyed Clothing</h2>
          <div className="bg-eco-sage h-1 w-16 mb-6 rounded"></div>
          
          <p className="mb-4 text-lg">Our eco-friendly clothing line is made from organic cotton and dyed with natural elements from plants, fruits, and minerals.</p>
          
          <ul className="space-y-3 mb-8">
            {[
              "100% GOTS-certified organic cotton",
              "Plant-based dyes from indigo, turmeric, and madder root",
              "Zero harmful chemicals or synthetic additives",
              "Supports traditional artisan techniques"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-eco-forest mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4">
            <Button className="bg-eco-forest hover:bg-eco-forest/90 text-white px-8">
              Shop Collection
            </Button>
            <Button variant="outline" className="border-eco-forest text-eco-deep-teal">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 eco-gradient rounded-full blur-2xl opacity-20 -z-10 transform scale-110"></div>
            <div className="relative">
              <img 
                src="/natural-dyed-clothing.jpg" 
                alt="Natural dyed clothing" 
                className="rounded-lg shadow-lg h-[400px] object-cover" 
              />
              <div className="absolute bottom-3 left-3 bg-eco-light-beige/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center text-xs">
                <Leaf className="h-3.5 w-3.5 text-eco-forest mr-1.5" />
                <span>Plant-based dyes</span>
              </div>
              <div className="absolute top-3 right-3 bg-eco-light-beige/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center text-xs">
                <Recycle className="h-3.5 w-3.5 text-eco-forest mr-1.5" />
                <span>Sustainable process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
