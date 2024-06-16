import {
  Carousel,
  CarouselNavNextSlideBtn,
  CarouselNavPrevSlideBtn,
  CarouselSlide,
  CarouselTrack,
} from "@/components/carousel/carousel";

export default function Home() {
  const slideStyles =
    "h-full grid grid-cols-4 grid-rows-[auto_1fr] gap-x-0.5 sm:gap-x-1 md:gap-x-2 text-center overflow-y-auto";

  return (
    <main className="container max-w-screen-sm mx-auto flex flex-col p-8 max-h-50dvh">
      <Carousel
        loop={false}
        className="grid grid-cols-[auto_1fr_auto] items-start h-64"
      >
        <CarouselNavPrevSlideBtn className="order-0 mt-2.5" />
        <CarouselNavNextSlideBtn className="order-2 mt-2.5" />
        <CarouselTrack className="h-full order-1">
          <CarouselSlide className={slideStyles}>
            <article className="max-w-24">
              <div className="sticky top-0 bg-white py-2">
                <h2>1</h2>
                <p>pon</p>
              </div>
              <ul
                className="list-none flex flex-col gap-y-0.5 sm:gap-y-1 md:gap-y-2 text-sm sm:text-base overflow-y-auto"
                role="list"
              >
                {Array.from(Array(10).keys()).map((item) => (
                  <li key={item}>
                    <span className="block bg-black/20 px-2 py-1 rounded">
                      1{item}:00
                    </span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="max-w-24">
              <div className="sticky top-0 bg-white py-2">
                <h2>2</h2>
                <p>wto</p>
              </div>
              <ul
                className="list-none flex flex-col gap-y-0.5 sm:gap-y-1 md:gap-y-2 text-sm sm:text-base overflow-y-auto"
                role="list"
              >
                {Array.from(Array(2).keys()).map((item) => (
                  <li key={item}>
                    <span className="block bg-black/20 px-2 py-1 rounded">
                      1{item}:00
                    </span>
                  </li>
                ))}
                {Array.from(Array(8).keys()).map((item) => (
                  <li key={item}>
                    <span className="block px-2 py-1">-</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="max-w-24">
              <div className="sticky top-0 bg-white py-2">
                <h2>3</h2>
                <p>śro</p>
              </div>
              <ul
                className="list-none flex flex-col gap-y-0.5 sm:gap-y-1 md:gap-y-2 text-sm sm:text-base overflow-y-auto"
                role="list"
              >
                {Array.from(Array(5).keys()).map((item) => (
                  <li key={item}>
                    <span className="block bg-black/20 px-2 py-1 rounded">
                      1{item}:00
                    </span>
                  </li>
                ))}
                {Array.from(Array(5).keys()).map((item) => (
                  <li key={item}>
                    <span className="block px-2 py-1">-</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="max-w-24">
              <div className="sticky top-0 bg-white py-2">
                <h2>4</h2>
                <p>czw</p>
              </div>
              <ul
                className="list-none flex flex-col gap-y-0.5 sm:gap-y-1 md:gap-y-2 text-sm sm:text-base overflow-y-auto"
                role="list"
              >
                {Array.from(Array(10).keys()).map((item) => (
                  <li key={item}>
                    <span className="block bg-black/20 px-2 py-1 rounded">
                      1{item}:00
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </CarouselSlide>
          <CarouselSlide className={slideStyles}>world</CarouselSlide>
        </CarouselTrack>
      </Carousel>
    </main>
  );
}
