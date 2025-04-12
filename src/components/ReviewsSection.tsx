
import { Star, User } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Emma Thompson",
      rating: 5,
      text: "I love the feel of these natural dyed clothes against my skin. Knowing they're made without harmful chemicals makes me feel good about my purchase.",
      date: "March 12, 2025"
    },
    {
      id: 2,
      name: "Lucas Chen",
      rating: 5,
      text: "The colors are stunning and unique. Each piece feels special and the quality is excellent. Will definitely buy more.",
      date: "February 28, 2025"
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      rating: 4,
      text: "Beautiful craftsmanship and love the story behind each dye color. The only reason for 4 stars is that sizes run slightly large.",
      date: "April 2, 2025"
    }
  ];

  return (
    <section id="reviews" className="py-16 px-6 bg-gradient-to-b from-eco-light-beige to-eco-mint/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-eco-forest font-medium">TESTIMONIALS</span>
          <h3 className="text-3xl font-semibold mt-2">Customer Reviews</h3>
          <div className="bg-eco-sage h-1 w-16 mx-auto mb-6 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-eco-mint hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-eco-sage/30 rounded-full p-2 mr-3">
                  <User className="h-5 w-5 text-eco-deep-teal" />
                </div>
                <div>
                  <h4 className="font-medium">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-eco-deep-teal/80 italic mb-3">"{review.text}"</p>
              <div className="text-xs text-eco-deep-teal/60">{review.date}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-eco-forest hover:text-eco-forest/80 font-medium">
            View all reviews
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
