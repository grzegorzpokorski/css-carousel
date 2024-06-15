"use client";

import {
  Carousel,
  CarouselSlide,
  CarouselTrack,
} from "@/components/carousel/carousel";

export default function Home() {
  const slideStyles =
    "bg-blue-500 text-white h-64 rounded-lg text-2xl font-bold items-center justify-center flex";

  return (
    <main className="container mx-auto flex flex-col p-8">
      <Carousel>
        <CarouselTrack>
          <CarouselSlide className={slideStyles}>Hello</CarouselSlide>
          <CarouselSlide className={slideStyles}>world</CarouselSlide>
          <CarouselSlide className={slideStyles}>I am</CarouselSlide>
          <CarouselSlide className={slideStyles}>carousel</CarouselSlide>
        </CarouselTrack>
      </Carousel>
    </main>
  );
}
