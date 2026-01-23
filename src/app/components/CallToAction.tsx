import styles from "../styles/CallToAction.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <>
      {/* =========================
          CTA FINAL
      ========================== */}
      <section className={styles.cta}>
        <h2>Proteja su empresa con asesoría legal experta</h2>
        <p>
          Contáctenos hoy y reciba una orientación inicial con nuestros abogados
          laboralistas.
        </p>

        <Link href="/contacto" className={styles.primaryBtn}>
          Solicitar asesoría
        </Link>
      </section>
    </>
  );
}
