const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

// este middleware descargado con npm install morgan (investigar mas)
app.use(morgan("dev"));

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.get("/about", (req, res) => {
  res.send("about Page");
});

// este middleware solo afecta la ruta /dashboard
app.use((req, res, next) => {
  if (req.query.login === "daniel@gmail.com") {
    console.log("Segundo paso por aca y se logueo de manera correcta");
    next();
  } else {
    res.send("No autorizado");
  }
});

app.listen(port, () => {
  console.log(`Escuchando pór el puerto ${port}`);
});