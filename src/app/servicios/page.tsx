"use client";

import styles from "./Servicios.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faHandshake,
  faFileContract,
  faUserTie,
  faScaleBalanced,
  faBuilding,
  faUsers,
  faMoneyBillWave,
  faClipboardList,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const services = [
  {
    icon: faGavel,
    title: "Demandas laborales",
    description:
      "Representación y defensa en demandas laborales ante juzgados y tribunales, incluyendo procesos ordinarios, especiales y de seguridad social.",
  },
  {
    icon: faHandshake,
    title: "Conciliaciones extrajudiciales",
    description:
      "Acompañamiento y representación en conciliaciones laborales extrajudiciales, orientadas a la solución efectiva de conflictos y la reducción de riesgos legales.",
  },
  {
    icon: faFileContract,
    title: "Contratos laborales",
    description:
      "Elaboración, revisión y actualización de contratos laborales, acuerdos especiales y documentos relacionados con la relación laboral.",
  },
  {
    icon: faUserTie,
    title: "Asesoría al trabajador",
    description:
      "Asesoría jurídica integral a trabajadores en asuntos laborales, derechos contractuales, reclamaciones y procesos judiciales.",
  },
  {
    icon: faBuilding,
    title: "Asesoría laboral a empresas",
    description:
      "Asesoría preventiva y estratégica para empresas en materia laboral, cumplimiento normativo, gestión de personal y relaciones laborales.",
  },
  {
    icon: faScaleBalanced,
    title: "Defensa jurídica integral",
    description:
      "Defensa legal integral en procesos laborales y de seguridad social, con un enfoque estratégico orientado a resultados y mitigación de riesgos.",
  },
  {
    icon: faUsers,
    title: "Procesos colectivos",
    description:
      "Asesoría y representación en procesos colectivos, conflictos sindicales, negociaciones colectivas y relaciones laborales complejas.",
  },
  {
    icon: faMoneyBillWave,
    title: "Liquidaciones laborales",
    description:
      "Cálculo, revisión y elaboración de liquidaciones laborales, indemnizaciones y prestaciones sociales conforme a la ley colombiana.",
  },
  {
    icon: faClipboardList,
    title: "Auditorías laborales",
    description:
      "Auditorías laborales preventivas para identificar riesgos, verificar el cumplimiento legal y fortalecer la gestión laboral de las empresas.",
  },
  {
    icon: faBriefcase,
    title: "Despidos y reintegros",
    description:
      "Asesoría y representación en procesos de despido, terminación de contratos, reintegros laborales y controversias derivadas.",
  },
];

export default function Servicios() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.container}>
      {/* HEADER */}
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Servicios de derecho laboral en Colombia</h2>

        <p>
          Ofrecemos servicios jurídicos especializados en derecho laboral y
          seguridad social, orientados a la asesoría, prevención y defensa de
          empresas y trabajadores en Colombia. Contamos con atención a nivel
          nacional y oficina principal en Bogotá.
        </p>
      </motion.div>

      {/* GRID DE SERVICIOS */}
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.15, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon icon={service.icon} />
            </motion.div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
