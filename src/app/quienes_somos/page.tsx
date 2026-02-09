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

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % advantages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Variantes reutilizables
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className={styles.container}>
      {/* 1️⃣ INTRO */}
      <motion.div
        className={styles.intro}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos una firma dedicada a la prestación de servicios jurídicos y de
          asesoría estratégica, orientada a brindar soluciones claras,
          responsables y alineadas con la normativa vigente en Colombia.
          Acompañamos a empresas y personas en la toma de decisiones legales,
          con un enfoque preventivo, técnico y humano.
        </p>
      </motion.div>

      {/* 2️⃣ EQUIPO */}
      <motion.div
        className={styles.team}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3>Nuestro equipo</h3>

        <div className={styles.teamGrid}>
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className={styles.card}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.photoPlaceholder} />
              <h4>Profesional del equipo</h4>
              <p>
                Integrante del equipo con experiencia en análisis jurídico,
                acompañamiento estratégico y gestión de procesos, enfocado en
                brindar soluciones eficientes y responsables a cada caso.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3️⃣ VENTAJAS (SLIDER) */}
      <motion.div
        className={styles.advantages}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>¿Por qué elegirnos?</h3>

        <div className={styles.sliderContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className={styles.sliderCard}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
            >
              <h4>{advantages[index].title}</h4>
              <p>{advantages[index].description}</p>
            </motion.div>
          </AnimatePresence>

          <div className={styles.dots}>
            {advantages.map((_, i) => (
              <motion.span
                key={i}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                animate={{ scale: i === index ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* 4️⃣ HISTORIA */}
      <motion.div
        className={styles.history}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.historyText}
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Nuestra historia</h3>
          <p>
            Nuestra firma nace con el propósito de ofrecer un servicio jurídico
            sólido, transparente y alineado con las necesidades actuales de
            empresas y personas en Colombia.
          </p>

          <p>
            Hemos consolidado una metodología basada en la confianza, el
            análisis riguroso y el acompañamiento permanente, priorizando la
            protección de los intereses de nuestros clientes.
          </p>
        </motion.div>

        <motion.div
          className={styles.historyImage}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src="/logo_pravice.png"
            alt="Equipo jurídico de Pravice Abogados en Colombia"
            fill
            className={styles.historyImg}
            sizes="(max-width: 900px) 100vw, 50vw"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
