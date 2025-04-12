
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  return (
    <section id="product" className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="text-eco-forest font-medium">NEW PRODUCT</span>
          <h2 className="text-4xl font-semibold mb-4 mt-2">Eco Bottle</h2>
          <div className="bg-eco-sage h-1 w-16 mb-6 rounded"></div>
          
          <p className="mb-4 text-lg">Our zero-waste reusable bottle is crafted from recycled materials and designed to last a lifetime.</p>
          
          <ul className="space-y-3 mb-8">
            {[
              "100% BPA-free recycled materials",
              "Keeps drinks cold for 24h, hot for 12h",
              "Portion of proceeds supports ocean cleanup",
              "Customizable colors and engravings"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-eco-forest mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4">
            <Button className="bg-eco-forest hover:bg-eco-forest/90 text-white px-8">
              Pre-order Now
            </Button>
            <Button variant="outline" className="border-eco-forest text-eco-deep-teal">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 eco-gradient rounded-full blur-2xl opacity-20 -z-10 transform scale-90"></div>
            <div className="h-80 w-48 rounded-full bg-eco-forest/90 flex items-center justify-center animate-float bottle-shadow">
              <div className="h-72 w-40 rounded-full bg-eco-cream flex items-center justify-center">
                <div className="h-64 w-32 rounded-full bg-eco-mint/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
