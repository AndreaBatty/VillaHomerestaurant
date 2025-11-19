"use client";

import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import Card from "@/app/components/Card/Card";
import "./Eventi.css";
import Button from "@/app/components/Button/Button";
import { useState, useEffect } from "react";
import CardSkeleton from "@/app/components/CardSkeleton/CardSkeleton";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import CardProva from "../components/CardProva/CardProva";
import AppLink from "../components/AppLink/AppLink";



export interface Evento {
  id: number | string;
  title: string;
  description: string;
  date: string;
  image: string | StaticImageData;
}

interface EventiListProps {
  eventi: Evento[];
}

export default function EventiList({ eventi }: EventiListProps) {
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper
      id="intro-eventi"
      title="Prossimi eventi"
      headingLevel="h2"
    >
      {/* <div className="eventi-grid">
        {loading
          ? Array.from({ length: eventi.length }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          : eventi.map((evento) => (
              <Card
                key={evento.id}
                variant="evento"
                title={evento.title}
                description={
                  <>
                    <em className="evento-data">{evento.date}</em> <br />
                    {evento.description}
                  </>
                }
                image={evento.image}
                cta
              >
                <AppLink to={`/eventi/${evento.id}`} variant="button">Vai ai dettagli</AppLink>
              </Card>
            ))}
      </div> */}

      <div className="eventi-grid">
        {loading
          ? Array.from({ length: eventi.length }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          : eventi.map((evento) => (
              <CardProva
                key={evento.id}
                title={evento.title}
                description={
                  <>
                    <em className="evento-data">{evento.date}</em> <br />
                    {evento.description}
                  </>
                }
                image={evento.image}
                
              >
                {/* <Button
                  variant="text"
                  onClick={() => router.push(`/eventi/${evento.id}`)}
                >
                  Vai ai dettagli
                </Button> */}
                <AppLink to={`/eventi/${evento.id}`} variant="button">Vai ai dettagli</AppLink>
              </CardProva>
              
            ))}
      </div>
    </SectionWrapper>
  );
}
