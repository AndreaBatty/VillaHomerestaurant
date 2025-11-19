import "./EventoDettaglio.css";
import PageNotFound from "@/app/components/PageNotFound/PageNotFound";
import HeroStatic from "@/app/components/HeroStatic/HeroStatic";
import SectionWrapper from "@/app/components/SectionWrapper/SectionWrapper";
import AppLink from "@/app/components/AppLink/AppLink";
import { eventi } from "@/app/lib/eventi";


export default async function EventoDettaglio({ params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;

  const evento = eventi.find((e) => e.id === id);

  if (!evento) {
    return <PageNotFound />;
  }

  return (
    <main className="evento-dettaglio">
      {/* Hero immagine */}
      <HeroStatic
        title={evento.title}
        subtitle={evento.date}
        backgroundImage="/images/v1.webp"
        overlay="dark"
        align="center"
      />

      {/* Contenuto principale */}
      <SectionWrapper id="evento-info" title="Informazioni sull'evento">
        <p className="evento-desc">{evento.description}</p>
        <p>{evento.details}</p>

        <div className="evento-extra">
          <h3>Dove si svolge</h3>
          <p>{evento.location}</p>
        </div>
        <div className="button-wrapper">
          {/* <AppLink to="/eventi" variant="text">Torna agli eventi</AppLink> */}
          <AppLink to="/eventi" variant="button">Torna agli eventi</AppLink>
          {/* <AppLink to="/contatti" variant="text">Contattaci</AppLink> */}
          <AppLink to="/contatti" variant="button">Contattaci</AppLink>
        </div>
      </SectionWrapper>
    </main>
  );
}
