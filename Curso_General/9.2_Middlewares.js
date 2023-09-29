const express = require("express");
const app = express();
const port = 3000;

// Vamos a crear un middleware que nos ayude a verificar si el usuario esta autenticado con funcion felcha

// este middleware afecta todas las rutas
const prueba = (req, res, next) => {
  console.log("primero paso por el middleware");
  next();
};
app.use(prueba);

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

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

// Si quiero que una ruta especifica no se afecte por los middleware se ponen antes de los middleware
