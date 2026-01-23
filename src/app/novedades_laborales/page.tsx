"use client";

import styles from "./NovedadesLaborales.module.css";
import Link from "next/link";

export default function NovedadesLaborales() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ======================
            HEADER
        ====================== */}
        <header className={styles.header}>
          <h2>Novedades laborales en Colombia</h2>
          <p>
            Manténgase actualizado con los cambios normativos, sentencias y
            tendencias clave en el derecho laboral colombiano.
          </p>
        </header>

        {/* ======================
            NOVEDAD DESTACADA
        ====================== */}
        <article className={styles.featured}>
          <div className={styles.featuredImage}>{/* Imagen destacada */}</div>

          <div className={styles.featuredContent}>
            <span className={styles.tag}>Reforma laboral</span>
            <h3>
              Cambios clave en la reforma laboral que impactan a los empleadores
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula, lorem at volutpat fermentum, sapien justo dictum libero,
              sit amet consequat lorem erat sed neque.
            </p>

            <Link href="/novedades/reforma-laboral" className={styles.readMore}>
              Leer análisis completo →
            </Link>
          </div>
        </article>

        {/* ======================
            LISTADO EDITORIAL
        ====================== */}
        <div className={styles.list}>
          <article className={styles.item}>
            <span className={styles.date}>Enero 2026</span>
            <h4>Jornada laboral: nuevos ajustes y aplicación práctica</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
            <Link href="/novedades/jornada-laboral">Leer más</Link>
          </article>

          <article className={styles.item}>
            <span className={styles.date}>Diciembre 2025</span>
            <h4>
              Obligaciones del empleador frente a incapacidades prolongadas
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio praesent libero.
            </p>
            <Link href="/novedades/incapacidades">Leer más</Link>
          </article>

          <article className={styles.item}>
            <span className={styles.date}>Noviembre 2025</span>
            <h4>Últimas sentencias de la Corte Suprema en materia laboral</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam.
            </p>
            <Link href="/novedades/sentencias-laborales">Leer más</Link>
          </article>
        </div>

        {/* ======================
            CTA
        ====================== */}
        <div className={styles.footer}>
          <Link href="/novedades" className={styles.allArticles}>
            Ver todas las novedades laborales →
          </Link>
        </div>
      </div>
    </section>
  );
}
