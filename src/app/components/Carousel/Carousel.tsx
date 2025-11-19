"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import "./Carousel.css";

export interface CarouselItem {
  image: string | StaticImageData;
  title: string;
}

interface CarouselProps {
  data: CarouselItem[];
  interval?: number;
}

export default function Carousel({ data, interval = 4000 }: CarouselProps) {
  const [slide, setSlide] = useState(0);

  // Timer cambio slide
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [data.length, interval]);

  return (
    <div className="carousel" aria-hidden="true">
      {data.map((item, id) => (
        <div
          key={id}
          className={`carousel-slide ${slide === id ? "active" : ""}`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={id === 0}    // 🔥 SOLO la prima immagine ha priorità (LCP FIX)
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}

      <div className="carousel-fade" />
    </div>
  );
}
