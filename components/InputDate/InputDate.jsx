import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./inputDate.module.scss";

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

export default function InputDate() {
  const classes = useStyles();

  return (
    <div className={styles.containerFormDE}>
      <form noValidate className={styles.textFormDE}>
        <TextField
          className={styles.textFormDE}
          id="date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>
  );
}
