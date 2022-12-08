import React, { useState, useEffect } from "react";
import styles from "./registerEvent.module.scss";
import { useRouter } from "next/router";
import Form from "react-bootstrap/Form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function RegisterEvent(props) {
  const router = useRouter();
  const { existingEvent } = props;
  const [dataEvent, setDataEvent] = useState(existingEvent);
  const classes = useStyles();

  //setTimeout(function () {
  //  setDataEvent(existingEvent);
  //}, 1000);

  useEffect(() => {
    //if (!existingEvent._id) return;
    console.log(props);
    const miStorage = window.localStorage;
    const token = JSON.parse(miStorage.getItem("tokenUser"));
    const id = JSON.parse(miStorage.getItem("idUser"));

    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      setDataEvent(existingEvent);
    }
  }, [props]);

  function saveState(event) {
    setDataEvent({
      ...dataEvent,
      [event.target.name]: event.target.value,
    });
  }

  async function createEvent(event) {
    event.preventDefault();
    const miStorage = window.localStorage;
    const token = JSON.parse(miStorage.getItem("tokenUser"));
    const id = JSON.parse(miStorage.getItem("idUser"));
    const url = `http://localhost:8080/events/${
      existingEvent._id && existingEvent._id.length > 0
        ? existingEvent._id
        : "organizer"
    }`;

    const editEvent = {
      ...dataEvent,
      eventLocation: {
        adress: "dommi",
        lat: "dommi",
        long: "dommi",
      },
    };
    //console.log(editEvent);
    const options = {
      method:
        existingEvent._id && existingEvent._id.length > 0 ? "PUT" : "POST",
      body: JSON.stringify(
        existingEvent._id && existingEvent._id.length > 0
          ? editEvent
          : dataEvent
      ),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    await fetch(url, options)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log("Hubo un error en la peticion", err)); //
  }

  return (
    <div className={styles.containerFormRegisterEvent}>
      <div className={styles.containerFormReg}>
        <div className={styles.contForm}>
          <h2 className={styles.titleForm}>Registra tu evento</h2>
          <div className={styles.lineLogin}></div>
        </div>
        <div className={styles.contentLogin}>
          <div className={styles.cardLogin}>
            <div className={styles.contCardLogin}>
              <div>
                <p className={styles.upInputLogin}>Nombre del evento</p>
                <input
                  className={styles.inputLogin}
                  type="text"
                  placeholder="Nombre del evento"
                  name="eventName"
                  onChange={saveState}
                  value={dataEvent.eventName}
                />
              </div>
              <div>
                <p className={styles.upInputLogin}>Tipo de evento</p>

                <Form.Select
                  className={styles.inputLogin}
                  aria-label="Default select example2"
                  name="eventType"
                  onChange={saveState}
                  value={dataEvent.eventType}
                >
                  <option>Tipo de evento</option>
                  <option value="Boda">Boda</option>
                  <option value="Cumpleaños">Cumpleaños</option>
                  <option value="Bautizo">Bautizo</option>
                  <option value="Baby Shower">Baby Shower</option>
                  <option value="Graduación">Graduación</option>
                  <option value="Concierto">Concierto</option>
                  <option value="Exposición">Exposición</option>
                  <option value="Quince Años">Quince Años</option>
                  <option value="Clase">Clase</option>
                  <option value="Deportivo">Deportivo</option>
                  <option value="Conferencia">Conferencia</option>
                  <option value="Esparcimiento">Esparcimiento</option>
                </Form.Select>
              </div>
              <div>
                <p className={styles.upInputLogin}>Detalles del evento</p>
                <input
                  className={styles.inputLoginDE}
                  type="text"
                  placeholder="Detalles del evento"
                  name="detailsEvent"
                  onChange={saveState}
                  value={dataEvent.detailsEvent}
                />
              </div>
            </div>
            <div className={styles.contCardLoginB}>
              <div>
                <p className={styles.upInputLogin}>Código de vestimenta</p>
                <Form.Select
                  className={styles.containerFormCDV}
                  aria-label="Default select example1"
                  name="eventDressCode"
                  onChange={saveState}
                  value={dataEvent.eventDressCode}
                >
                  <option>Código de vestimenta</option>
                  <option value="Formal">Formal</option>
                  <option value="Informal">Informal</option>
                  <option value="Casual">Casual</option>
                  <option value="Negocios">Negocios</option>
                  <option value="Coktail">Coktail</option>
                </Form.Select>
              </div>
              <div>
                <p className={styles.upInputLogin}>Fecha del evento</p>
                <div className={styles.containerFormDE}>
                  <form noValidate className={styles.textFormDE}>
                    <TextField
                      className={styles.textFormDE}
                      name="eventDate"
                      onChange={saveState}
                      value={dataEvent.eventDate}
                      id="date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </form>
                </div>
              </div>
              <div>
                <p className={styles.upInputLogin}>Hora del evento</p>
                <div className={styles.containerFormTE}>
                  <form className={styles.textFormTE} noValidate>
                    <TextField
                      className={styles.textFormTE}
                      name="timeDate"
                      onChange={saveState}
                      value={dataEvent.timeDate}
                      id="time"
                      type="time"
                      defaultValue="00:00"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                  </form>
                </div>
              </div>
              {/*
              <div>
                <p className={styles.upInputLogin}>Lugar del evento</p>
                <input
                  className={styles.inputLE}
                  type="text"
                  placeholder="Ubicación del evento"
                  name="eventLocation"
                  onChange={saveState}
                  value={dataEvent.eventLocation}
                />
              </div>*/}
              <div>
                <p className={styles.upInputLogin}>Numero de invitados</p>
                <input
                  className={styles.inputLogin}
                  name="eventNumInvitee"
                  onChange={saveState}
                  value={dataEvent.eventNumInvitee}
                  type="number"
                  placeholder="Numero de invitados"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentLogin}>
        <button className={styles.btnL} onClick={createEvent}>
          Completar registro
        </button>
      </div>
    </div>
  );
}
