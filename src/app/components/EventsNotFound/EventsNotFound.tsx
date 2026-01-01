"use client"

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import "./EventsNotFound.css";

export default function EventsNotFound() {
  const router = useRouter();

  return (
    
      <div className="eventsnotfound-content">
        <h2 className="eventsnotfound-title">Nessun evento trovato</h2>

        <div className="eventsnotfound-content">
          <p style={{marginBottom: '2rem'}}>Non ci sono eventi al momento. Tieni sotto controllo il sito per avere aggiornamenti e consulta la pagina dei contatti per ulteriori informazioni.</p>
        </div>
      </div>
    
  );
}
