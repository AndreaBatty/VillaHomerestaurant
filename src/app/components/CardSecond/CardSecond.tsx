import React from "react";
import Image, { StaticImageData } from "next/image";
import "./CardSecond.css";

interface CardSecondProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const CardSecond: React.FC<CardSecondProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardSecond;
