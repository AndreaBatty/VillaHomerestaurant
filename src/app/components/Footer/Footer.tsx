import type { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="site-footer container" aria-labelledby="footer-heading">
      <div className="footer-inner">
        <h2 id="footer-heading" className="sr-only">
          Informazioni di contatto e social
        </h2>

        <address className="footer-address" translate="no">
          <strong>Villa Verde Agency</strong><br />
          Via delle Magnolie 42<br />
          50100 Firenze (FI), Italia
        </address>

        {/* Social */}
        <nav className="footer-social" aria-label="Social media">
          <ul>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita il nostro profilo Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.4 1.4.3.5.5 1.3.6 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.4 1.4-.5.3-1.3.5-2.5.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.4-1.4-.3-.5-.5-1.3-.6-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.4-1.4.5-.3 1.3-.5 2.5-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.4 3.8.7 3 .9 2.3 1.3 1.7 1.9 1.1 2.5.7 3.2.4 4 .1 4.8 0 5.8 0 7c0 1.3 0 1.7.1 5s0 3.7.1 5c.1 1.2.3 2.2.6 3 .3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.8.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.2-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.5-1.8.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.2-.3-2.2-.6-3-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.8-.5-3-.6C15.7 0 15.3 0 12 0z" />
                  <path d="M12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1zM18.4 4.6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita la nostra pagina Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24H12.8v-9.29H9.85v-3.63h2.95V8.41c0-2.93 1.79-4.53 4.41-4.53 1.25 0 2.33.09 2.64.13v3.06l-1.81.01c-1.42 0-1.7.67-1.7 1.66v2.17h3.4l-.44 3.63h-2.96V24h5.8A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
