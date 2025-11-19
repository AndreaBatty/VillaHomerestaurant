"use client";

import { useState, useEffect } from "react";
import "./CarouselProva.css";
import { StaticImageData } from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export interface CarouselProvaItem {
  image: string;
  title: string;
}

interface CarouselProvaProps {
  data: CarouselProvaItem[];
  interval?: number;
}

export default function CarouselProva({ data }: CarouselProvaProps) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-prova">
      <BsArrowLeftCircleFill
        onClick={prevSlide}
        className="arrow arrow-left"
        aria-label="Vai alla slide precedente"
      />
      {data.map((item, idx) => {
        return (
          <img
            src={item.image}
            alt={item.title}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
          
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
        aria-label="Vai alla slide successiva"
      />
      <span className="indicators">
        {/* {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })} */}
      </span>
    </div>
  );
}
