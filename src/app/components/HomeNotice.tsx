"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HomeNotice.module.css";
import { useEffect, useState } from "react";
import { faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function HomeNotice() {
  const [visible, setVisible] = useState(true);

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

  if (visible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.notice}>
        <button className={styles.close} onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
        <h3>AVISO IMPORTANTE</h3>
        <p>Quieres cumplir con la reforma laboral YA</p>
        <Link href="/aviso-legal" className={styles.actionBtn}>
          COMPRA AQUI
        </Link>
      </div>
    </div>
  );
}
