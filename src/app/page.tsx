"use client";

import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faBriefcase,
  faFileContract,
  faHandshake,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import HomeNotice from "./components/HomeNotice";

export default function Home() {
  return (
    <main>
      <HomeNotice />
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Abogados laboralistas expertos en la defensa de
            <span> empresas y empleadores</span>
          </h1>

          <p>
            Brindamos asesoría legal especializada en derecho laboral y
            seguridad social, protegiendo los intereses de su empresa con
            soluciones estratégicas y efectivas.
          </p>

          <div className={styles.heroActions}>
            <Link href="/contacto" className={styles.primaryBtn}>
              Agenda una asesoría
            </Link>

            <Link href="/servicios" className={styles.secondaryBtn}>
              Conoce nuestros servicios
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICIOS
      ========================== */}
      <section className={styles.services}>
        <h2>Nuestros servicios</h2>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faBriefcase} />
            <h3>Asesoría laboral empresarial</h3>
            <p>
              Acompañamiento permanente en relaciones laborales, contratos,
              reglamentos internos y cumplimiento normativo.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faFileContract} />
            <h3>Contratación y desvinculación</h3>
            <p>
              Elaboración y revisión de contratos laborales, terminaciones,
              liquidaciones y acuerdos.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faScaleBalanced} />
            <h3>Defensa judicial</h3>
            <p>
              Representación en procesos judiciales laborales, demandas,
              conciliaciones y litigios.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faHandshake} />
            <h3>Conciliaciones y negociaciones</h3>
            <p>
              Estrategias preventivas para la solución de conflictos laborales y
              reducción de riesgos.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          POR QUÉ ELEGIRNOS
      ========================== */}
      <section className={styles.why}>
        <h2>¿Por qué elegirnos?</h2>

        <div className={styles.whyGrid}>
          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Especialistas en derecho laboral</span>
          </div>

          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Enfoque estratégico empresarial</span>
          </div>

          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Prevención de riesgos legales</span>
          </div>

          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Atención personalizada</span>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESO
      ========================== */}
      <section className={styles.process}>
        <h2>Nuestro proceso de trabajo</h2>

        <div className={styles.processSteps}>
          <div className={styles.step}>
            <span>1</span>
            <p>Análisis del caso y asesoría inicial</p>
          </div>

          <div className={styles.step}>
            <span>2</span>
            <p>Definición de estrategia legal</p>
          </div>

          <div className={styles.step}>
            <span>3</span>
            <p>Ejecución y acompañamiento continuo</p>
          </div>
        </div>
      </section>
    </main>
  );
}
