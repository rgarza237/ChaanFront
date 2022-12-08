import Form from "react-bootstrap/Form";
import styles from "./formSelectorTipEvent.module.scss";
import React from "react";

export default function FormSelectorTipEvent() {
  return (
    <Form.Select
      className={styles.containerFormTE}
      aria-label="Default select example2"
    >
      <option>Tipo de evento</option>
      <option value="1">Boda</option>
      <option value="2">Cumpleaños</option>
      <option value="3">Bautizo</option>
      <option value="1">Baby Shower</option>
      <option value="2">Graduación</option>
      <option value="3">Concierto</option>
      <option value="1">Exposición</option>
      <option value="2">Quince Años</option>
      <option value="3">Clase</option>
      <option value="3">Deportivo</option>
      <option value="1">Exposición</option>
      <option value="2">Conferencia</option>
      <option value="3">Esparcimiento</option>
    </Form.Select>
  );
}
