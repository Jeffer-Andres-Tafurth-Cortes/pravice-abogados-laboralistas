"use client";

import Image from "next/image";
import styles from "./NovedadesLaborales.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NovedadesLaborales() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* =========================
     VARIANTS
  ========================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* =========================
     NOTICIA DESTACADA
  ========================= */

  const featuredNews = {
    tag: "Reforma laboral",
    title:
      "Reforma laboral 2025 en Colombia: cambios clave que impactan jornadas, recargos y contratación",
    description:
      "El Congreso de la República aprobó una reforma laboral que introduce ajustes progresivos en la jornada máxima semanal, incrementa los recargos nocturnos y dominicales, y redefine aspectos contractuales que afectan directamente la gestión de talento humano en las empresas.",
    link: "https://www.reuters.com/world/americas/colombias-senate-approves-labor-reform-amid-tension-with-petro-2025-06-18/",
  };

  /* =========================
     LISTADO
  ========================= */

  const news = [
    {
      date: "Enero 2026",
      title:
        "Afiliación obligatoria a la ARL para trabajadoras domésticas sin excepción",
      description:
        "El Ministerio del Trabajo reiteró la obligatoriedad de afiliar a las trabajadoras domésticas al Sistema de Seguridad Social y a la ARL.",
      link: "https://www.infobae.com/colombia/2026/01/27/ley-en-colombia-exige-la-afiliacion-de-las-empleadas-domesticas-a-la-arl-sin-excepciones/",
    },
    {
      date: "Diciembre 2025",
      title:
        "Reducción progresiva de la jornada laboral a 42 horas semanales en Colombia",
      description:
        "La reducción de la jornada laboral obliga a reorganizar turnos y ajustar presupuestos de nómina.",
      link: "https://cambiocolombia.com/economia/articulo/2025/6/lo-que-realmente-cambiara-en-su-empleo-con-la-nueva-ley-laboral-jornada-contratos/",
    },
    {
      date: "Noviembre 2025",
      title:
        "Cambios en prima de servicios y recargos tras la nueva reforma laboral",
      description:
        "Las modificaciones inciden en el cálculo de recargos y prestaciones sociales.",
      link: "https://www.elcolombiano.com/negocios/prima-diciembre-2025-cambios-reforma-laboral-colombia-pagos-fechas-calculo-FA31464890",
    },
  ];

  /* =========================
     FAQ
  ========================= */
  const faqs = [
    {
      question:
        "¿Cuáles son los principales cambios de la reforma laboral 2025 en Colombia?",
      answer:
        "La reforma laboral introduce ajustes en jornada máxima semanal, incrementa progresivamente los recargos nocturnos y dominicales, fortalece la estabilidad laboral y redefine algunos esquemas de contratación.",
    },
    {
      question: "¿Es obligatorio afiliar a trabajadoras domésticas a la ARL?",
      answer:
        "Sí. Todos los empleadores deben afiliar a las trabajadoras domésticas al sistema de seguridad social y a la ARL sin importar la jornada laboral.",
    },
    {
      question:
        "¿Cómo afecta la reducción de la jornada laboral a las empresas?",
      answer:
        "Obliga a reorganizar turnos, revisar contratos y ajustar costos de nómina para cumplir con la normativa vigente.",
    },
    {
      question:
        "¿Cuándo es recomendable contratar un abogado laboralista empresarial?",
      answer:
        "Antes de despidos, cambios contractuales, procesos disciplinarios o inspecciones del Ministerio del Trabajo.",
    },
    {
      question: "¿Qué sanciones puede imponer el Ministerio del Trabajo?",
      answer:
        "Multas económicas, investigaciones administrativas y órdenes de reintegro laboral.",
    },
    {
      question:
        "¿Qué debe revisar una empresa antes de despedir a un trabajador?",
      answer:
        "Tipo de contrato, estabilidad laboral reforzada, cumplimiento del debido proceso y correcta liquidación.",
    },
    {
      question: "¿Cómo se calculan los recargos nocturnos y dominicales?",
      answer:
        "Aplicando los porcentajes establecidos por la ley sobre el valor ordinario de la hora trabajada.",
    },
    {
      question: "¿Qué es la estabilidad laboral reforzada?",
      answer:
        "Es una protección especial que impide el despido sin autorización previa en casos como embarazo, discapacidad o fuero sindical.",
    },
    {
      question: "¿Qué riesgos legales enfrenta una empresa por incumplimiento?",
      answer:
        "Demandas laborales, sanciones administrativas, indemnizaciones y afectación reputacional.",
    },
    {
      question: "¿Cómo prevenir contingencias laborales en una empresa?",
      answer:
        "Mediante auditorías internas, actualización contractual y asesoría jurídica preventiva permanente.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Novedades laborales en Colombia</h2>
          <p>
            Reformas, decisiones judiciales y cambios normativos que impactan a
            empresas y empleadores.
          </p>
        </motion.header>

        {/* NOTICIA DESTACADA */}
        <motion.article
          className={styles.featured}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
        >
          <motion.div
            className={styles.featuredImage}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/fotoBogota.jpg"
              alt="Vista de Bogotá, Colombia"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <div className={styles.featuredContent}>
            <span className={styles.tag}>{featuredNews.tag}</span>
            <h3>{featuredNews.title}</h3>
            <p>{featuredNews.description}</p>

            <motion.div whileHover={{ x: 4 }}>
              <Link
                href={featuredNews.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readMore}
              >
                Ver noticia completa →
              </Link>
            </motion.div>
          </div>
        </motion.article>

        {/* LISTADO CON STAGGER */}
        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {news.map((item, i) => (
            <motion.article
              key={i}
              className={styles.item}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <span className={styles.date}>{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>

              <motion.div whileHover={{ x: 4 }}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer noticia →
                </Link>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.section
          className={styles.faq}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Preguntas frecuentes</h3>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div key={index} className={styles.faqItem} layout>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={styles.faqQuestion}
                  >
                    {faq.question}

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className={styles.faqAnswer}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
