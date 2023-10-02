// Para este ejercicio creamos en la carpeta static (index.css) - (index.js)

const express = require("express");
const morgan = require("morgan");

// Si tubieramos todo en una carpeta (src) deberiamos utilizar este modulo para enrutar
const path = require("path");

// Importo la funcion de home.js
const homeRoutes = require("./routes/home");
// importo la funcion de users.js
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(homeRoutes);
app.use(userRoutes);

// Cuando ya no utlizamos como funciones sino como importacion del modulo Router esto no nos funciona
// // Ejecuto la funcion homeRoutes y le paso el parametro app
// homeRoutes(app);
// // Ejecuto la funcion userRoutes y le paso el parametro app
// userRoutes(app);

app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

const port = 3000;
app.listen(port, () => {
  console.log(`el servidor esta escuchando por el puerto ${port}`);
});

// Quedamos en la hora 3:09:47 (Template Engines)
// Express Framework de Nodejs, Curso para principiantes (Javascript en el backend)
