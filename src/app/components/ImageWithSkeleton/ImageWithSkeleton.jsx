import { useState } from "react";
import "./ImageWithSkeleton.css";

export default function ImageWithSkeleton({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`image-wrapper ${className || ""}`}>
      {!loaded && <div className="image-skeleton" aria-hidden="true"></div>}
      <img
        src={src}
        alt={alt}
        className={`image ${loaded ? "visible" : "hidden"}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
}
