import React from "react";
import styles from "./cardUsChaan.module.scss";

export default function CardUsChaan() {
  return (
    <div className={styles.ContentCardUs}>
      <div className={styles.ContainerCardUs}>
        <h2>Sobre nosotros</h2>
        <p className={styles.ContainerTextCardUs}>
          Somos el portal de dónde podras gestionar tus eventos, pero más allá
          de eso somos unos apasionados en podre untir a las personas,
          facilitando la conunicación y organización de sus eventos.
        </p>
      </div>
    </div>
  );
}
