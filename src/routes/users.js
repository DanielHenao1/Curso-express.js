// const users = (app) => {
//   app.get("/UserName", (req, res) => {
//     res.send("UserName route");
//   });

//   app.get("/profile", (req, res) => {
//     console.log(req.body);
//     res.send("Profile page");
//   });
// };

// module.exports = users;

// Lo anterior lo podemos hacer de una mejor manera utilizando el modulo Router de express

// const express = require("express");
// // Vamor a llamar desde express el modulo Router y lo guardaremos en una constante por que ella nos devuelve un objeto
// const router = express.Router();

// Lo anterior tambien lo podriamos hacer de la siguiente manera
const { Router } = require("express");
const router = Router();

// router.get("/UserName", (req, res) => {
//   res.send("UserName route");
// });

// router.get("/profile", (req, res) => {
//   console.log(req.body);
//   res.send("Profile page");
// });

// Ejemplo con EJS
router.get("/users", (req, res) => {
  res.render("users");
});

module.exports = router;
