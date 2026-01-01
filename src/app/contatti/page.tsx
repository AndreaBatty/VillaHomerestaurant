import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import "./Contatti.css";

export default function Contatti() {
  return (
    <>
      {/* HERO INTRO */}
      <SectionWrapper id="Contattaci" title="Contattaci" align="center" headingLevel="h1">
        <p>
          Vieni a trovarci o contattaci per maggiori informazioni. Siamo sempre
          felici di accoglierti a <strong>Villa Tiziana</strong>.
        </p>
      </SectionWrapper>

      {/* INFO GENERALI */}

      <SectionWrapper
        id="Contattaci"
        title="Informazioni di contatto"
        align="center"
      >
        <ul className="info-list">
          <li>
            <strong>Indirizzo:</strong>
            <br />
            Via delle Terme 12, 20100 Milano (MI)
          </li>
          <li>
            <strong>Telefono:</strong>
            <br />
            <a href="tel:+390212345678" className="contact-link">
              +39 02 1234 5678
            </a>
          </li>
          <li>
            <strong>Email:</strong>
            <br />
            <a
              href="mailto:info@villatiziana.it"
              className="contact-link"
            >
              info@villaTiziana.it
            </a>
          </li>
          <li>
            <strong>Orari di apertura:</strong>
            <br />
            Lun–Dom 18:30–23:00 (solo su prenotazione)
          </li>
        </ul>
      </SectionWrapper>

      <SectionWrapper id="dove-siamo" title="Dove siamo" align="center">
        <div className="mappa-wrapper">
          {/* <iframe
            title="Mappa di Villa Tiziana"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.648883397697!2d9.189982315720054!3d45.46420397910173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDUuNDY0LC05LjE4OTk!5e0!3m2!1sit!2sit!4v1677777777777!5m2!1sit!2sit"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            title="Mappa di Villa Tiziana"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3767.3324959466227!2d12.392453901162968!3d41.99677886598546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f5cffbe3b442f%3A0x631128e6620a4ed0!2sThe%20Tam%20O&#39;%20Shanter!5e1!3m2!1sit!2sit!4v1766943001867!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
          ></iframe>
          <br />
        </div>
      </SectionWrapper>
    </>
  );
}
