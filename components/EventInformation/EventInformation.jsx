import React from "react";
import styles from "./eventinformation.module.scss";

export default function EventInformation() {
  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Information for your Event</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>Event date</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Event date"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Location</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Location"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Dress Code</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Dress code "
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Event Time</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Your city"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Details event</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Details event"
              />
            </div>
          </div>
          <button className={styles.btnL}>Finish your register</button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/picLogW.jpg" alt="" />
      </div>
    </div>
  );
}
