import React from "react";
import styles from "./cardsMyEventsOrganizer.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CardsMyEventsOrganizer(props) {
  console.log(props);
  const events = props.events;

  return (
    <div className={styles.contentCardMyEventsTitleAndCards}>
      <div className={styles.contInfoMyEvents}>
        <h3> Eventos próximos</h3>

        {events.map((event) => {
          return (
            <>
              <div>
                <div>
                  <Link
                    href={`http://localhost:3000/detail-event-user/${event._id} `}
                  >
                    <h4>{event.eventType}</h4>
                  </Link>
                  <p>Evento para {event.eventDate}</p>
                </div>
              </div>
              <div className={styles.lineaH}></div>
            </>
          );
        })}
      </div>
      <div className={styles.contentCardMyEvents}>
        <div className={styles.containerCardMyEvents}>
          <Link href="/dashboard-eventos">
            <div className={styles.cardMyEventsDurazno}>
              <FiberManualRecordIcon></FiberManualRecordIcon>
              <h3 className={styles.cardMyEventsTitle}> Mis eventos</h3>
            </div>
          </Link>
          <Link href="/invitees">
            <div className={styles.cardMyEventsMorado}>
              <FiberManualRecordIcon></FiberManualRecordIcon>
              <h3 className={styles.cardMyEventsTitle}> Mis invitaciones</h3>
            </div>
          </Link>
          <Link
            href={`http://localhost:3000/register-event/organizer`}
          >
            <div className={styles.cardMyEventsPink}>
              <FiberManualRecordIcon></FiberManualRecordIcon>
              <h3 className={styles.cardMyEventsTitle}>Crea un eventos</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
