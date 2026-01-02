import "./Ricette.css";
import RicetteList from "./RicetteList";
import HeroStatic from "../components/HeroStatic/HeroStatic";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import { ricette } from "../lib/ricette";

export default function Ricette() {
  
  return (
    <>
      <HeroStatic
        title="Le nostre ricette"
        subtitle="Piatti genuini preparati con ingredienti locali e passione casalinga."
        backgroundImage="/images/interno_1.webp"
        overlay="dark"
        align="center"
      />

      <SectionWrapper
        id="menu-stagionale"
        title="Menù stagionale"
        align="center"
      >
        <p>
          Il nostro menù cambia con le stagioni per valorizzare i migliori
          ingredienti locali del momento. Ogni piatto nasce da un equilibrio tra
          tradizione e creatività, offrendo un’esperienza sempre diversa ma dal
          gusto autentico.
        </p>
      </SectionWrapper>

      <RicetteList dishes={ricette} />
    </>
  );
}
