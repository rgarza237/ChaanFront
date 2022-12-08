import React, { useState } from "react";
import styles from "./loginInvitee.module.scss";
import { useRouter } from "next/router";

export default function LoginInvitee() {
  return (
    <div className={styles.containerLoginInviteeAndImg}>
      <div className={styles.containerLoginInvitee}>
        <div className={styles.contLoginInvitee}>
          <h2 className={styles.titleLoginInvitee}>Login Invitee</h2>
          <div className={styles.lineLoginInvitee}></div>
        </div>
        <div className={styles.contentLoginInvitee}>
          <div className={styles.cardLoginInvitee}>
            <div>
              <p className={styles.upInputLoginInvitee}>Password</p>
              <input
                className={styles.inputLoginInvitee}
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
          <div className={styles.contetaContaseñaInvitee}>
              <button className={styles.btnLI}>Entar como invitado</button>
              <a className={styles.aContaseñaInvitee}>Forgot my password</a>
            </div>
        </div>
      </div>
      <div className={styles.contImgLoginInviteeW}>
        <img className={styles.imgLoginInviteeW} src="/invitte.jpg" alt="" />
      </div>
    </div>
  );
}
