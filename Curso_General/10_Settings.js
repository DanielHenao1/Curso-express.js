const express = require("express");
const morgan = require("morgan");
// const path = require("path");
const app = express();

// Cuando quiero que una ruta respete las mayusculas y las minusculas utilizamos lo siguiente
app.set("case sensitive routing", true);

// Con esto establecemos una variable y un nombre, en este caso lo utilizamos para renombrar nuestra server
app.set("appName", "Express Course");

app.use(express.json());
app.use(morgan("dev"));

app.get("/UserName", (req, res) => {
  res.send("Username route");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor ${app.get("appName")} salida puerto ${port}`);
});
