import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    program: "Computer Science, '24",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    quote: "The professors here don't just teach – they mentor. Through their guidance, I've developed strong leadership skills and confidence in my abilities."
  },
  {
    name: "Rahul Patel",
    program: "Business Administration, '23",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    quote: "RMU's practical approach to education has given me real-world experience that employers value. The support system here is incredible."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Student Stories</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <Quote className="h-8 w-8 text-blue-600 mb-6" />
              <p className="text-lg text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.program}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}