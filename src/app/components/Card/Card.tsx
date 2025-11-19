import { ReactNode, KeyboardEvent } from "react";
import "./Card.css";
import { StaticImageData } from "next/image";

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string | ReactNode;
  image: string | StaticImageData;
}

export default function Card({
  title,
  description,
  image,
  onClick,
  children,
  ...rest
}: ICardProps) {

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
    <div
      className="card"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...rest}  // ruolo, aria, tabIndex, ecc.
    >
      <img
        src={typeof image === "string" ? image : image.src}
        className="card-img-top"
        alt={title}
      />

      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {children && <div className="card-footer">{children}</div>}
    </div>
  );
}
