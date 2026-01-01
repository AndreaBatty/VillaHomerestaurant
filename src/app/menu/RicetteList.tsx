"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import { StaticImageData } from "next/image";
import Card from "../components/Card/Card";

// Tipi dei piatti (adatta ai tuoi dati reali)
export interface Dish {
  id: number | string;
  title: string;
  description: string;
  image: string | StaticImageData;
  ingredients: string[];
}

interface IRicetteListProps {
  dishes: Dish[];
}

export default function RicetteList({ dishes }: IRicetteListProps) {
  const [loading, setLoading] = useState(true);

  // Simula caricamento iniziale
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SectionWrapper
        id="piatti"
        title="I piatti di questa stagione"
        align="center"
      >

        <div className="piatti-grid">
          {loading
            ? Array.from({ length: dishes.length }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : dishes.map((dish) => (
                <Card
                  key={dish.id}
                  role="button"
                  tabIndex={0}
                  title={dish.title}
                  description={dish.description}
                  image={dish.image}
                  
                />
              ))}
        </div>


      </SectionWrapper>
    </>
  );
}
