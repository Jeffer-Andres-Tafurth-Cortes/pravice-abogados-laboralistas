"use client";

import styles from "../styles/CallToAction.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className={styles.cta}
      aria-labelledby="cta-laboral"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        id="cta-laboral"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        Abogados laboralistas especializados en derecho laboral
      </motion.h2>

      <motion.p variants={fadeUp} transition={{ duration: 0.8 }}>
        Proteja su empresa y evite sanciones con el respaldo de abogados
        laboralistas expertos en contratos de trabajo, despidos, procesos
        disciplinarios y gestión de conflictos laborales.
      </motion.p>

      <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
        <motion.div
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/contacto"
            className={styles.primaryBtn}
            aria-label="Solicitar asesoría con abogados laboralistas"
          >
            Solicitar asesoría legal
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
