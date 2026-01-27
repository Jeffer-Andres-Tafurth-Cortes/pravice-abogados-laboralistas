"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./QuienesSomos.module.css";

const advantages = [
  {
    title: "Experiencia y enfoque especializado",
    description:
      "Contamos con un enfoque técnico y estratégico que nos permite analizar cada situación de forma integral, brindando soluciones jurídicas claras y bien fundamentadas.",
  },
  {
    title: "Acompañamiento cercano y personalizado",
    description:
      "Acompañamos a nuestros clientes en cada etapa del proceso, ofreciendo comunicación constante, claridad en la información y atención personalizada.",
  },
  {
    title: "Cobertura en todo Colombia",
    description:
      "Prestamos nuestros servicios a nivel nacional, con atención remota y oficina principal en Bogotá, facilitando el acceso a asesoría jurídica desde cualquier ciudad.",
  },
  {
    title: "Compromiso con resultados",
    description:
      "Trabajamos con un enfoque orientado a resultados, priorizando la prevención de riesgos, la eficiencia en los procesos y la toma de decisiones informadas.",
  },
];

export default function QuienesSomos() {
  const [index, setIndex] = useState(0);

  // ⏱ Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % advantages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      {/* 1️⃣ Descripción general */}
      <div className={styles.intro}>
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una firma dedicada a la prestación de servicios jurídicos y de
          asesoría estratégica, orientada a brindar soluciones claras,
          responsables y alineadas con la normativa vigente en Colombia.
          Acompañamos a empresas y personas en la toma de decisiones legales,
          con un enfoque preventivo, técnico y humano.
        </p>
      </div>

      {/* 2️⃣ Abogados */}
      <div className={styles.team}>
        <h3>Nuestro equipo</h3>

        <div className={styles.teamGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.card}>
              <div className={styles.photoPlaceholder} />
              <h4>Profesional del equipo</h4>
              <p>
                Integrante del equipo con experiencia en análisis jurídico,
                acompañamiento estratégico y gestión de procesos, enfocado en
                brindar soluciones eficientes y responsables a cada caso.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3️⃣ Ventajas (slider automático) */}
      <div className={styles.advantages}>
        <h3>¿Por qué elegirnos?</h3>

        <div className={styles.sliderContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.sliderCard}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4>{advantages[index].title}</h4>
              <p>{advantages[index].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {advantages.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4️⃣ Historia */}
      <div className={styles.history}>
        <div className={styles.historyText}>
          <h3>Nuestra historia</h3>
          <p>
            Nuestra firma nace con el propósito de ofrecer un servicio jurídico
            moderno, transparente y accesible, adaptado a las necesidades
            actuales de empresas y organizaciones en Colombia. A lo largo del
            tiempo hemos consolidado una forma de trabajo basada en la
            confianza, el análisis riguroso y el acompañamiento permanente.
          </p>
        </div>

        <div className={styles.historyImage} />
      </div>
    </section>
  );
}
