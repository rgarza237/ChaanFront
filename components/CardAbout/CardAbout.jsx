import React from "react";
import styles from "./cardAbout.module.scss";

export default function CardAbout() {
  return (
    <div className={styles.ContainerCardAbout}>
      <div className={styles.ContainerSimbolos}>
        <div>
          <img className={styles.iconSim} src="/iconA.png" alt="" />
        </div>
        <p className={styles.textFooter}>Regístrate</p>
      </div>
      <div className={styles.ContainerSimbolos}>
        <img className={styles.iconSim} src="/iconC.png" alt="" />
        <p className={styles.textFooter}>Crea tu evento</p>
      </div>
      <div className={styles.ContainerSimbolos}>
        <img className={styles.iconSim} src="/iconD.png" alt="" />
        <p className={styles.textFooter}>Compartelo</p>
      </div>
    </div>
  );
}
