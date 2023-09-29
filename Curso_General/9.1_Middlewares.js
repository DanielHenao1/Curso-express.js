const express = require("express");
const app = express();
const port = 3000;

// Vamos a crear un middleware que nos ayude a verificar si el usuario esta autenticado con funcion felcha

// const prueba = (req, res, next) => {
//   console.log("primero paso por elmiddleware");
//   next();
// };
// app.use(prueba);

app.use((req, res, next) => {
  console.log("primero paso por elmiddleware");
  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.get("/about", (req, res) => {
  res.send("about page");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

// NOTA: el middleware siempre se ejecuta antes de la ruta}`);
