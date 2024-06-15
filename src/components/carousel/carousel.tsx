import { useId, type ReactNode } from "react";
// import { FaAngleLeft } from "react-icons/fa";
import { useCarousel } from "./useCarousel";
import { cn } from "@/utils/cn";

export const Carousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full", className)}>
      {children}
      {/* <div className="flex flex-row justify-center items-center py-2"> */}
      {/* <button onClick={scrollToThePreviousSlide} className="p-2">
          <FaAngleLeft />
          <span className="sr-only">poprzedni slajd</span>
        </button> */}
      {/* <ul className="list-none flex flex-row flex-wrap items-center justify-center">
          {slides.map((_, i) => (
            <li key={i} className="flex flex-col items-center">
              <button className="p-2" onClick={() => setSlide(i)}>
                <span
                  className={twMerge(
                    "block w-2 h-2 bg-gray-300 hover:bg-blue-500 rounded-full motion-safe:transition-all motion-safe:duration-300",
                    currentSlide === i && "w-6 bg-blue-500",
                  )}
                ></span>
                <span className="sr-only">przejdź do {i + 1} slajdu</span>
              </button>
            </li>
          ))}
        </ul> */}
      {/* <button onClick={scrollToTheNextSlide} className="p-2">
          <FaAngleLeft className="rotate-180" />
          <span className="sr-only">następny slajd</span>
        </button> */}
      {/* </div> */}
    </div>
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
  } = useCarousel();

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
