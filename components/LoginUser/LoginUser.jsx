import React, { useState } from "react";
import styles from "./loginUser.module.scss";
import { useRouter } from "next/router";

const initialState = {
  email: "",
  password: "",
};

export default function LoginUser() {
  const router = useRouter();

  const [dataLogin, setDataLogin] = useState(initialState);

  function saveState(event) {
    // initialState[event.target.name] = event.target.value;
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function login(event) {
    event.preventDefault();
    const url = "http://localhost:8080/organizer/login";
    const options = {
      method: "POST",
      body: JSON.stringify(dataLogin),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        if (response.data.token.token) {
          localStorage.setItem(
            "tokenUser",
            JSON.stringify(response.data.token.token)
          );
          localStorage.setItem(
            "idUser",
            JSON.stringify(response.data.token.id)
          );
          router.push("/dashboard-organizer");
        } else {
          alert(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("El email y/o contraseña son incorrectos");
      });
  }

  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Login</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>Email</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Email"
                name="email"
                onChange={saveState}
                value={dataLogin.email}
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Password</p>
              <input
                className={styles.inputLogin}
                type="password"
                placeholder="Password"
                name="password"
                onChange={saveState}
                value={dataLogin.password}
              />
            </div>
            <div className={styles.contetaContaseña}>
              <a className={styles.aContaseña}>Forgot my password</a>
            </div>
          </div>
          <button className={styles.btnL} onClick={login}>
            Login
          </button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/picLogW.jpg" alt="" />
      </div>
    </div>
  );
}
