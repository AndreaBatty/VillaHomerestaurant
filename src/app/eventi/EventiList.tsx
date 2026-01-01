"use client";

import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import "./Eventi.css";
import { useState, useEffect } from "react";
import CardSkeleton from "@/app/components/CardSkeleton/CardSkeleton";
import { StaticImageData } from "next/image";
import Card from "../components/Card/Card";
import AppLink from "../components/AppLink/AppLink";
import EventsNotFound from "../components/EventsNotFound/EventsNotFound";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper id="intro-eventi" title="Prossimi eventi" headingLevel="h2">
      {eventi.length > 0 ? (
        <div className="eventi-grid">
          {loading
            ? Array.from({ length: eventi.length }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : eventi.map((evento) => (
                <Card
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
                  <AppLink to={`/eventi/${evento.id}`} variant="button">
                    Vai ai dettagli
                  </AppLink>
                </Card>
              ))}
        </div>
      ) : (
        <EventsNotFound />
      )}
    </SectionWrapper>
  );
}
