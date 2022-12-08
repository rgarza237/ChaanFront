import React from "react";
import styles from "./titleEventD.module.scss";

export default function TitleEventD() {
  return (
    <div className={styles.ContainerEventD}>
      <h1 className={styles.textEventDH1}>Titulo del evento</h1>
      <p className={styles.textEventDTitle}>Los invitamos a "tipo de evento"</p>
      <button className={styles.btnDE}>Confirmar</button>
    </div>
  );
}
