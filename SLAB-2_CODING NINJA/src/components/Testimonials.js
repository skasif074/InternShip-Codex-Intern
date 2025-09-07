import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer at Google",
      content: "Coding Ninjas changed my life. Their DSA course helped me crack interviews at top tech companies.",
      rating: 5,
      image: "https://via.placeholder.com/60x60?text=RS"
    },
    {
      name: "Priya Patel",
      role: "Frontend Developer at Microsoft",
      content: "The web development course is comprehensive and the mentors are always available to help.",
      rating: 5,
      image: "https://via.placeholder.com/60x60?text=PP"
    },
    {
      name: "Amit Kumar",
      role: "Data Scientist at Amazon",
      content: "The instructors explain complex concepts in a simple way. The practice problems are excellent.",
      rating: 5,
      image: "https://via.placeholder.com/60x60?text=AK"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cn-blue mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their career goals with Coding Ninjas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cn-light-blue p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-cn-blue">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;