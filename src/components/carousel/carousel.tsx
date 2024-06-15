import { useId, type ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { CarouselProvider, useCarouselContext } from "./carousel-provider";
import { cn } from "@/utils/cn";

export const Carousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <CarouselProvider>
      <div className={cn("w-full", className)}>{children}</div>
    </CarouselProvider>
  );
};

export const CarouselTrack = ({ children }: { children: ReactNode }) => {
  const {
    sliderRef,
    handleTouchStart,
    handleTouchMove,
    handleDragEnd,
    handleMouseDown,
    handleMouseMove,
  } = useCarouselContext();

  return (
    <ul
      className="overflow-hidden flex flex-row gap-6 motion-safe:scroll-smooth snap-mandatory snap-x"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleDragEnd}
    >
      {children}
    </ul>
  );
};

export const CarouselSlide = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const slideId = useId();
  return (
    <li
      key={slideId}
      className={cn("min-w-full snap-center", className)}
      data-role="slide"
    >
      {children}
    </li>
  );
};

export const CarouselNav = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row justify-center items-center py-2">
      {children}
    </div>
  );
};

export const CarouselNavNextSlideBtn = () => {
  const { scrollToTheNextSlide } = useCarouselContext();

  return (
    <button onClick={scrollToTheNextSlide} className="p-2">
      <ChevronLeft aria-hidden="true" className="w-5 h-5 rotate-180" />
      <span className="sr-only">następny slajd</span>
    </button>
  );
};

export const CarouselNavPrevSlideBtn = () => {
  const { scrollToThePreviousSlide } = useCarouselContext();

  return (
    <button onClick={scrollToThePreviousSlide} className="p-2">
      <ChevronLeft aria-hidden="true" className="w-5 h-5" />
      <span className="sr-only">poprzedni slajd</span>
    </button>
  );
};
