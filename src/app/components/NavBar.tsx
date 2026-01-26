"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const handleClick = () => {
  window.open("", "_blank");
};

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${styles.scrolled}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <nav className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={`${styles.logo} ${styles.dark}`}>
          <Image
            src="/logo_pravice.png"
            alt="Logo Pravice"
            width={75}
            height={75}
            priority
          />
        </Link>

        {/* MENÚ DESKTOP / MOBILE */}
        <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/quienes_somos" onClick={() => setMenuOpen(false)}>
              ¿QUIENES SOMOS?
            </Link>
          </li>
          <li>
            <Link href="/servicios" onClick={() => setMenuOpen(false)}>
              SERVICIOS
            </Link>
          </li>
          <li>
            <Link
              href="/novedades_laborales"
              onClick={() => setMenuOpen(false)}
            >
              NOVEDADES LABORALES
            </Link>
          </li>
          <li>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              CONTACTO
            </Link>
          </li>
          <li>
            <button className={styles.ctaButton} onClick={handleClick}>
              SOLICITA ASESORÍA LABORAL
            </button>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
