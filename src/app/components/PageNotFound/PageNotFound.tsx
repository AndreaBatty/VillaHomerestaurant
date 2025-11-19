"use client"

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import "./PageNotFound.css";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <section id="not-found" className="pagenotfound-wrapper">
      <div className="pagenotfound-content">
        <h2 className="pagenotfound-title">Evento non trovato</h2>

        <div className="pagenotfound-content">
          <p style={{marginBottom: '2rem'}}>L&apos;evento che stai cercando non esiste o è stato rimosso</p>
          <Button variant="outline" onClick={() => router.back()}>
            Torna agli eventi
          </Button>
        </div>
      </div>
    </section>
  );
}
