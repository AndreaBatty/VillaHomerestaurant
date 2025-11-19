import { ReactNode, CSSProperties, ElementType } from "react";
import "./SectionWrapper.css";

/* type Variant = "light" | "dark" | "image";
type Align = "left" | "center" | "right"; */
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ISectionWrapperProps {
  id?: string;
  title?: string;
  headingLevel?: HeadingLevel;
  color?: string;
  variant?: string;
  backgroundImage?: string;
  children?: ReactNode;
  align?: string;
  style?: CSSProperties;
  hasBorder?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  headingLevel = "h2",
  color,
  variant = "light",
  backgroundImage,
  children,
  align = "left",
  style,
}: ISectionWrapperProps) {
  const HeadingTag: HeadingLevel = headingLevel;

  const sectionClasses = [
    "section-wrapper",
    `variant-${variant}`,
    align !== "left" ? `align-${align}` : "",
  ].join(" ");

  const inlineStyle: CSSProperties =
    variant === "image" && backgroundImage
      ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {};

  return (
    <section
      id={id}
      className={sectionClasses}
      aria-labelledby={title ? `${id}-title` : undefined}
      style={inlineStyle}
    >
      <div className="section-inner">
        {title && (
          <HeadingTag
            id={id ? `${id}-title` : undefined}
            className="section-title"
            style={color ? { color, borderColor: color } : undefined}
          >
            {title}
          </HeadingTag>
        )}

        <div className="section-content" style={style}>
          {children}
        </div>
      </div>
    </section>
  );
}
