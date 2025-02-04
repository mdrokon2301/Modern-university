import { useState, useCallback } from 'react';

export default function useSlider(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((current) => (current - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return { currentSlide, nextSlide, prevSlide };
}