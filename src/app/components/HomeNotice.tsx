"use client";

import { useEffect, useState } from "react";
import styles from "../styles/HomeNotice.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function HomeNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem("home_notice_closed");
    if (!closed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("home_notice_closed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.notice}>
        <button className={styles.close} onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* ========= IMAGEN / PLACEHOLDER ========= */}
        <div className={styles.imagePlaceholder}>
          {/* 
            Cuando tengas la imagen:
            <img src="/img/aviso.jpg" alt="Aviso legal" />
            o con next/image
          */}
        </div>

        <h3>Aviso importante</h3>
        <p>¿Quieres cumplir con la reforma laboral YA?</p>

        <Link
          href="https://pravicestore-pagina-web.vercel.app/"
          className={styles.actionBtn}
        >
          COMPRA AQUÍ
        </Link>
      </div>
    </div>
  );
}
