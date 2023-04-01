"use client";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [c, setC] = useState<number | null>(null);

  return (
    <main className="w-full max-w-6xl mx-auto px-3">
      <div className="w-full">
        <ul className="overflow-hidden flex flex-row gap-6 scroll-smooth snap-mandatory snap-x">
          <li
            className="min-w-[calc(100%*4/5)] bg-blue-100 h-64 snap-start ml-[100%]"
            id="slide-1"
          >
            1
          </li>
          <li
            className="min-w-[calc(100%*4/5)] bg-blue-200 h-64 snap-start"
            id="slide-2"
          >
            2
          </li>
          <li
            className="min-w-[calc(100%*4/5)] bg-blue-300 h-64 snap-start"
            id="slide-3"
          >
            3
          </li>
          <li
            className="min-w-[calc(100%*4/5)] bg-blue-400 h-64 snap-start"
            id="slide-4"
          >
            4
          </li>
          <li
            className="min-w-[calc(100%*4/5)] bg-blue-500 h-64 snap-start"
            id="slide-5"
          >
            5
          </li>
        </ul>
        <a
          href={`#slide-${c || 5}`}
          onClick={() =>
            setC((prev) => (prev === null ? 5 : prev === 1 ? 5 : prev - 1))
          }
        >
          prev
        </a>
        <a
          href={`#slide-${c || 2}`}
          onClick={() =>
            setC((prev) => (prev == null ? 2 : prev === 5 ? 1 : prev + 1))
          }
        >
          next
        </a>
      </div>
    </main>
  );
}
