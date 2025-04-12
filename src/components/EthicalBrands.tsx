
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const brands = [
  { 
    name: "Patagonia", 
    desc: "Recycled fabrics & fair labor practices",
    category: "Outdoor Apparel",
    image: "patagonia" // We'll use a color instead of an actual image for simplicity
  },
  { 
    name: "People Tree", 
    desc: "Fair Trade certified organic cotton fashion",
    category: "Fashion",
    image: "peopletree"
  },
  { 
    name: "Tentree", 
    desc: "Plants 10 trees for every item purchased",
    category: "Lifestyle",
    image: "tentree"
  }
];

const EthicalBrands = () => {
  return (
    <section id="ethical" className="bg-eco-mint py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-eco-forest font-medium">VALUES WE SUPPORT</span>
          <h3 className="text-3xl font-semibold mt-2 mb-4">Ethical & Transparent Brands</h3>
          <div className="bg-eco-sage h-1 w-24 mx-auto mb-6 rounded"></div>
          <p className="max-w-2xl mx-auto">
            Ethical brands are leading the way in fair wages, eco-friendly materials, and transparency. 
            We proudly stand with these companies making positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <Card key={idx} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className={`h-12 w-12 rounded-lg mb-3 ${
                  idx === 0 ? "bg-blue-100" : idx === 1 ? "bg-green-100" : "bg-amber-100"
                }`}></div>
                <CardTitle className="text-lg">{brand.name}</CardTitle>
                <CardDescription className="text-xs uppercase tracking-wide">{brand.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-eco-deep-teal/80">{brand.desc}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="#" 
                  className="text-eco-forest text-sm flex items-center hover:underline"
                >
                  Learn More <ArrowRight size={14} className="ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EthicalBrands;
