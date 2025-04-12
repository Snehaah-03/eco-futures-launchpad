
import { Leaf, Recycle, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-eco-forest" />,
      title: "Sustainability",
      description: "We prioritize eco-friendly materials and production methods to minimize our environmental footprint."
    },
    {
      icon: <Recycle className="h-8 w-8 text-eco-forest" />,
      title: "Circularity",
      description: "Our products are designed for longevity and recyclability, reducing waste and promoting a circular economy."
    },
    {
      icon: <Heart className="h-8 w-8 text-eco-forest" />,
      title: "Ethical Production",
      description: "We ensure fair wages and safe working conditions throughout our supply chain."
    }
  ];

  return (
    <section id="about" className="py-16 px-6 bg-eco-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-eco-forest font-medium">OUR MISSION</span>
          <h3 className="text-3xl font-semibold mt-2">Who We Are</h3>
          <div className="bg-eco-sage h-1 w-16 mx-auto mb-6 rounded"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg leading-relaxed">
            We're a mission-driven brand creating eco-friendly essentials for everyday living — from reusable water bottles to zero-waste home goods. 
            Our goal is to make sustainability both accessible and stylish, proving that you don't have to compromise on design or functionality 
            to make environmentally conscious choices.
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
