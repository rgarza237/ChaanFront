import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import Footer from "../../components/Footer/Footer";
import MyInvitees from "../../components/MyInvitees/MyInvitees";
import { useRouter } from "next/router";

export default function About() {
  const [dataEvent, setDataEvent] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const miStorage = window.localStorage;
    let token = JSON.parse(miStorage.getItem("tokenUser"));
    // const idUser = JSON.parse(miStorage.getItem("idUser"));
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
            //console.log(data.success ? data.data.events : data.data.message);
            return data.success ? data.data.events : initialState;
          })
          .catch((err) => console.log("Hubo un error en la peticion", err));
        setDataEvent(event);
      }

      getEvent();
    }
  }, [router.isReady]);

  return (
    <div>
      <NavbarUser> </NavbarUser>
      <MyInvitees event={dataEvent}></MyInvitees>
      <Footer></Footer>
    </div>
  );
}
