import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useSlider from '../../hooks/useSlider';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Transform Your Future",
    description: "Join a community dedicated to academic excellence and personal growth",
    cta: "Apply Now",
    ctaLink: "#apply"
  },
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Research That Matters",
    description: "Make an impact through innovative research and collaboration",
    cta: "Explore Research",
    ctaLink: "#research"
  }
];

export default function HeroSlider() {
  const { currentSlide, nextSlide, prevSlide } = useSlider(slides.length);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center h-full text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <a
                href={slide.ctaLink}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block w-fit"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}