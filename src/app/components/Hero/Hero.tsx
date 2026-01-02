import Carousel, { CarouselItem } from "../Carousel/Carousel";
import interno_1 from "@/assets/interno_1.webp";
import esterno_1 from "@/assets/esterno_1.webp";
import interno_2 from "@/assets/interno_2.webp";
import "./Hero.css";


const images: CarouselItem[] = [
  { image: interno_1, title: "Interno villa" },
  { image: esterno_1, title: "Esterno villa" },
  { image: interno_2, title: "Interno villa con camino" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Carousel data={images} />

      <div className="hero__content container">
        <h1 id="hero-heading">Benvenuti a Villa Tiziana</h1>
        <p>Cucina casalinga di stagione e del territorio.</p>
      </div>
    </section>
  );
}
