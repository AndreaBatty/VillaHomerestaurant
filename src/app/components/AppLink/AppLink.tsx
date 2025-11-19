
import Link from "next/link";
import "./AppLink.css";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type AppLinkVariant = "text" | "button" | "underline" | "nav";


interface IAppLink extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children: ReactNode;
  variant?: AppLinkVariant;
  external?: boolean;
}

export default function AppLink({
  to,
  children,
  variant = "text", // text | button | underline | nav
  external = false,
  ...props
}: IAppLink) {
  const className = `app-link app-link--${variant}`;

  if (external) {
    return (
      <Link
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={to} className={className} {...props}>
      {children}
    </Link>
  );
}
