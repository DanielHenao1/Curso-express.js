const express = require("express");

const App = express();

App.get("/", (req, res) => {
  res.sendFile("./static/index.html", {
    root: __dirname,
  });
});

const puerto = 3000;

App.listen(puerto);
console.log(`Servidor escuchando en el puerto....... ${puerto}`);