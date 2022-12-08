import React, { useState } from "react";
import styles from "./signIn.module.scss";
import { useRouter } from "next/router";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  city: "dommi",
  country: "dommi",
  telephone: "0000000000",
};

export default function SignUser() { //props
  const router = useRouter();

  const [dataSignIn, setDataSignIn] = useState(initialState); //cambiar NOM Invite

  function saveState(event) {
    setDataSignIn({
      ...dataSignIn,
      [event.target.name]: event.target.value,
    });
  }

  async function createUser(event) { //cambiar nom
    event.preventDefault();
    const url = "https://api.chaan.site/organizer/signup"; //urlposman $id
    const options = {
      method: "POST",
      body: JSON.stringify(dataSignIn),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
        /* console.log(response.data.organizer._id);
        localStorage.setItem(
          "idUser",
          JSON.stringify(response.data.organizer._id)
        );*/
        router.push("/login-user"); // quitar poner alert se creo invite
      })
      .catch((err) => console.log("Hubo un error en la peticion", err)); //
  }
//agregar en cada imput el name y valiu  name="name"
      //onChange={saveState}
        //        value={dataSignIn.name}
  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Sign in</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div>
              <p className={styles.upInputLogin}>Nombre</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Nombre"
                name="name"
                onChange={saveState}
                value={dataSignIn.name}
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Apellido</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Apellido"
                name="lastName"
                onChange={saveState}
                value={dataSignIn.lastName}
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Email</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Email"
                name="email"
                onChange={saveState}
                value={dataSignIn.email}
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
                value={dataSignIn.password}
              />
            </div>
          </div>
          <button className={styles.btnL} onClick={createUser}>
            Sign in
          </button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/singinuser.jpg" alt="" />
      </div>
    </div>
  );
}
