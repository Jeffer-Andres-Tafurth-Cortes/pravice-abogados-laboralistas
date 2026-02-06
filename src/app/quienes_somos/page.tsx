"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./QuienesSomos.module.css";
import Image from "next/image";

const advantages = [
  {
    title: "Experiencia y enfoque especializado",
    description:
      "Contamos con un enfoque técnico y estratégico enfocado en la gestión jurídica y la toma de decisiones informadas. Analizamos cada caso de manera integral, evaluando riesgos, alternativas y consecuencias legales, con el objetivo de ofrecer soluciones claras, bien fundamentadas y alineadas con la normativa vigente en Colombia.",
  },
  {
    title: "Acompañamiento cercano y personalizado",
    description:
      "Brindamos un acompañamiento permanente y personalizado durante todas las etapas del proceso jurídico. Mantenemos una comunicación clara y constante con nuestros clientes, explicando cada actuación y recomendación de forma comprensible, para que puedan tomar decisiones con tranquilidad y respaldo profesional.",
  },
  {
    title: "Cobertura en todo Colombia",
    description:
      "Prestamos nuestros servicios jurídicos a nivel nacional, combinando atención remota eficiente con presencia institucional. Esto nos permite asesorar a empresas y personas en cualquier ciudad del país, garantizando accesibilidad, agilidad en los trámites y un servicio oportuno sin barreras geográficas.",
  },
  {
    title: "Compromiso con resultados",
    description:
      "Nuestro trabajo está orientado a la obtención de resultados concretos y sostenibles. Priorizamos la prevención de riesgos legales, la optimización de los procesos y la correcta aplicación de la ley, buscando siempre proteger los intereses de nuestros clientes y aportar valor real a cada decisión jurídica.",
  },
];

export default function QuienesSomos() {
  const [index, setIndex] = useState(0);

  // ⏱ Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % advantages.length);
    }, 8000);

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
            sólido, transparente y alineado con las necesidades actuales de
            empresas y personas en Colombia. Desde nuestros inicios, hemos
            trabajado bajo un enfoque técnico, preventivo y estratégico,
            orientado a la correcta toma de decisiones legales.
          </p>

          <p>
            A lo largo de nuestra trayectoria, hemos consolidado una forma de
            trabajo basada en la confianza, el análisis riguroso de cada caso y
            el acompañamiento permanente de nuestros clientes, priorizando la
            protección de sus intereses y el cumplimiento de la normativa
            vigente.
          </p>
        </div>

        <div className={styles.historyImage}>
          <Image
            src="/logo_pravice.png"
            alt="Equipo jurídico de Pravice Abogados en Colombia"
            fill
            className={styles.historyImg}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
