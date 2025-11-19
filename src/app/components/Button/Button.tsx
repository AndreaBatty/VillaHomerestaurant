import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  ariaLabel,
  className,
  ...props
}: IButtonProps) {

  const baseClassName = `btn btn--${variant} btn--${size}`;
  const mergedClassName = [baseClassName, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={mergedClassName }
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
