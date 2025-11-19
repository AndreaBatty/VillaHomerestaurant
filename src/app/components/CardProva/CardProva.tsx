import { ReactNode, KeyboardEvent } from "react";
import "./CardProva.css";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface ICardProvaProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string | ReactNode;
  image: string | StaticImageData;
}

export default function CardProva({
  title,
  description,
  image,
  onClick,
  children,
  ...rest
}: ICardProvaProps) {
  // Tastiera attiva SOLO se la card è interattiva (cioè se onClick è presente)
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      // trigger del click nativo sul div
      (e.currentTarget as HTMLDivElement).click();
    }
  };

  return (
    <>
      <div
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="card"
        {...rest}
      >
        <Image
          className="card-img-top"
          alt="100%x180"
          src={typeof image === "string" ? image : image.src}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            height: "180px",
            width: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
        
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
         {children && <div className="card-footer">{children}</div>}
      </div>
      {/* <div
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="card"
        {...rest}
      >
        <div className="card-img-wrapper">
          <Image
            src={typeof image === "string" ? image : image.src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>

        {children && <div className="card-footer">{children}</div>}
      </div> */}
    </>
  );
}
