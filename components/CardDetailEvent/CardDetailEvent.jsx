import React from "react";
import styles from "./cardDetailEvent.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessIcon from "@mui/icons-material/Business";

export default function CardDetailEvent() {
  return (
    <div className={styles.containerDE}>
      <div className={styles.containerImgTitleDescDE}>
        <div className={styles.conticonDetEvtTitle} >
          <BusinessIcon className={styles.iconDetEvt} />
          <div className={styles.titleDE}>Detalles del evento</div>
        </div>
        <p className={styles.textDE}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea enim
          laborum exercitationem, labore vero sint sequi dolores minus
          voluptatibus eos et velit recusandae molestiae reprehenderit
          consequuntur veritatis libero quod?
        </p>
        <div className={styles.lineaH} ></div>
        <div className={styles.conticonDetEvtTitle}>
          <EventIcon className={styles.iconDetEvt}/>
          <div className={styles.titleDE}> Date</div>
        </div>
        <p className={styles.textDE}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea enim
          laborum exercitationem, labore vero sint sequi dolores minus
          voluptatibus eos et velit recusandae molestiae reprehenderit
          consequuntur veritatis libero quod?
        </p>
        <div className={styles.lineaH} ></div>
        <div className={styles.conticonDetEvtTitle}>
          <ScheduleIcon className={styles.iconDetEvt} />
          <div className={styles.titleDE}>schedule</div>
        </div>
        <p className={styles.textDE}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea enim
          laborum exercitationem, labore vero sint sequi dolores minus
          voluptatibus eos et velit recusandae molestiae reprehenderit
          consequuntur veritatis libero quod?
        </p>
        <div className={styles.lineaH} ></div>
      </div >
      <div className={styles.containerImgTitleDescDE}>
        <div className={styles.conticonDetEvtTitle}>
          <img className={styles.iconDetEvt} src="/codev.png" alt="" />
          <div className={styles.titleDE}> Código de vestimenta</div>
        </div>
        <p className={styles.textDE}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea enim
          laborum exercitationem, labore vero sint sequi dolores minus
          voluptatibus eos et velit recusandae molestiae reprehenderit
          consequuntur veritatis libero quod?
        </p>
        <div className={styles.lineaH} ></div>
        <div className={styles.conticonDetEvtTitle}>
          <LocationOnIcon className={styles.iconDetEvt}/>
          <div className={styles.titleDE}> Lugar</div>
        </div>
        <p className={styles.textDE}> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea enim
          laborum exercitationem, labore vero sint sequi dolores minus
          voluptatibus eos et velit recusandae molestiae reprehenderit
          consequuntur veritatis libero quod?
        </p>
        <img className={styles.mapsDetEvt} src="/maps.png" alt="" />
      </div>
    </div>
  );
}
