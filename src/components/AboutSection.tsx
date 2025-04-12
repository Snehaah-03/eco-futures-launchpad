
import { Leaf, Recycle, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-eco-forest" />,
      title: "Natural Dyes",
      description: "We use plant-based dyes like indigo, turmeric, and madder root to create beautiful, earth-friendly colors."
    },
    {
      icon: <Recycle className="h-8 w-8 text-eco-forest" />,
      title: "Sustainable Textiles",
      description: "Our organic cotton and hemp fabrics are grown without pesticides and processed using traditional low-impact methods."
    },
    {
      icon: <Heart className="h-8 w-8 text-eco-forest" />,
      title: "Artisanal Craftsmanship",
      description: "We partner with skilled artisans who use generations-old techniques to create our naturally dyed garments."
    }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-eco-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-eco-forest font-medium">OUR PHILOSOPHY</span>
          <h3 className="text-3xl font-semibold mt-2">Clothing From Nature</h3>
          <div className="bg-eco-sage h-1 w-16 mx-auto mb-6 rounded"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed">
            We create clothing that honors both ancient techniques and modern sustainability. 
            By using plant-based dyes and organic textiles, we craft garments that are kind to your skin 
            and to our planet. Each piece tells a story of traditional craftsmanship and environmental stewardship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="mb-4 bg-eco-mint p-3 rounded-full">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-eco-deep-teal/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
