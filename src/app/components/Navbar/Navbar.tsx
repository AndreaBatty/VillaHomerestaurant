"use client";

import { useEffect, useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/logo.png";

interface NavLink {
  to: string;
  label: string;
}

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/eventi", label: "Eventi" },
  { to: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
  const handleClickOutside = (event: Event) => {
    if (!menuRef.current) return; // evita accessi dopo unmount
    if (event.target instanceof Node && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("pointerdown", handleClickOutside);

  return () => {
    document.removeEventListener("pointerdown", handleClickOutside);
  };
}, []);

  return (
    <header>
      <nav className="navbar container" aria-label="Main navigation">
        <div className="brand" tabIndex={0}>
          <Link href="/" onClick={handleClose}>
            <Image
              src={logo}
              alt="Villa Tiziana"
              style={{ width: "60px", height: "60px" }}
            />
          </Link>
          <Link href="/" className="logo" onClick={handleClose}>
            Villa Tiziana
          </Link>
        </div>

        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          onClick={handleToggle}
          aria-label="Apri o chiudi il menu di navigazione"
        >
          <span className="sr-only">Toggle menu</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* MENU DESKTOP */}

        <ul id="nav-links" className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link href={link.to} onClick={handleClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* OVERLAY MOBILE */}
        {isOpen && (
          <div className="mobile-overlay visible" onClick={handleClose} />
        )}

        {/* MENU MOBILE DRAWER */}
        <ul
          id="nav-drawer"
          className={`mobile-drawer ${isOpen ? "open" : ""}`}
          ref={menuRef}
        >
          {links.map((link) => (
            <li key={link.to}>
              <Link href={link.to} onClick={handleClose}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
