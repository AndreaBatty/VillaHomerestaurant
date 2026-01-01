import AppLink from "../components/AppLink/AppLink";
import HeroStatic from "../components/HeroStatic/HeroStatic";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import { eventi } from "../lib/eventi";
import "./Eventi.css";
import EventiLsit from "./EventiList";


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