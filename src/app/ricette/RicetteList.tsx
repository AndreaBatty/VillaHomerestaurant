"use client";

import { useRef, useState, useEffect } from "react";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import Card from "../components/Card/Card";
import Dialog from "../components/Dialog/Dialog";
import { StaticImageData } from "next/image";
import CardProva from "../components/CardProva/CardProva";

// Tipi dei piatti (adatta ai tuoi dati reali)
export interface Dish {
  id: number | string;
  title: string;
  description: string;
  image: string | StaticImageData;
  ingredients: string[];
}

interface IRicetteListProps {
  dishes: Dish[];
}

export default function RicetteList({ dishes }: IRicetteListProps) {
  const [selectedId, setSelectedId] = useState<number | string | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Ref tipizzato correttamente
  const refDialog = useRef<HTMLDialogElement | null>(null);

  // Trova il piatto selezionato
  const selectedDish = dishes.find((dish) => dish.id === selectedId);

  // Controllo apertura modale
  useEffect(() => {
    const dialog = refDialog.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Simula caricamento iniziale
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenDialog = (id: number | string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <SectionWrapper
        id="piatti"
        title="I piatti di questa stagione"
        align="center"
      >
        {/* <div className="piatti-grid">
          {loading
            ? Array.from({ length: dishes.length }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : dishes.map((dish) => (
                <Card
                  onClick={() => handleOpenDialog(dish.id)}
                  key={dish.id}
                  role="button"
                  tabIndex={0}
                  title={dish.title}
                  description={dish.description}
                  image={dish.image}
                  variant="ricetta"
                />
              ))}
        </div> */}


        <div className="piatti-grid">
          {loading
            ? Array.from({ length: dishes.length }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            : dishes.map((dish) => (
                <CardProva
                  onClick={() => handleOpenDialog(dish.id)}
                  key={dish.id}
                  role="button"
                  tabIndex={0}
                  title={dish.title}
                  description={dish.description}
                  image={dish.image}
                  
                />
              ))}
        </div>


      </SectionWrapper>

      {selectedDish && (
        <Dialog
          ref={refDialog}
          onClose={handleCloseDialog}
          title={selectedDish.title}
        >
          <p style={{marginBottom: '0.5rem'}}>{selectedDish.description}</p>

          <h4>Ingredienti:</h4>
          <ul>
            {selectedDish.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Dialog>
      )}
    </>
  );
}
