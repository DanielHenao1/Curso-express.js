// const home = (app) => {
//   app.all("/about", (req, res) => {
//     res.send("About page");
//   });

//   app.get("/dashboard", (req, res) => {
//     res.sendFile("Dashboard page");
//   });
// };

// module.exports = home;

// Lo anterior lo podemos hacer de una mejor manera utilizando el modulo Router de express

// const express = require("express");
// // Vamor a llamar desde express el modulo Router y lo guardaremos en una constante por que ella nos devuelve un objeto
// const router = express.Router();

// Lo anterior tambien lo podriamos hacer de la siguiente manera
const { Router } = require("express");
const router = Router();

router.all("/about", (req, res) => {
  res.send("About page");
});

router.get("/dashboard", (req, res) => {
  res.sendFile("Dashboard page");
});

module.exports = router;
