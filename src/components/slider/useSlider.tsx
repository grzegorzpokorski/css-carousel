import { useEffect, useRef, useState } from "react";

export const useSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [slides, setSlides] = useState<NodeListOf<HTMLLIElement>>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderRef.current !== null) {
      setSlides(sliderRef.current.querySelectorAll('[data-role="slide"]'));
    }
  }, []);

  useEffect(() => {
    if (
      currentSlide !== null &&
      sliderRef.current !== null &&
      slides !== undefined
    ) {
      sliderRef.current.scrollTo(slides[currentSlide].offsetLeft, 0);
    }
  }, [currentSlide, slides]);

  const scrollToThePreviousSlide = () => {
    if (slides !== undefined) {
      setCurrentSlide((prev) =>
        prev === null
          ? slides.length - 1
          : prev === 0
          ? slides.length - 1
          : prev - 1,
      );
    }
  };

  const scrollToTheNextSlide = () => {
    if (slides !== undefined) {
      setCurrentSlide((prev) =>
        prev === null ? 1 : prev === slides.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const setSlide = (i: number) => setCurrentSlide(i);

  return {
    scrollToThePreviousSlide,
    scrollToTheNextSlide,
    setSlide,
    sliderRef,
    currentSlide,
  };
};
