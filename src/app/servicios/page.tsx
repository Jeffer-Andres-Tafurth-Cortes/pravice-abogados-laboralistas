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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    icon: faHandshake,
    title: "Conciliaciones extrajudiciales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.",
  },
  {
    icon: faFileContract,
    title: "Contratos laborales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor.",
  },
  {
    icon: faUserTie,
    title: "Asesoría al trabajador",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat.",
  },
  {
    icon: faBuilding,
    title: "Asesoría a empresas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde.",
  },
  {
    icon: faScaleBalanced,
    title: "Defensa jurídica integral",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem.",
  },
  {
    icon: faUsers,
    title: "Procesos colectivos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam.",
  },
  {
    icon: faMoneyBillWave,
    title: "Liquidaciones laborales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure.",
  },
  {
    icon: faClipboardList,
    title: "Auditorías laborales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus.",
  },
  {
    icon: faBriefcase,
    title: "Despidos y reintegros",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam.",
  },
];

export default function Servicios() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Nuestros Servicios</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
