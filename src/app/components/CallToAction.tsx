import styles from "../styles/CallToAction.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className={styles.cta} aria-labelledby="cta-laboral">
      <h2 id="cta-laboral">
        Abogados laboralistas especializados en derecho laboral
      </h2>

      <p>
        Proteja su empresa y evite sanciones con el respaldo de abogados
        laboralistas expertos en contratos de trabajo, despidos, procesos
        disciplinarios y gestión de conflictos laborales.
      </p>

      <Link
        href="/contacto"
        className={styles.primaryBtn}
        aria-label="Solicitar asesoría con abogados laboralistas"
      >
        Solicitar asesoría legal
      </Link>
    </section>
  );
}
