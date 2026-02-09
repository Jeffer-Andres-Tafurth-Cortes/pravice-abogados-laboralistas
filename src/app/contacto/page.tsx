"use client";

import styles from "./Contacto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contacto() {
  /* =========================
     VARIANTS
  ========================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* ======================
            HEADER
        ====================== */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Contacto con abogados laboralistas en Colombia</h2>
          <p>
            En Pravice Abogados brindamos asesoría legal especializada en
            derecho laboral y seguridad social para empresas y empleadores en
            toda Colombia, con atención directa desde nuestra oficina en Bogotá.
          </p>
        </motion.header>

        {/* ======================
            CONTACTO DIRECTO
        ====================== */}
        <motion.div
          className={styles.actions}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* WhatsApp */}
          <motion.a
            variants={fadeUp}
            href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label="Contactar abogados laboralistas por WhatsApp"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            Asesoría laboral inmediata por WhatsApp
          </motion.a>

          {/* Email */}
          <motion.a
            variants={fadeUp}
            href="mailto:contacto@tudominio.com"
            className={styles.emailBtn}
            aria-label="Enviar correo a abogados laboralistas en Bogotá"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Solicitar asesoría legal por correo
          </motion.a>
        </motion.div>

        {/* ======================
            MAPA
        ====================== */}
        <motion.div
          className={styles.mapSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3>Oficina de abogados laboralistas en Bogotá</h3>

          <p className={styles.mapDescription}>
            Nuestra firma cuenta con oficina física en Bogotá, desde donde
            atendemos procesos laborales, asesorías empresariales y consultas
            legales para clientes en toda Colombia.
          </p>

          <motion.div
            className={styles.mapWrapper}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              title="Ubicación oficina de abogados laboralistas en Bogotá - Pravice Abogados"
              src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
