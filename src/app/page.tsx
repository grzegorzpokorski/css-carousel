import {
  Carousel,
  CarouselNavNextSlideBtn,
  CarouselNavPrevSlideBtn,
  CarouselSlide,
  CarouselTrack,
} from "@/components/carousel/carousel";

export default function Home() {
  return (
    <main className="container max-w-screen-sm mx-auto flex flex-col p-8 max-h-50dvh">
      <Carousel
        loop={false}
        className="grid grid-rows-[1fr_auto] grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center h-64 gap-x-2"
      >
        <CarouselNavPrevSlideBtn className="order-1 md:order-0 mt-2.5 bg-neutral-300 rounded-md flex justify-center" />
        <CarouselNavNextSlideBtn className="order-2 mt-2.5 bg-neutral-300 rounded-md flex justify-center" />
        <CarouselTrack className="h-full order-0 md:order-1 col-span-2 md:col-span-1">
          {Array.from(Array(5).keys()).map((item) => (
            <CarouselSlide
              key={item}
              className="bg-indigo-400 flex flex-col items-center justify-center text-white text-2xl font-bold rounded-md"
            >
              <p>{item + 1}</p>
            </CarouselSlide>
          ))}
        </CarouselTrack>
      </Carousel>
    </main>
  );
}
