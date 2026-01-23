"use client";

import styles from "./Contacto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contacto() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ======================
            HEADER
        ====================== */}
        <header className={styles.header}>
          <h2>Contáctenos</h2>
          <p>
            Nuestro equipo de abogados laboralistas está listo para brindarle
            asesoría clara, estratégica y oportuna.
          </p>
        </header>

        {/* ======================
            CONTACTO DIRECTO
        ====================== */}
        <div className={styles.actions}>
          <a
            href="https://api.whatsapp.com/send?phone=573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Contactar por WhatsApp
          </a>

          <a href="mailto:contacto@tudominio.com" className={styles.emailBtn}>
            <FontAwesomeIcon icon={faEnvelope} />
            Enviar correo electrónico
          </a>
        </div>

        {/* ======================
            MAPA
        ====================== */}
        <div className={styles.mapSection}>
          <h3>Nuestra oficina</h3>

          <div className={styles.mapWrapper}>
            {/* Google Maps – Reemplaza la URL luego */}
            <iframe
              title="Ubicación oficina Pravice"
              src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
