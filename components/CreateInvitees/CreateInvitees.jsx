import React, { useState, useEffect } from "react";
import styles from "./createInvitees.module.scss";
import { useRouter } from "next/router";

const initialStateInvitado = {
  nameInvitee: "",
  emailInvitee: "",
  asignedTicketsInvitee: "",
};
const initialEvento = {
  eventType: "",
  eventName: "",
  detailsEvent: "",
  eventDressCode: "",
  eventDate: "",
  timeDate: "",
  eventLocation: {
    adress: "dommi",
    lat: "dommi",
    long: "dommi",
  },
  eventNumInvitee: 0,
  invitees: [],
};

export default function createInvitees(props) {
  const { idEvento } = props;
  const router = useRouter();

  const [dataCreateInvitee, setCreateInvitee] = useState(initialStateInvitado);
  const [dataEvent, setDataEvent] = useState(initialEvento);
  const [token, setToken] = useState();

  useEffect(() => {
    const miStorage = window.localStorage;
    const tokenS = JSON.parse(miStorage.getItem("tokenUser"));
    const id = JSON.parse(miStorage.getItem("idUser"));

    if (!tokenS) {
      // ruteo login
      router.push("/login-user");
    } else if (idEvento.length > 0) {
      setToken(tokenS);
      async function getEvent() {
        const url = `http://localhost:8080/events/${idEvento}`;
        const event = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: tokenS,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.success ? data.data.events : data.data.message);
            return data.success ? data.data.events : initialState;
          })
          .catch((err) => console.log("Hubo un error en la peticion", err));
        setDataEvent(event); //se setea al estado router quiery id
      }

      getEvent();
    }
  }, [props.idEvento]);

  function saveState(event) {
    setCreateInvitee({
      ...dataCreateInvitee,
      [event.target.name]: event.target.value,
    });
  }
  async function addInviteeToEnvet(newEvent) {
    const url = `http://localhost:8080/events/${idEvento}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(newEvent),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
        console.log("Respuesta del nuevo evento PATCH", response);
      })
      .catch((err) => console.log("Hubo un error en la peticion", err)); //
  }

  async function createInvitee(event) {
    event.preventDefault();
    const url = `http://localhost:8080/events/${idEvento}/invitees `;
    const options = {
      method: "POST",
      body: JSON.stringify(dataCreateInvitee),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
        const arrayInvitees = dataEvent.invitees
          ? [...dataEvent.invitees, response.data.invitee]
          : [response.data.invitee];
        //console.log(arrayInvitees);
        const editEvent = dataEvent;
        editEvent.invitees = arrayInvitees;
        setDataEvent(editEvent);
        addInviteeToEnvet(dataEvent);
      })
      .catch((err) => console.log("Hubo un error en la peticion", err)); //
  }
  return (
    <div className={styles.containerLoginAndImg}>
      <div className={styles.containerLogin}>
        <div className={styles.contLogin}>
          <h2 className={styles.titleLogin}>Agrega a tus Invitados</h2>
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
                name="nameInvitee"
                onChange={saveState}
                value={dataCreateInvitee.name}
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Numero de entradas</p>
              <input
                className={styles.inputLogin}
                type="Number"
                placeholder="Numero de entradas"
                name="asignedTicketsInvitee"
                onChange={saveState}
                value={dataCreateInvitee.lastName}
              />
            </div>
            <div>
              <p className={styles.upInputLogin}>Email</p>
              <input
                className={styles.inputLogin}
                type="text"
                placeholder="Email"
                name="emailInvitee"
                onChange={saveState}
                value={dataCreateInvitee.email}
              />
            </div>
          </div>
          <button className={styles.btnL} onClick={createInvitee}>
            Agregar
          </button>
        </div>
      </div>
      <div className={styles.contImgLoginW}>
        <img className={styles.imgLoginW} src="/inviteeAdd.jpg" alt="" />
      </div>
    </div>
  );
}
