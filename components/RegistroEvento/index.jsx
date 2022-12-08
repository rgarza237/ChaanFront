import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import "./styles.css";

const currencies = [
  {
    value: "USD",
    label: "Ranchada",
  },
  {
    value: "EUR",
    label: "Cumpleaños",
  },
  {
    value: "BTC",
    label: "Tocada",
  },
  {
    value: "JPY",
    label: "Boda",
  },
];

function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [currency, setCurrency] = React.useState("EUR");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="container">
      <div className="main">
        <h2 className="registro">Registro del Evento</h2>
        <div className="card">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <h4>Datos del Evento</h4>

            <div id="registerEvent">
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleCurrency}
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-textarea"
                label="Event Name"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="Event date"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
              <TextField
                id="standard-textarea"
                label="Number of invitees"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
            </div>
          </Box>
          <div className="botonmorado">
            <Button className="boton" variant="contained">
              Crear Evento
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultilineTextFields;
