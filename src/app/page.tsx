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
import { motion } from "framer-motion";

export default function Home() {
  /* =========================
     VARIANTS
  ========================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <main>
      <HomeNotice />

      {/* =========================
          HERO
      ========================== */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp}>
            Abogados laboralistas en Colombia especializados en la defensa de
            <span> empresas y empleadores</span>
          </motion.h1>

          <motion.p variants={fadeUp}>
            Somos una firma de abogados laboralistas con sede en Bogotá y
            cobertura en todo Colombia. Brindamos asesoría legal estratégica en
            derecho laboral y seguridad social, ayudando a empresas y
            empleadores a prevenir riesgos, resolver conflictos y tomar
            decisiones jurídicas seguras.
          </motion.p>

          <motion.div className={styles.heroActions} variants={fadeUp}>
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
          </motion.div>
        </motion.div>
      </section>

      {/* =========================
          SERVICIOS
      ========================== */}
      <motion.section
        className={styles.services}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp}>
          Servicios de abogados laboralistas para empresas en Colombia
        </motion.h2>

        <motion.div className={styles.servicesGrid} variants={staggerContainer}>
          {[
            {
              icon: faBriefcase,
              title: "Asesoría laboral empresarial permanente",
              text: "Brindamos asesoría jurídica continua a empresas y empleadores en Colombia...",
            },
            {
              icon: faFileContract,
              title: "Contratación, desvinculación y liquidaciones",
              text: "Elaboramos y revisamos contratos laborales, procesos de terminación...",
            },
            {
              icon: faScaleBalanced,
              title: "Defensa judicial en procesos laborales",
              text: "Representamos a empresas y empleadores en procesos judiciales laborales...",
            },
            {
              icon: faHandshake,
              title: "Conciliaciones y negociación de conflictos laborales",
              text: "Diseñamos estrategias de conciliación y negociación...",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className={styles.serviceCard}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FontAwesomeIcon icon={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* =========================
            POR QUÉ ELEGIRNOS
        ========================== */}
      <motion.section
        className={styles.why}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp}>
          ¿Por qué elegir nuestros abogados laboralistas en Colombia?
        </motion.h2>

        <motion.div className={styles.whyGrid} variants={staggerContainer}>
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              className={styles.whyItem}
              variants={fadeUp}
              whileHover={{ x: 5 }}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>
                Asesoría laboral estratégica orientada a empresas, prevención de
                riesgos y cumplimiento normativo.
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* =========================
          PROCESO
      ========================== */}
      <motion.section
        className={styles.process}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp}>
          Nuestro proceso de asesoría y defensa laboral
        </motion.h2>

        <motion.div className={styles.processSteps} variants={staggerContainer}>
          {[1, 2, 3].map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <span>{step}</span>
              <p>
                {step === 1 &&
                  "Análisis jurídico del caso y asesoría inicial personalizada"}
                {step === 2 && "Diseño de la estrategia legal laboral adecuada"}
                {step === 3 &&
                  "Ejecución del proceso y acompañamiento continuo"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
