import React from "react";
import styles from "./titleMyEvts.module.scss";

export default function TitleMyEvts() {
  return (
    <div className={styles.ContantMyEventTitle}>
      <div className={styles.ContainerMyEventTitle}>
        <h1 className={styles.textEventDH1}>Bienvenid@ a Cha’an</h1>
        <p className={styles.nameOfOrganizer}>Nombre del organizador</p>
      </div>
    </div>
  );
}
