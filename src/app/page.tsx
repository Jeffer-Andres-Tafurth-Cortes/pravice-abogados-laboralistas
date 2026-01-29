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
            Abogados laboralistas en Colombia especializados en la defensa de
            <span> empresas y empleadores</span>
          </h1>

          <p>
            Somos una firma de abogados laboralistas con sede en Bogotá y
            cobertura en todo Colombia. Brindamos asesoría legal estratégica en
            derecho laboral y seguridad social, ayudando a empresas y
            empleadores a prevenir riesgos, resolver conflictos y tomar
            decisiones jurídicas seguras.
          </p>

          <div className={styles.heroActions}>
            <Link
              href="/contacto"
              className={styles.primaryBtn}
              target="_blank"
            >
              Agenda una asesoría laboral
            </Link>

            <Link href="/servicios" className={styles.secondaryBtn}>
              Servicios en derecho laboral
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICIOS
      ========================== */}
      <section className={styles.services}>
        <h2>Servicios de abogados laboralistas para empresas en Colombia</h2>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faBriefcase} />
            <h3>Asesoría laboral empresarial permanente</h3>
            <p>
              Brindamos asesoría jurídica continua a empresas y empleadores en
              Colombia, apoyando la correcta gestión de relaciones laborales,
              contratos de trabajo, reglamentos internos y el cumplimiento de la
              normativa laboral vigente.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faFileContract} />
            <h3>Contratación, desvinculación y liquidaciones</h3>
            <p>
              Elaboramos y revisamos contratos laborales, procesos de
              terminación, liquidaciones y acuerdos, garantizando seguridad
              jurídica y reducción de contingencias para las empresas.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faScaleBalanced} />
            <h3>Defensa judicial en procesos laborales</h3>
            <p>
              Representamos a empresas y empleadores en procesos judiciales
              laborales, demandas, conciliaciones y litigios ante las
              autoridades competentes, con enfoque estratégico y preventivo.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <FontAwesomeIcon icon={faHandshake} />
            <h3>Conciliaciones y negociación de conflictos laborales</h3>
            <p>
              Diseñamos estrategias de conciliación y negociación para la
              solución efectiva de conflictos laborales, minimizando riesgos
              legales y protegiendo los intereses empresariales.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
            POR QUÉ ELEGIRNOS
        ========================== */}
      <section className={styles.why}>
        <h2>¿Por qué elegir nuestros abogados laboralistas en Colombia?</h2>

        <div className={styles.whyGrid}>
          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>
              Especialistas en derecho laboral y seguridad social empresarial
            </span>
          </div>

          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Enfoque estratégico orientado a empresas y empleadores</span>
          </div>

          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>
              Prevención de riesgos legales y reducción de contingencias
              laborales
            </span>
          </div>

          <div className={styles.whyItem}>
            <FontAwesomeIcon icon={faCheckCircle} />
            <span>Atención personalizada con cobertura en todo Colombia</span>
          </div>
        </div>
      </section>

      {/* =========================
          PROCESO
      ========================== */}
      <section className={styles.process}>
        <h2>Nuestro proceso de asesoría y defensa laboral</h2>

        <div className={styles.processSteps}>
          <div className={styles.step}>
            <span>1</span>
            <p>
              Análisis jurídico del caso y asesoría laboral inicial
              personalizada
            </p>
          </div>

          <div className={styles.step}>
            <span>2</span>
            <p>
              Diseño de la estrategia legal laboral más adecuada para su empresa
              o caso
            </p>
          </div>

          <div className={styles.step}>
            <span>3</span>
            <p>
              Ejecución del proceso y acompañamiento jurídico continuo hasta su
              resolución
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
