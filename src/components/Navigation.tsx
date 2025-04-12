
import { useState } from "react";
import { Menu, X, Search, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Search functionality would be implemented here
  };

  return (
    <header className="flex justify-between items-center p-6 bg-eco-mint/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-eco-forest rounded-full mr-2 flex items-center justify-center">
          <Leaf size={18} className="text-white" />
        </div>
        <h1 className="text-xl font-bold font-playfair">Sustainable Futures</h1>
      </div>
      
      {/* Search bar - desktop */}
      <form onSubmit={handleSearch} className="hidden md:flex items-center max-w-xs bg-white/80 rounded-full overflow-hidden px-3 shadow-sm border border-eco-sage/30">
        <Input 
          type="text" 
          placeholder="Search natural collections..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-0 shadow-none focus-visible:ring-0 bg-transparent"
        />
        <Button type="submit" size="icon" variant="ghost" className="text-eco-deep-teal hover:text-eco-forest">
          <Search size={18} />
        </Button>
      </form>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-eco-deep-teal"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-6 text-sm">
        <a href="#about" className="hover:text-eco-forest transition-colors">About</a>
        <a href="#product" className="hover:text-eco-forest transition-colors">Our Products</a>
        <a href="#reviews" className="hover:text-eco-forest transition-colors">Reviews</a>
        <a href="#ethical" className="hover:text-eco-forest transition-colors">Ethical Brands</a>
        <a href="#contact" className="hover:text-eco-forest transition-colors">Contact</a>
      </nav>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-eco-mint/90 backdrop-blur-sm shadow-md md:hidden py-4">
          {/* Mobile search bar */}
          <form onSubmit={handleSearch} className="flex items-center mx-4 mb-4 bg-white/80 rounded-full overflow-hidden px-3 shadow-sm border border-eco-sage/30">
            <Input 
              type="text" 
              placeholder="Search collections..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 shadow-none focus-visible:ring-0 bg-transparent"
            />
            <Button type="submit" size="icon" variant="ghost" className="text-eco-deep-teal hover:text-eco-forest">
              <Search size={18} />
            </Button>
          </form>
          
          <nav className="flex flex-col items-center space-y-4 text-sm">
            <a href="#about" className="hover:text-eco-forest transition-colors" onClick={toggleMenu}>About</a>
            <a href="#product" className="hover:text-eco-forest transition-colors" onClick={toggleMenu}>Our Products</a>
            <a href="#reviews" className="hover:text-eco-forest transition-colors" onClick={toggleMenu}>Reviews</a>
            <a href="#ethical" className="hover:text-eco-forest transition-colors" onClick={toggleMenu}>Ethical Brands</a>
            <a href="#contact" className="hover:text-eco-forest transition-colors" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
