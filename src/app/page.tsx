import Hero from "./components/Hero/Hero";
import SectionWrapper from "./components/SectionWrapper/SectionWrapper";
import AppLink from "./components/AppLink/AppLink";
import CarouselProva from "./components/CarouselProva/CarouselProva";

  const images = [
    {
      
      image: "/images/piatto1.webp",
      title: "Piatto della casa",
      
    },
    {
      
      image: "/images/piatto2.webp",
      title: "Dettaglio gastronomico",
      
    },
    {
      
      image: "/images/piatto3.webp",
      title: "Dettaglio gastronomico",
      
    },
    {
      
      image: "/images/v1.webp",
      title: "Dettaglio gastronomico",
      
    },
  ];

export default function Home() {
  return (
    <>
      <Hero />
      
      <SectionWrapper id="chi-siamo" title="Chi siamo" align="center">
        <p>
          Siamo due amiche con la passione per la cucina e l’ospitalità. Da anni
          organizziamo cene per amici e familiari.
        </p>
      </SectionWrapper>

      <SectionWrapper id="cosa-offriamo" title="Cosa offriamo" align="center">
        <p>
          Offriamo un’esperienza culinaria autentica in un ambiente intimo e
          accogliente.
        </p>
      </SectionWrapper>

      <SectionWrapper id="esperienza" title="L'esperienza" align="center">
        <div className="section-flex">
          <div className="text">
            <p>
              Offriamo un’esperienza culinaria autentica in un ambiente intimo e
              accogliente.
            </p>
          </div>
          <CarouselProva  data={images} />
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="vieni-a-trovarci"
        title="Vieni a trovarci"
        align="center"
      >
        <p style={{marginBottom: '2rem'}}>
          Non perderti l&apos;occasione di provare questa esperienza, vieni a
          trovarci!
        </p>
        <AppLink variant="button" to={"/contatti"}>Prenota</AppLink>
      </SectionWrapper>
    </>
  );
}
