
const express = require("express");
const App = express();
const puerto = 3000;

App.use(express.text()); // Para que el servidor pueda interpretar el textog
App.use(express.json()); // Para que el servidor pueda interpretar el json 
App.use(express.urlencoded({ extended: false })); // Para que el servidor pueda interpretar el urlencoded

// Cuendo el cliente nos envia datos lo que utilizamos en una ruta POST
App.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Request recibido");
  // res.send(req.body);
});

App.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});