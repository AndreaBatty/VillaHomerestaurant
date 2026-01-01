import Carousel, { CarouselItem } from "../Carousel/Carousel";
import v1 from "@/assets/v1.webp";
import v2 from "@/assets/v2.webp";
import v3 from "@/assets/v3.webp";
import "./Hero.css";


const images: CarouselItem[] = [
  { image: v1, title: "Villa estiva" },
  { image: v2, title: "Giardino serale" },
  { image: v3, title: "Cena all’aperto" },
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
