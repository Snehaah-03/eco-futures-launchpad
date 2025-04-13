
import React from 'react';
import { Leaf, Globe, Sprout, Palette } from 'lucide-react';

const LetterDescriptionSection = () => {
  const highlights = [
    { letter: 'P', text: 'Plant-Based Dye Techniques', icon: Leaf },
    { letter: 'E', text: 'Eco-Conscious Production', icon: Globe },
    { letter: 'M', text: 'Minimal Environmental Footprint', icon: Sprout },
    { letter: 'A', text: 'Artisan-Crafted Designs', icon: Palette }
  ];

  return (
    <section className="py-16 bg-eco-light-beige">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-playfair text-eco-deep-teal text-center mb-12">
          Our Mission in Letters
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map(({ letter, text, icon: Icon }) => (
            <div 
              key={letter} 
              className="flex items-center space-x-6 bg-white/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-6xl font-bold text-eco-forest w-24 flex-shrink-0">
                {letter}
              </div>
              <div className="flex items-center space-x-4">
                <Icon className="text-eco-forest" size={32} />
                <p className="text-eco-deep-teal font-medium">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-xl text-eco-deep-teal/80">
            At Natural Palette, we transform traditional plant-based dyeing techniques 
            into modern, eco-friendly clothing. Our mission is to reconnect fashion with 
            nature, celebrating artisanal craftsmanship and honoring our planet's resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetterDescriptionSection;

