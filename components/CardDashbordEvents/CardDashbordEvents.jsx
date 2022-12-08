import React, { useState } from "react";
import styles from "./cardDashbordEvents.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CardDashbordEvents(props) {
  console.log(props);
  const events = props.events;
  return (
    <div className={styles.containerMyEventsAndImg}>
      <div className={styles.containerMyEvents}>
        <div className={styles.contMyEvents}>
          <div>
            <h2 className={styles.titleMyEvents}>Mis eventos</h2>
            <div className={styles.lineMyEvents}></div>
          </div>
          <Link href="/register-event">
            <button className={styles.btnLMEW}>Crear evento</button>
          </Link>
        </div>

        {events.map((event, i) => {
          return (
            <>
              <div className={styles.contMyEventsinfo}>
                <div className={styles.titleEvnt}>
                  <Link href={`/detail-event-user/${event._id} `}>
                    <h3>
                      {i + 1}-{event.eventName}
                    </h3>
                  </Link>
                </div>
                <div>
                  <Link href={`/register-event/${event._id} `}>
                    <a className={styles.ancorTitleEvnt} href="">
                      Editar
                    </a>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Link href="/registerEvent">
        <button className={styles.btnLME}>Crear evento</button>
      </Link>
    </div>
  );
}
