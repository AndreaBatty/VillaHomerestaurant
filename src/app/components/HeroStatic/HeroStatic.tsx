import Image from "next/image";
import "./HeroStatic.css";

interface IHerostatic {
  title: string;
  subtitle: string;
  backgroundImage: string;
  overlay: string;
  align: string;
  height?: string;
}

export default function HeroStatic({
  title,
  subtitle,
  backgroundImage = "",
  overlay = "dark",
  align = "center",
  height = "60vh",
}: IHerostatic) {
  return (
    <section
      className={`hero-static hero-static--${align}`}
      aria-labelledby="hero-title"
      style={{
        height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🔥 LCP image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority                  // <-- IMPORTANTISSIMO
        fetchPriority="high"      // <-- per Lighthouse
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      {/* Overlay */}
      {overlay !== "none" && (
        <div className={`hero-static__overlay hero-static__overlay--${overlay}`} />
      )}

      <div className="hero-static__content container">
        <h1 id="hero-title" className="hero-static__title">
          {title}
        </h1>
        {subtitle && <p className="hero-static__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
