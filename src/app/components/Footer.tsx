"use client";

import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* ========================
              COLUMNA LOGO / DESCRIPCIÓN
          ========================= */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image
                src="/logo_pravice.png"
                alt="López & Asociados"
                width={80}
                height={80}
              />
            </div>

            <p className={styles.description}>
              Pravice Abogados es una firma dedicada a la práctica del derecho
              laboral y de la seguridad social con énfasis en la asesoría y
              representación de empresas.
            </p>

            <p className={styles.email}>
              <strong>Email</strong>
              <br />
              correo Pravice
            </p>
          </div>

          {/* ========================
              LINKS DE INTERÉS
          ========================= */}
          <div className={styles.column}>
            <h4>Links de interés</h4>
            <ul>
              <li>
                <Link href="/quienes_somos">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/novedades_laborales">Novedades Laborales</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* ========================
              CONTACTO BOGOTÁ
          ========================= */}
          <div className={styles.column}>
            <h4>Contacto</h4>
            <p>
              <strong>Bogotá, Colombia</strong>
              <br />
              Calle 98 # 22 - 45 Of. 716
              <br />
              Edificio calle 100
              <br />
              PBX
              <br />
              FAX
            </p>
          </div>
        </div>

        {/* ========================
            FOOTER BOTTOM
        ========================= */}
        <div className={styles.bottom}>
          <span>Copyright © {new Date().getFullYear()} Pravice Abogados</span>

          <Link href="/politica-datos" className={styles.policy}>
            Política de tratamiento de datos
          </Link>
        </div>
      </footer>

      {/* ========================
          REDES SOCIALES FLOTANTES
      ========================= */}
      <div className={styles.socialFloating}>
        <a
          href="https://wa.me/573001234567"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialBtn} ${styles.whatsapp}`}
          aria-label="WhatsApp de Pravice"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a
          href="https://www.instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialBtn} ${styles.instagram}`}
          aria-label="Instagram de Pravice"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.linkedin.com/company/tuempresa"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialBtn} ${styles.linkedin}`}
          aria-label="LinkedIn de Pravice"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </>
  );
}
