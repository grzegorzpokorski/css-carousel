import { ReactNode, useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useSlider } from "./useSlider";

export const Slider = ({
  slides,
}: {
  slides: { content: ReactNode; id: number }[];
}) => {
  const {
    scrollToThePreviousSlide,
    scrollToTheNextSlide,
    setSlide,
    sliderRef,
    currentSlide,
    handleTouchStart,
    handleTouchMove,
    handleDragEnd,
    handleMouseDown,
    handleMouseMove,
  } = useSlider();

  return (
    <div className="w-full">
      <ul
        className="overflow-hidden flex flex-row gap-6 scroll-smooth snap-mandatory snap-x"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
      >
        {slides.map((slide) => (
          <li
            key={slide.id}
            className="min-w-[calc(100%)] bg-blue-500 h-64 snap-center flex flex-col items-center justify-center text-white font-bold text-2xl"
            data-role="slide"
          >
            {slide.content}
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-center items-center py-2">
        <button onClick={scrollToThePreviousSlide} className="p-2">
          <FaAngleLeft />
          <span className="sr-only">poprzedni slajd</span>
        </button>
        <ul className="list-none flex flex-row flex-wrap items-center justify-center">
          {slides.map((_, i) => (
            <li key={i} className="flex flex-col items-center">
              <button className="p-2" onClick={() => setSlide(i)}>
                <span
                  className={twMerge(
                    "block w-2 h-2 bg-gray-300 hover:bg-blue-500 rounded-full transition-all duration-300",
                    currentSlide === i && "w-6 bg-blue-500",
                  )}
                ></span>
                <span className="sr-only">przejdź do {i + 1} slajdu</span>
              </button>
            </li>
          ))}
        </ul>
        <button onClick={scrollToTheNextSlide} className="p-2">
          <FaAngleLeft className="rotate-180" />
          <span className="sr-only">następny slajd</span>
        </button>
      </div>
    </div>
  );
};
