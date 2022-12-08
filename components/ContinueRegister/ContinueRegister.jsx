import React from "react";
import styles from "./continueRegister.module.scss";

export default function ContinueRegister() {
  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Continue your Register</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>First Name</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Last Name</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Last name"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Email</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Email "
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>City</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Your city"
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Country</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Contry"
              />
            </div>
          </div>
          <button className={styles.btnL}>Finish your register</button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/registro.jpg" alt="" />
      </div>
    </div>
  );
}
