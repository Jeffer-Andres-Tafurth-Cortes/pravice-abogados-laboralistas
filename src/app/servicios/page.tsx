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
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Servicios de derecho laboral en Colombia</h2>

        <p>
          Ofrecemos servicios jurídicos especializados en derecho laboral y
          seguridad social, orientados a la asesoría, prevención y defensa de
          empresas y trabajadores en Colombia. Contamos con atención a nivel
          nacional y oficina principal en Bogotá.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
