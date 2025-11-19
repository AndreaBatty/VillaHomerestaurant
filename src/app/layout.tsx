import "@/app/components/Navbar/Navbar.css";
import "@/app/components/Footer/Footer.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Villa Homerestaurant",
  description: "Cena casalinga in un ambiente intimo e accogliente. Scopri il nostro home restaurant con cucina genuina, piatti stagionali e atmosfera familiare.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link
          rel="icon"
          href="/logo.png"
          type="image/png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png?ebbb82dc3cc1b5eb"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body>
        {/* Skip link */}
        <a href="#main-content" className="skip-link">
          Salta al contenuto principale
        </a>

        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
