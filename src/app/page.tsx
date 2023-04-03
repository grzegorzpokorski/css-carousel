"use client";

import { Slider } from "@/components/slider/slider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full max-w-6xl mx-auto px-3">
      <Slider
        slides={[
          { id: 0, content: <>0</> },
          { id: 1, content: <>1</> },
          { id: 2, content: <>2</> },
          { id: 3, content: <>3</> },
        ]}
      />
    </main>
  );
}
