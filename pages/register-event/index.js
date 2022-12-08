import React, { useEffect } from "react";
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
  // const [dataEvent, setDataEvent] = useState(initialState);
  //const [token, setToken] = useState();
  const router = useRouter();

  useEffect(() => {
    const miStorage = window.localStorage;
    let token = JSON.parse(miStorage.getItem("tokenUser"));
    if (!token) {
      // ruteo login
      router.push("/login-user");
    }
  });

  return (
    <div>
      <NavbarUser> </NavbarUser>
      <RegisterEvent existingEvent={initialState}> </RegisterEvent>
      <Footer></Footer>
    </div>
  );
}
