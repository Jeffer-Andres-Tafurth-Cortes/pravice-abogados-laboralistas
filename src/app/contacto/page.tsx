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
          <h2>Contacto con abogados laboralistas en Colombia</h2>
          <p>
            En Pravice Abogados brindamos asesoría legal especializada en
            derecho laboral y seguridad social para empresas y empleadores en
            toda Colombia, con atención directa desde nuestra oficina en Bogotá.
          </p>
        </header>

        {/* ======================
            CONTACTO DIRECTO
        ====================== */}
        <div className={styles.actions}>
          <a
            href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Contactar abogados laboralistas por WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Asesoría laboral inmediata por WhatsApp
          </a>

          <a
            href="mailto:contacto@tudominio.com"
            className={styles.emailBtn}
            aria-label="Enviar correo a abogados laboralistas en Bogotá"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Solicitar asesoría legal por correo
          </a>
        </div>

        {/* ======================
            MAPA
        ====================== */}
        <div className={styles.mapSection}>
          <h3>Oficina de abogados laboralistas en Bogotá</h3>

          <p className={styles.mapDescription}>
            Nuestra firma cuenta con oficina física en Bogotá, desde donde
            atendemos procesos laborales, asesorías empresariales y consultas
            legales para clientes en toda Colombia.
          </p>

          <div className={styles.mapWrapper}>
            <iframe
              title="Ubicación oficina de abogados laboralistas en Bogotá - Pravice Abogados"
              src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
