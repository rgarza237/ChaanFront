import React from "react";
import styles from "./sectionVideo.module.scss";

export default function CardVideo() {
  return (
    <div>
      <div className={styles.ContainerVideoM}>
        <video autoPlay loop muted className={styles.Video}>
          <source src="/videochaanmobilSc.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.ContainerVideoW}>
        <video autoPlay loop muted className={styles.Video}>
          <source src="/videochaanwSc.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
