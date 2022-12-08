import Form from "react-bootstrap/Form";
import styles from "./formSelectorCodVes.module.scss";
import React from "react";

export default function FormSelectorCodVes() {
  return (
    <Form.Select
      className={styles.containerFormCDV}
      aria-label="Default select example1"
    >
      <option>Código de vestimenta</option>
      <option value="1">Formal</option>
      <option value="2">Informal</option>
      <option value="3">Casual</option>
      <option value="1">Negocios</option>
      <option value="2">Coktail</option>
    </Form.Select>
  );
}
