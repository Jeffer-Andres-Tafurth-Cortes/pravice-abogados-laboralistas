"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./QuienesSomos.module.css";

const advantages = [
  {
    title: "Experiencia especializada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    title: "Acompañamiento personalizado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
  },
  {
    title: "Cobertura nacional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor.",
  },
  {
    title: "Resultados comprobados",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat.",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* 2️⃣ Abogados */}
      <div className={styles.team}>
        <h3>Nuestro equipo</h3>

        <div className={styles.teamGrid}>
          {[1, 2, 3].map((item) => (
            <div key={item} className={styles.card}>
              <div className={styles.photoPlaceholder} />
              <h4>Nombre del abogado</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className={styles.historyImage} />
      </div>
    </section>
  );
}
