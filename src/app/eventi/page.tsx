import AppLink from "../components/AppLink/AppLink";
import HeroStatic from "../components/HeroStatic/HeroStatic";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import "./Eventi.css";

import EventiLsit from "./EventiList";

const eventi = [
    {
      id: 1,
      title: "Cena sotto le stelle",
      date: "15 Luglio 2025",
      description:
        "Una serata estiva all'aperto con menù degustazione a base di prodotti locali e musica dal vivo.",
      image: "/images/piatto1.webp",
    },
    {
      id: 2,
      title: "Degustazione vini d'autunno",
      date: "10 Ottobre 2025",
      description:
        "Scopri i sapori della stagione con una selezione di vini regionali accompagnati da finger food e formaggi.",
      image: "/images/piatto2.webp",
    },
    {
      id: 3,
      title: "Cena di Natale in villa",
      date: "24 Dicembre 2025",
      description:
        "Un menù speciale per la vigilia, con piatti della tradizione e un’atmosfera calda e familiare.",
      image: "/images/piatto3.webp",
    },
  ];

export default function Eventi() {
  


  return (
    <>
      {/* HERO */}
      <HeroStatic
        title="Eventi Speciali"
        subtitle="Cene a tema, degustazioni e serate musicali nella nostra villa."
        backgroundImage="/images/v1.webp"
        overlay="dark"
        align="center"
      />

      {/* INTRO */}
      <SectionWrapper
        id="intro-eventi"
        title="Un’esperienza da vivere"
        headingLevel="h2"
      >
        <p>
          A <strong>Villa Tiziana</strong> organizziamo eventi unici,
          pensati per chi ama il buon cibo e la convivialità. Ogni serata ha un
          tema, un menù dedicato e una storia da raccontare.
        </p>
      </SectionWrapper>

      {/* INFO */}
      <SectionWrapper
        id="prenotazioni"
        title="Prenotazioni e informazioni"
        headingLevel="h2"
        hasBorder={false}
      >
        <p>
          Per partecipare ai nostri eventi, è richiesta la prenotazione. I posti
          sono limitati per garantire un’esperienza autentica e curata nei
          dettagli.
        </p>
        <AppLink variant="text" to={"/contatti"}>Vai ai contatti</AppLink>
        
      </SectionWrapper>

      {/* LISTA EVENTI */}

      <EventiLsit eventi={eventi} />
    </>
  );
}
