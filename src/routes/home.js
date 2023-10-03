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
const axios = require("axios");
const router = Router();

router.get("/", (req, res) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "Ryan",
      lastname: "Perez",
    },
    {
      id: 2,
      name: "Juan",
      lastname: "Ramos",
    },
  ];

  res.render("index", {
    title: "My Express App",
    isActive,
    users,
  });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", async (req, res) => {
  res.render("Dashboard");
});

// Ejemplo de async code with axios utilizando servidor externos placeholder
router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.render("posts", {
    posts: response.data,
  });
});

module.exports = router;
