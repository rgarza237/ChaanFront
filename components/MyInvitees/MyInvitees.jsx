import React, { useEffect, useState } from "react";
import styles from "./myInvitees.module.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "Nombre", width: 130 },

  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 90,
  },
  {
    field: "tikets",
    headerName: "Tikets",
    type: "number",
    width: 90,
  },
];

const rows = [{ id: 1, firstName: "", email: "", tikets: 0 }];

export default function MyInvitees(props) {
  const [dataInvitees, setDataInvitees] = useState(rows);

  useEffect(() => {
    if (props.event !== undefined) {
      const arrayInvitees = props.event.invitees.map((invitee, i) => {
        return {
          id: i + 1,
          firstName: invitee.nameInvitee,
          email: invitee.emailInvitee,
          tikets: invitee.asignedTicketsInvitee,
        };

        /*   setDataInvitees([
          ...dataInvitees,
          {
            id: i + 1,
            firstName: invitee.nameInvitee,
            email: invitee.emailInvitee,
            tikets: invitee.asignedTicketsInvitee,
          },
        ]);
        console.log(dataInvitees);*/
      });
      setDataInvitees(arrayInvitees);
    }
  }, [props]);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.miniheader}>
        <h3>My Events</h3>
        <p>|</p>
        <h3>PROPS PAPU</h3>
      </div>
      <div className={styles.miniheader}>
        <h4>Data</h4>
        <h4>Invitation</h4>
        <h4> Invitees </h4>
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={dataInvitees}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
