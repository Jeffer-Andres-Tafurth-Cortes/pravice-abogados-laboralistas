"use client";

import Image from "next/image";
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
          <h2>Novedades laborales en Colombia: cambios legales y tendencias</h2>
          <p>
            Manténgase actualizado con los cambios normativos, noticias
            recientes y decisiones que impactan el derecho laboral, las
            obligaciones de empleadores y los derechos de los trabajadores en
            Colombia.
          </p>
        </header>

        {/* ======================
            NOVEDAD DESTACADA
        ====================== */}
        <article className={styles.featured}>
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
            <span className={styles.tag}>Reforma laboral</span>
            <h3>
              Reforma laboral 2025 en Colombia: cambios clave que impactan
              jornadas, salarios y contratos
            </h3>

            <p>
              En Colombia, la reforma laboral sancionada como Ley 2466 de 2025
              introduce cambios importantes en la regulación de jornadas
              laborales, contratos, horas extras y recargos dominicales que
              afectan tanto a empleadores como a trabajadores. La ley busca
              fortalecer condiciones de trabajo, promover empleo formal y
              garantizar mayores derechos laborales, incluyendo ajustes en las
              horas de trabajo semanales y la eliminación de ciertas prácticas
              de precarización. Recomendamos revisar los detalles de la reforma
              y sus implicaciones legales para su empresa o negocio.
            </p>

            <Link
              href="https://www.elcolombiano.com/negocios/prima-diciembre-2025-cambios-reforma-laboral-colombia-pagos-fechas-calculo-FA31464890"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              Ver noticia completa → (El Colombiano)
            </Link>
          </div>
        </article>

        {/* ======================
            LISTADO EDITORIAL
        ====================== */}
        <div className={styles.list}>
          <article className={styles.item}>
            <span className={styles.date}>Enero 2026</span>
            <h4>
              Empleadores deberán afiliar a trabajadoras domésticas a la ARL sin
              excepción
            </h4>

            <p>
              El Ministerio del Trabajo reafirma que la afiliación de empleadas
              domésticas al sistema de seguridad social y a la Administradora de
              Riesgos Laborales (ARL) es obligatoria para todos los empleadores
              sin importar la jornada laboral. Este cambio repercute
              directamente sobre las obligaciones laborales y el cumplimiento
              normativo de las empresas.
            </p>

            <Link
              href="https://www.infobae.com/colombia/2026/01/27/ley-en-colombia-exige-la-afiliacion-de-las-empleadas-domesticas-a-la-arl-sin-excepciones/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer noticia → (Infobae Colombia)
            </Link>
          </article>

          <article className={styles.item}>
            <span className={styles.date}>Diciembre 2025</span>
            <h4>
              Ajustes de jornada laboral y recargos en Colombia tras la reforma
            </h4>

            <p>
              La reforma laboral reduce gradualmente la jornada máxima legal a
              42 horas semanales y establece cambios en los recargos por trabajo
              nocturno, dominical y festivo — incrementando progresivamente la
              compensación, en un esfuerzo por aumentar la protección del
              trabajador sin disminuir salarios. Estos ajustes tienen impacto
              directo en la gestión de nómina de las empresas.
            </p>

            <Link
              href="https://cambiocolombia.com/economia/articulo/2025/6/lo-que-realmente-cambiara-en-su-empleo-con-la-nueva-ley-laboral-jornada-contratos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer noticia → (Cambio Colombia)
            </Link>
          </article>

          <article className={styles.item}>
            <span className={styles.date}>Noviembre 2025</span>
            <h4>
              Prima de diciembre y otros ajustes salariales tras la reforma
              laboral
            </h4>

            <p>
              Además de los cambios en jornada, la reforma laboral ha modificado
              algunos aspectos vinculados al cálculo de pagos como la prima de
              servicios y otros beneficios salariales que las empresas deben
              considerar antes de cerrar el año fiscal. Estos ajustes buscan
              armonizar el derecho laboral con los nuevos estándares legales.
            </p>

            <Link
              href="https://www.elcolombiano.com/negocios/prima-diciembre-2025-cambios-reforma-laboral-colombia-pagos-fechas-calculo-FA31464890"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer noticia → (El Colombiano)
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
