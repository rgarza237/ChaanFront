import React from "react";
import styles from "./titleEventDUser.module.scss";
import Link from "next/link";

export default function TitleEventD() {
  return (
    <div className={styles.ContainerEventDUser}>
      <h1 className={styles.textEventDH1User}>Titulo del evento</h1>
      <p className={styles.textEventDTitleUser}>
        Los invitamos a "tipo de evento"
      </p>
      <div className={styles.contentbtnDE}>
        <button className={styles.btnDE}>Edit event</button>
        <Link href="/create-invitees/6278780765edbe2bc40c67ee">
          <button className={styles.btnDEAI}>Agragar invitado</button>
        </Link>
        <a className={styles.ancorDE}>Delete event</a>
      </div>
    </div>
  );
}
