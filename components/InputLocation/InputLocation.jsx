import React from "react";
import styles from "./inputLocation.module.scss";

export default function InputLocation() {
  return (
    <input
      className={styles.inputLE}
      type="text"
      placeholder="Ubicación del evento"
    />
  );
}
