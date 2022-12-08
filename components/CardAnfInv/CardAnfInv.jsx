import React from "react";
import styles from "./cardAnfInv.module.scss";
import Link from "next/link";

export default function CardAnfInv() {
  return (
    <div className={styles.ContainerCardsAnfInv}>
      <Link href="/login-user">
        <a>
          <div className={styles.overFow}>
            <img className={styles.imgAnf} src="/Anfi2.jpg" alt="" />
          </div>
          <p className={styles.textCArd}>Soy anfitrión</p>
        </a>
      </Link>
      <Link href="/login-invitee">
        <a>
          <div className={styles.overFow}>
            <img className={styles.imgInv} src="/Inv.jpg" alt="" />
          </div>
          <p className={styles.textCArd}>Soy invitado</p>
        </a>
      </Link>
    </div>
  );
}
