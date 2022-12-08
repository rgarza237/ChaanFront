import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import RegisterEvent from "../../components/RegisterEvent/RegisterEvent";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";

const initialState = {
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
};

export default function About() {
  const [dataEvent, setDataEvent] = useState(initialState); //dataIdEvent
  //const [token, setToken] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return; //
    const miStorage = window.localStorage;
    let token = JSON.parse(miStorage.getItem("tokenUser"));
    const idUser = JSON.parse(miStorage.getItem("idUser"));
    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      async function getEvent() {
        const url = `http://localhost:8080/events/${router.query.id}`;
        const event = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: token,
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
  }, [router.isReady]); //
  return (
    <div>
      <NavbarUser> </NavbarUser>
      <RegisterEvent existingEvent={dataEvent}> </RegisterEvent>
      <Footer></Footer>
    </div>
  );
}
