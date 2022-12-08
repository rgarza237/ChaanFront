import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/NavbarUser/NavbarUser";
import Footer from "../../components/Footer/Footer";
import CreateInvitees from "../../components/CreateInvitees/CreateInvitees";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const [idEvent, setIdEvent] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const miStorage = window.localStorage;
    let token = JSON.parse(miStorage.getItem("tokenUser"));
    if (!token) {
      // ruteo login
      router.push("/login-user");
    } else {
      setIdEvent(router.query.id);
    }
  });

  return (
    <div>
      <NavbarUser> </NavbarUser>
      <CreateInvitees idEvento={idEvent}></CreateInvitees>
      <Footer></Footer>
    </div>
  );
}
