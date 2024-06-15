import type { MouseEvent, ReactNode, RefObject, TouchEvent } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface CarouselContextValue {
  scrollToThePreviousSlide: () => void;
  scrollToTheNextSlide: () => void;
  setSlide: (v: number) => void;
  sliderRef: RefObject<HTMLUListElement>;
  currentSlideIndex: number;
  handleTouchStart: (e: TouchEvent) => void;
  handleTouchMove: (e: TouchEvent) => void;
  handleDragEnd: () => void;
  handleMouseDown: (e: MouseEvent) => void;
  handleMouseMove: (e: MouseEvent) => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

export const CarouselProvider = ({ children }: { children: ReactNode }) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [slides, setSlides] = useState<NodeListOf<HTMLLIElement>>();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setSlides(sliderRef.current.querySelectorAll('[data-role="slide"]'));
    }
  }, []);

  useEffect(() => {
    if (sliderRef.current && slides) {
      sliderRef.current.scrollTo(slides[currentSlideIndex].offsetLeft, 0);
      Array.from(slides).map((slide) => {
        if (slide !== slides[currentSlideIndex]) {
          slide.setAttribute("aria-hidden", "true");
        } else {
          slide.setAttribute("aria-hidden", "false");
        }
      });
    }
  }, [currentSlideIndex, slides]);

  const scrollToThePreviousSlide = useCallback(() => {
    if (slides) {
      setCurrentSlideIndex((prev) => (!prev ? slides.length - 1 : prev - 1));
    }
  }, [slides]);

  const scrollToTheNextSlide = useCallback(() => {
    if (slides) {
      setCurrentSlideIndex((prev) => {
        if (!prev) {
          return 1;
        }
        if (prev === slides.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }
  }, [slides]);

  const setSlide = (i: number) => setCurrentSlideIndex(i);

  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const dragEnd = useRef<{ x: number; y: number } | null>(null);
  const minXSwipeDistance = 50;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    dragStart.current = null;
    dragStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    dragStart.current = null;
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    dragEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    dragEnd.current = {
      x: e.clientX,
      y: e.clientY,
    };
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!dragStart.current || !dragEnd.current) return;

    const xDistance = dragStart.current.x - dragEnd.current.x;
    const isLeftSwipe = xDistance > minXSwipeDistance;
    const isRightSwipe = xDistance < -minXSwipeDistance;

    if (isLeftSwipe) scrollToTheNextSlide();
    if (isRightSwipe) scrollToThePreviousSlide();

    dragEnd.current = null;
    dragStart.current = null;
  }, [scrollToTheNextSlide, scrollToThePreviousSlide]);

  const value = {
    scrollToThePreviousSlide,
    scrollToTheNextSlide,
    setSlide,
    sliderRef,
    currentSlideIndex,
    handleTouchStart,
    handleTouchMove,
    handleDragEnd,
    handleMouseDown,
    handleMouseMove,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = () => {
  const ctx = useContext(CarouselContext);

  if (!ctx) {
    throw new Error("CarouselContext must be used inside CarouselProvider!");
  }

  return ctx;
};
