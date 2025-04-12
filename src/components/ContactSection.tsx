
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !validateEmail(email)) {
      setIsValid(false);
      return;
    }
    
    setIsValid(true);
    toast({
      title: "Thanks for joining!",
      description: "We'll send you updates on our sustainable products.",
    });
    
    setEmail("");
  };

  return (
    <section id="contact" className="text-center py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="text-eco-forest font-medium">JOIN US</span>
        <h3 className="text-3xl font-semibold mt-2 mb-4">Be Part of the Movement</h3>
        <div className="bg-eco-sage h-1 w-20 mx-auto mb-6 rounded"></div>
        
        <p className="mb-8">
          Sign up for our newsletter to receive updates on new products, sustainability tips, and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValid(true);
              }}
              className={`border ${!isValid ? 'border-red-500' : 'border-eco-mint'} focus-visible:ring-eco-forest`}
            />
            {!isValid && <p className="text-red-500 text-xs mt-1 text-left">Please enter a valid email</p>}
          </div>
          <Button 
            type="submit" 
            className="bg-eco-forest hover:bg-eco-forest/90 text-white"
          >
            Sign Up
          </Button>
        </form>
        
        <p className="text-xs text-eco-deep-teal/60 mt-4">
          By subscribing, you agree to our privacy policy and consent to receive updates from our company.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
