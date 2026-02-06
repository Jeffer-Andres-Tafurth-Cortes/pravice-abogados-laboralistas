"use client";

import Image from "next/image";
import styles from "./NovedadesLaborales.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NovedadesLaborales() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* =========================
     NOTICIA DESTACADA
  ========================= */
  const featuredNews = {
    tag: "Reforma laboral",
    title:
      "Reforma laboral 2025 en Colombia: cambios clave que impactan jornadas, recargos y contratación",
    description:
      "El Congreso de la República aprobó una reforma laboral que introduce ajustes progresivos en la jornada máxima semanal, incrementa los recargos nocturnos y dominicales, y redefine aspectos contractuales que afectan directamente la gestión de talento humano en las empresas. La normativa busca fortalecer la protección del trabajador, promover la formalización laboral y modificar esquemas tradicionales de contratación.",
    link: "https://www.reuters.com/world/americas/colombias-senate-approves-labor-reform-amid-tension-with-petro-2025-06-18/",
  };

  /* =========================
     LISTADO DE NOTICIAS
  ========================= */
  const news = [
    {
      date: "Enero 2026",
      title:
        "Afiliación obligatoria a la ARL para trabajadoras domésticas sin excepción",
      description:
        "El Ministerio del Trabajo reiteró la obligatoriedad de afiliar a las trabajadoras domésticas al Sistema de Seguridad Social y a la Administradora de Riesgos Laborales (ARL), independientemente del número de horas trabajadas. El incumplimiento puede generar sanciones económicas y responsabilidades legales para el empleador.",
      link: "https://www.infobae.com/colombia/2026/01/27/ley-en-colombia-exige-la-afiliacion-de-las-empleadas-domesticas-a-la-arl-sin-excepciones/",
    },
    {
      date: "Diciembre 2025",
      title:
        "Reducción progresiva de la jornada laboral a 42 horas semanales en Colombia",
      description:
        "La implementación gradual de la reducción de la jornada laboral obliga a las empresas a reorganizar turnos, revisar contratos vigentes y ajustar presupuestos de nómina. Este cambio normativo impacta directamente la estructura operativa y financiera de las organizaciones.",
      link: "https://cambiocolombia.com/economia/articulo/2025/6/lo-que-realmente-cambiara-en-su-empleo-con-la-nueva-ley-laboral-jornada-contratos/",
    },
    {
      date: "Noviembre 2025",
      title:
        "Cambios en prima de servicios y recargos tras la nueva reforma laboral",
      description:
        "Las modificaciones introducidas por la reforma laboral inciden en el cálculo de recargos y prestaciones sociales como la prima de servicios. Las empresas deben revisar sus procesos de liquidación y cumplimiento normativo para evitar contingencias legales.",
      link: "https://www.elcolombiano.com/negocios/prima-diciembre-2025-cambios-reforma-laboral-colombia-pagos-fechas-calculo-FA31464890",
    },
  ];

  /* =========================
     PREGUNTAS FRECUENTES (10)
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Novedades laborales en Colombia: cambios legales y tendencias</h2>
          <p>
            Análisis actualizado sobre reformas, decisiones judiciales y cambios
            normativos que impactan a empleadores y empresas en Colombia.
          </p>
        </motion.header>

        {/* NOTICIA DESTACADA */}
        <motion.article
          className={styles.featured}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.featuredImage}>
            <Image
              src="/fotoBogota.jpg"
              alt="Vista de Bogotá, Colombia"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.tag}>{featuredNews.tag}</span>
            <h3>{featuredNews.title}</h3>
            <p>{featuredNews.description}</p>
            <Link
              href={featuredNews.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              Ver noticia completa →
            </Link>
          </div>
        </motion.article>

        {/* LISTADO */}
        <div className={styles.list}>
          {news.map((item, i) => (
            <motion.article
              key={i}
              className={styles.item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <span className={styles.date}>{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                Leer noticia →
              </Link>
            </motion.article>
          ))}
        </div>

        {/* FAQ */}
        <section className={styles.faq}>
          <h3>Preguntas frecuentes sobre derecho laboral en Colombia</h3>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className={styles.faqItem}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={styles.faqQuestion}
                  >
                    {faq.question}
                    <span className={styles.icon}>{isOpen ? "–" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className={styles.faqAnswer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
