
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-eco-mint py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-eco-forest rounded-full mr-2"></div>
              <h3 className="text-xl font-bold">Sustainable Futures</h3>
            </div>
            <p className="text-eco-deep-teal/80 mb-4 max-w-sm">
              Creating eco-friendly essentials for a better tomorrow. Join us in making sustainable choices for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-eco-forest/10 rounded-full hover:bg-eco-forest/20 transition-colors">
                <Instagram size={18} className="text-eco-deep-teal" />
              </a>
              <a href="#" className="p-2 bg-eco-forest/10 rounded-full hover:bg-eco-forest/20 transition-colors">
                <Twitter size={18} className="text-eco-deep-teal" />
              </a>
              <a href="#" className="p-2 bg-eco-forest/10 rounded-full hover:bg-eco-forest/20 transition-colors">
                <Facebook size={18} className="text-eco-deep-teal" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">About Us</a></li>
              <li><a href="#product" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Our Products</a></li>
              <li><a href="#ethical" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Ethical Brands</a></li>
              <li><a href="#contact" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-eco-deep-teal/80 hover:text-eco-forest transition-colors">Returns & Refunds</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-eco-deep-teal/10 text-center">
          <p className="text-sm text-eco-deep-teal/60">
            &copy; {new Date().getFullYear()} Sustainable Futures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
